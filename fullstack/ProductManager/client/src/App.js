import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./views/Main";
import Details from "./views/Details";
import Update from "./views/Update";

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Link to="/">Home</Link>

      {/* TODO hookup front-end routes to backend */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/products/:id/edit" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
