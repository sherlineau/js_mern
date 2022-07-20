import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import CreatePage from "./views/CreatePage";
import UpdatePage from "./views/UpdatePage";
import Details from "./views/Details";

function App() {
  return (
    <div className="App">
      <h1 className="display-1">Authors</h1>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/authors/new" element={<CreatePage />} />
        <Route path="/authors/:id" element={<Details />} />
        <Route path="/authors/:id/edit" element={<UpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;
