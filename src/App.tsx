import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardOverview from "./pages/DashboardOverview";
import DocsPage from "./pages/DocsPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardOverview />} />
        {/*<Route path="/analysis" element={<AnalysisPage />} /> */}
        <Route path="/docs" element={<DocsPage />} />
        {/*<Route path="/logs" element={<LogsPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
