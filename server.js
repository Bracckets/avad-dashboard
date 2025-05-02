import express from "express";
import cors from "cors";
import fetch from "node-fetch"; // Make sure you installed this: npm install node-fetch
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config(); // Load variables from .env

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("Server is running.");
});

app.post("/api/chat", async (req, res) => {
  const { query } = req.body;
  console.log("Received query:", query);

  if (!query) {
    return res.status(400).json({ error: "Missing query in request body." });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1",
        messages: [{ role: "user", content: query }],
      }),
    });

    const data = await response.json();
    console.log("OpenAI response:", data);

    if (data.error) {
      console.error("OpenAI API Error:", data.error);
      return res.status(500).json({ error: data.error.message });
    }

    const answer = data.choices?.[0]?.message?.content;
    res.json({ result: answer || "No response from model." });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// Save history to local JSON file
app.post("/api/save", async (req, res) => {
  const { query, data } = req.body;
  if (!query || !data) {
    return res.status(400).json({ error: "Missing query or answer" });
  }

  const historyPath = path.resolve("history.json");

  try {
    // Read existing history or start a new array
    let existing = [];
    if (fs.existsSync(historyPath)) {
      const content = fs.readFileSync(historyPath, "utf-8");
      existing = JSON.parse(content);
    }

    // Append new entry
    existing.push({ query, answer, timestamp: new Date().toISOString() });

    // Save back to file
    fs.writeFileSync(historyPath, JSON.stringify(existing, null, 2));

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Failed to write history:", err);
    res.status(500).json({ error: "Failed to save history" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});


