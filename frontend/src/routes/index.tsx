import { Route, Routes as RouterRoutes } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { routes } from "./constants";

export const Routes = () => {
  const renderRoutes = routes.map(({ path, Element }) => (
    <Route key={path} path={path} element={<Element />} />
  ));
  return (
    <RouterRoutes>
      <Route path="/" element={<MainLayout />}>
        {renderRoutes}
      </Route>
    </RouterRoutes>
  );
};
