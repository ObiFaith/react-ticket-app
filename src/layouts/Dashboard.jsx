import { Outlet } from "react-router";
import { Sidebar, DashboardHeader } from "../components";
import { useState } from "react";

export const DashboardLayout = () => {
  const [isToggle, setToggle] = useState(window.innerWidth < 768);

  const handleToggle = () => {
    setToggle(prev => !prev);
  };

  return (
    <main className="container overflow-hidden min-h-svh flex">
      {/* Sidebar */}
      <Sidebar isToggle={isToggle} />
      <section className="w-full">
        {/* Header */}
        <DashboardHeader handleToggle={handleToggle} />
        {/* Main Content h-full  */}
        <section className="px-5 bg-primary-100 min-h-[calc(100svh-76px)] pt-8">
          <Outlet />
        </section>
      </section>
    </main>
  );
};
