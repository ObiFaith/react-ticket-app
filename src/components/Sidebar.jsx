import { Logo } from ".";
import { LogOut } from "lucide-react";
import { useAuth } from "../context/Auth";
import { sidebarLinks } from "../constant";
import { NavLink, useNavigate } from "react-router";

export const Sidebar = ({ isToggle }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <section
      className={`bg-white w-full flex flex-col py-6 ${
        isToggle ? "max-w-24" : "max-w-40"
      }`}
    >
      <Logo className="text-center" />
      <nav className="space-y-1.5 pt-12 list-none">
        {sidebarLinks.map(({ to, name, icon, end }) => (
          <NavLink
            to={to}
            end={end}
            key={name}
            className={({ isActive }) =>
              `flex items-center outline-none font-medium py-3 gap-2.5 ${
                isActive
                  ? "bg-primary-400/5 text-primary-400"
                  : "hover:bg-primary-400/5 hover:text-primary-400"
              } ${isToggle ? "justify-center" : "justify-center"}`
            }
          >
            {icon}
            {!isToggle && <li>{name}</li>}
          </NavLink>
        ))}
      </nav>
      <NavLink
        to="/"
        onClick={handleLogout}
        className={`text-red-600 mt-auto items-center hover:font-medium hover:bg-red-600/5 py-3 flex gap-2 ${
          isToggle ? "justify-center" : "justify-center"
        }`}
      >
        <LogOut size="20" />
        {!isToggle && <span>Logout</span>}
      </NavLink>
    </section>
  );
};
