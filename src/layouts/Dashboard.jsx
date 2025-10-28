import { useState } from "react";
import { Outlet } from "react-router";
import { Sidebar, DashboardHeader } from "../components";

export const DashboardLayout = () => {
  const [isToggle, setToggle] = useState(window.innerWidth < 768);

  const handleToggle = () => {
    setToggle(prev => !prev);
  };

  return (
    <main className="container flex">
      {/* Sidebar */}
      <Sidebar isToggle={isToggle} />
      <section className="w-full">
        {/* Header */}
        <DashboardHeader handleToggle={handleToggle} />
        {/* Main Content  */}
        <section className=" lg:px-16 md:px-9 px-5 h-full bg-primary-100 pt-8">
          <Outlet />
        </section>
      </section>
    </main>
  );
};
