import { useEffect, useState } from "react";
import { Activity,  ListTodo } from "lucide-react";
import { MdWeb } from "react-icons/md"
import { AiOutlineIssuesClose } from "react-icons/ai";
import { TbLogs } from "react-icons/tb";
import { MdDashboardCustomize ,MdOutlineShortText,MdWrapText } from "react-icons/md";
import NavItem from "./NavItem";
import { useNavigate } from "react-router";
import { LoginOutlined } from '@ant-design/icons'
import {  } from "react-icons/md";

const Sidebar = () => {
  // State to track active menu item
  const [activeItem, setActiveItem] = useState("/");
  const navigate = useNavigate();

  useEffect(() => {
    navigate(activeItem);
  }, [activeItem]);

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-100 p-6 flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="flex items-center space-x-2 px-2 mb-8">
        <span className="text-2xl font-bold text-cyan-500">🌊</span>
        <span className="text-xl font-semibold text-gray-800">Flow finity</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1 overflow-y-auto"> {/* Allow sidebar content to scroll if needed */}
        <div className="mb-3  border-b border-gray-100">
          <NavItem icon={MdWeb} className="" label="Home Page" active={activeItem === "/"} onClick={() => setActiveItem("/")} />
          {/* <div className="ml-4 mb-1">
            <NavItem icon={MdOutlineShortText} label="Issue" active={activeItem === "/issue"} onClick={() => setActiveItem("/issue")} />
            <NavItem icon={MdWrapText} label="Issue Log" active={activeItem === "/issue-log"} onClick={() => setActiveItem("/issue-log")} />
          </div> */}


        </div>
        <NavItem icon={MdDashboardCustomize} label="Dashboard" active={activeItem === "/dashboard"} onClick={() => setActiveItem("/dashboard")} />
        <NavItem icon={AiOutlineIssuesClose} label="Issue" active={activeItem === "/issue"} onClick={() => setActiveItem("/issue")} />
        <NavItem icon={TbLogs} label="Issue Log" active={activeItem === "/issue-log"} onClick={() => setActiveItem("/issue-log")} />
        <NavItem icon={Activity} label="Activity" active={activeItem === "/activity"} onClick={() => setActiveItem("/activity")} />
        <NavItem icon={TbLogs} label="Activity Log" active={activeItem === "/activity-log"} onClick={() => setActiveItem("/activity-log")} />
        <NavItem icon={ListTodo} label="My Todo" active={activeItem === "/my-todo"} onClick={() => setActiveItem("/my-todo")} />
        <NavItem icon={TbLogs} label="SLA Miss Log" active={activeItem === "/sla-search"} onClick={() => setActiveItem("/sla-search")} />
      </nav>

      {/* Optional: User Profile or Footer */}
      <div className="mt-8 border-t border-gray-100 pt-6">
  <div className="flex items-center space-x-3 cursor-pointer group">
    {/* Icon Container */}
    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-red-500">
      <span className="text-lg font-medium text-gray-700 transition-all duration-300 group-hover:text-white">
        <LoginOutlined />
      </span>
    </div>

    {/* Text Container */}
    <div>
      <p className="text-sm text-gray-500 transition-all duration-300 group-hover:text-red-500">
        Log out
      </p>
    </div>
  </div>
</div>
    </div>
  );
};

export default Sidebar;