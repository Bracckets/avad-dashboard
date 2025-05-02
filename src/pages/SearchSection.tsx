import React, { useState, ChangeEvent } from "react";

export default function SearchSection() {
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      setResult(data.result ?? "No result.");

      await fetch("http://localhost:3001/api/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, data }),
      });
    } catch (err) {
      console.error(err);
      setResult("Error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <section>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-3xl shadow">
          <h3 className="text-xl font-semibold text-gray-800">Fast Insight</h3>

          <div className="flex flex-1 items-center gap-2 bg-neutral-100 rounded-full px-4 py-2">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search..."
              className="flex-1 bg-transparent text-gray-900 text-sm outline-none"
            />
            <button
              onClick={handleSearch}
              disabled={loading}
              aria-label="Search"
              className="w-5 h-5 bg-center bg-contain bg-no-repeat hover:scale-110 transition-transform"
              style={{
                backgroundImage:
                  'url("https://cdn.builder.io/api/v1/image/assets/TEMP/a631e4c1da67674545ddc7dd18b7081bd0433371?placeholderIfAbsent=true&apiKey=06583fef677b467aaaac25278e1414ed")',
              }}
            />
          </div>

          <button className="px-5 py-2 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700">
            Predict Outcome
          </button>
        </div>
      </section>

      {result && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
          <div className="bg-white max-w-md w-full p-6 rounded-2xl shadow-xl border">
            <h4 className="text-lg font-semibold mb-2">You asked:</h4>
            <p className="text-gray-600 mb-4">{query}</p>
            <h4 className="text-lg font-semibold mb-2">AI response:</h4>
            <p className="text-gray-900 whitespace-pre-line">{result}</p>
            <button
              onClick={() => setResult("")}
              className="mt-4 text-sm text-blue-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
