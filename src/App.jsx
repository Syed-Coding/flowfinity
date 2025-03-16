import React from 'react';
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./Pages/Dashboard";
import Issue from "./Pages/Issue";
import { Route, Routes } from "react-router";
import IssueLog from "./Pages/IssueLog";
import Activity from "./Pages/Activity";
import ActivityLog from "./Pages/ActivityLog";
import MyTodo from "./Pages/MyTodo";
import SlaSearch from "./Pages/SlaSearch";
import CommentSection from "./Pages/Comment";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ResetPassword from "./Pages/ResetPassword";
import AuthLayout from './components/AuthLayout';// Import the new AuthLayout

function App() {
  return (
    <Routes>
      {/* Routes with Sidebar and Topbar */}
      <Route
        path="/*"
        element={
          <div className="flex h-screen bg-gray-100">

            <div className="fixed left-0 top-0 h-screen w-64 lg:w-64 md:w-48 sm:w-32">
              <Sidebar />
            </div>


            <div className="flex-1 flex flex-col overflow-hidden ml-64 lg:ml-64 md:ml-48 sm:ml-32">

              <Topbar />


              <div className="p-6 overflow-auto mt-16">
                <Routes>
                  <Route path="/issue" element={<Issue />} />
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/issue-log" element={<IssueLog />} />
                  <Route path="/activity" element={<Activity />} />
                  <Route path="/activity-log" element={<ActivityLog />} />
                  <Route path="/my-todo" element={<MyTodo />} />
                  <Route path="/sla-search" element={<SlaSearch />} />
                  <Route path="/comment" element={<CommentSection />} />
                </Routes>
              </div>
            </div>
          </div>
        }
      />


      <Route
        path="/login"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <AuthLayout>
            <SignUp />
          </AuthLayout>
        }
      />
      <Route
        path="/reset-password"
        element={
          <AuthLayout>
            <ResetPassword />
          </AuthLayout>
        }
      />
    </Routes>
  );
}

export default App;