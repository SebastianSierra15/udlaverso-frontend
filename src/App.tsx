import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Inicio from "./pages/Inicio/Inicio";
import Login from "./pages/Auth/Login";
import Registrarse from "./pages/Auth/Registrarse";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registrarse" element={<Registrarse />} />
      </Routes>
    </Router>
  );
}

export default App;
