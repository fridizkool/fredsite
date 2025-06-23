import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "../NavBar/NavBar";
import { SiteRoutes } from "../../routes/SiteRoutes";

export default function SiteRouter() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <section className="p-4">
          <Routes>
            {SiteRoutes.map((route) => {
              return <Route path={route.to} element={route.component} />;
            })}
          </Routes>
        </section>
      </BrowserRouter>
    </>
  );
}
