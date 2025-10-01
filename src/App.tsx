import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Inicio from "./pages/Inicio/Inicio";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
