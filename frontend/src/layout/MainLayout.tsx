import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { Sidebar } from "../Components/Sidebar/Sidebar";

export const MainLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () =>
    setDrawerOpen((prevDrawerState) => !prevDrawerState);

  return (
    <div className="App">
      <Header onMenuClick={toggleDrawer} />
      <Sidebar open={drawerOpen} onClose={toggleDrawer} />
      <main className="App-main">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
