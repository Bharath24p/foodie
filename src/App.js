import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Cart from "./components/Cart";
import RestMenu from "./components/RestMenu";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/restmenu/:resId" element={<RestMenu />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
