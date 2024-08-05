import { Route, Routes } from "react-router-dom";
import Header from "./components/shared/header/Header";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import AboutUs from "./pages/about/About";
import Footer from "./components/shared/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
