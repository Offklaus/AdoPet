import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Doar from "./pages/Doar";
import AdoptionList from "./pages/AdoptionsList";
import AnimalDetail from "./pages/AnimalDetail";
import "./index.css";


export default function App() {
  return (
    <>
      <Navbar />

      <div className="main-content">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doar" element={<Doar />} />
          <Route path="/adocao" element={<AdoptionList />} />
          <Route path="/animais" element={<AnimalDetail />} />
        </Routes>
      </div>
    </>
  );
}

