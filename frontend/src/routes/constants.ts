import { ComponentType } from "react";
import { Home } from "../Pages/Home/Home";
import { Routers } from "../Pages/Routers/Routers";

interface IRoute {
  path: string;
  label: string;
  Element: ComponentType;
  sidebarVisibility?: boolean;
}
export const routes: IRoute[] = [
  { path: "/", label: "Home", Element: Home, sidebarVisibility: true },
  {
    path: "/routers",
    label: "Routers",
    Element: Routers,
    sidebarVisibility: true,
  },
];
