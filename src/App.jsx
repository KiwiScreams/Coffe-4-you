import { Route, Routes } from "react-router-dom";
import Header from "./components/shared/header/Header";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import AboutUs from "./pages/about/About";
import Footer from "./components/shared/footer/Footer";
import Detail from "./pages/detail/Detail";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="menu/:name" element={<Detail />} />
        <Route path="about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
