import { Route, Routes } from "react-router-dom";
import "./App.scss";
import {
  Allbox,
  Asosiy,
  Biz_xaqimizda,
  Charter_reyslar,
  Footer,
  Navbar,
  Qoidalar,
  Yangiliklar,
  Yangiliklar_ichi,
  Yonalishlar,
} from "../app";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Asosiy />} />
        <Route path="/Yonalishlar" element={<Yonalishlar />} />
        <Route path="/Charter_reyslar" element={<Charter_reyslar/>} />
        <Route path="/Qoidalar" element={<Qoidalar />} />
        <Route path="/Yangiliklar" element={<Yangiliklar />} />
        <Route path="/Biz_xaqimizda" element={<Biz_xaqimizda />} />
        <Route path="/Yangiliklar_ichi" element={<Yangiliklar_ichi />} />
        <Route path="/All_box" element={<Allbox />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
