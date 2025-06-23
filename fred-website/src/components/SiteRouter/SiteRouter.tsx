import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "../../Pages/MainPage/MainPage";
import About from "../../Pages/About/About";
import NavBar from "../NavBar/NavBar";

export default function SiteRouter() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
