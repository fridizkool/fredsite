import type { ReactElement, ReactNode } from "react";
import About from "../Pages/About/About";
import MainPage from "../Pages/MainPage/MainPage";
import Toys from "../Pages/Toys/Toys";

export const BASE = "/fredsite/";

export const SiteRoutes: siteRouteType[] = [
  { to: BASE, component: <MainPage />, linkText: "Home" },
  { to: BASE + "about", component: <About />, linkText: "About me" },
  { to: BASE + "toys", component: <Toys />, linkText: "Toys" },
];

type siteRouteType = {
  to: string;
  component: ReactElement;
  linkText: ReactNode;
};
