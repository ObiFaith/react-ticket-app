import { LayoutGrid } from "lucide-react";

export const token = localStorage.getItem("token");
export const apiUrl = import.meta.env.VITE_API_URL;

export const sidebarLinks = [
  {
    to: "/dashboard",
    name: "Dashboard",
    icon: <LayoutGrid className="size-5" />,
  },
  {
    to: "/dashboard",
    name: "Main",
    icon: <LayoutGrid className="size-5" />,
  },
];
