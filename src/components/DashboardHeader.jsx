import { Bell, ChevronDown, TextAlignJustify } from "lucide-react";
import { useAuth } from "../context/Auth";

export const DashboardHeader = ({ handleToggle }) => {
  const { user } = useAuth();
  const fullName = `${user.lastName} ${user.firstName}`;

  return (
    <header className="bg-white border-b-2 border-grey-400/50 py-6 lg:px-16 md:px-9 px-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="cursor-pointer" onClick={handleToggle}>
            <TextAlignJustify className="size-5" />
          </span>
          <h2>
            Welcome{" "}
            <span className="font-semibold">{user ? fullName : "User"}</span>
          </h2>
        </div>
        <div className="flex max-[500px]:hidden items-center gap-3">
          <Bell className="size-5" />
          <div className="text-xl items-center flex gap-1 text-center">
            {user.imageUrl ? (
              <img
                src={user.imageUrl}
                alt={fullName + " Picture"}
                className="size-7 rounded-lg"
              />
            ) : (
              <h2>{user.lastName[0] + user.firstName[0]}</h2>
            )}
            <ChevronDown className="size-5" />
          </div>
        </div>
      </div>
    </header>
  );
};
