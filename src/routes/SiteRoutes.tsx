import type { ReactElement, ReactNode } from "react";
import About from "../Pages/About/About";
import MainPage from "../Pages/MainPage/MainPage";

export const SiteRoutes: siteRouteType[] = [
  { to: "./", component: <MainPage />, linkText: "Home" },
  { to: "./about", component: <About />, linkText: "About me" },
];

type siteRouteType = {
  to: string;
  component: ReactElement;
  linkText: ReactNode;
};
