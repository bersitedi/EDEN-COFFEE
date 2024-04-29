import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import CardDetail from "./pages/card/CardDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card/:id" element={<CardDetail />} />
      </Routes>
    </div>
  );
}

export default App;
