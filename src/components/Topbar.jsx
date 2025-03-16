import { Bell } from "lucide-react";
import { useLocation } from "react-router-dom";

const Topbar = () => {
  const location = useLocation();

  return (
    <div className="h-16 bg-white shadow-sm flex items-center justify-between px-6 fixed top-0 left-64 right-0 z-10">
      {/* Left - Current Path */}
      <div className="text-gray-600 capitalize text-base font-medium">
        {location.pathname.replace("/", "") || "Dashboard"}
      </div>

      {/* Right - Notification & Profile */}
      <div className="flex items-center space-x-6 bg">
        {/* Notification Bell */}
        {/* <div className="relative cursor-pointer">
      <div className="p-2 rounded-full hover:bg-gray-100 transition duration-300">
        <Bell className="w-5 h-5 text-gray-600 hover:text-cyan-500 transition duration-300" />
      </div>
      <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
    </div> */}

        {/* Profile Section */}
        <div className="flex items-center space-x-3">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover border-2 cursor-pointer border-gray-200 hover:border-cyan-400 transition duration-300"
          />
          <div className="flex flex-col">
            <span className="text-sm text-gray-700">
              Hi, <span className="font-semibold text-gray-900">Syed</span>
            </span>
            <span className="text-gray-500 font-light text-xs flex items-center">
              <span className="mr-1">(Member)</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;