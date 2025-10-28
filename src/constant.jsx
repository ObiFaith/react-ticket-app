import { LayoutGrid } from "lucide-react";

export const apiUrl = import.meta.env.VITE_API_URL;

export const ticketStatus = {
  open: "bg-green-400",
  closed: "bg-red-400",
  in_progress: "bg-yellow-400",
};

export const ticketPriority = {
  low: "bg-grey-100 text-gray-600",
  medium: "bg-yellow-200/70 text-yellow-700",
  high: "bg-red-50 text-red-600",
};

export const sidebarLinks = [
  {
    to: "/dashboard",
    name: "Dashboard",
    icon: <LayoutGrid className="size-5" />,
  },
];
