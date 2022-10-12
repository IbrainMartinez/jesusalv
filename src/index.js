import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home";
import Villanos from "./pages/Villanos/villanos";
import Heroes from "./pages/Heroes/heroes";
import Acercade from "./pages/acercade";
import "./style.css";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/acercade" element={<Acercade />} />
          <Route path="/villanos/villanos" element={<Villanos />} />
          <Route path="/Heroes/heroes" element={<Heroes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);