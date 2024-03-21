import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../components/Admin/Sidebar";
import Dashboard from "../../components/Admin/Dashboard";
import Header from "../../components/Admin/Header";

const AdminPanel = () => {
  const [USERID, setuserid] = useState("");

  return (
    <div className="flex flex-col min-h-screen max-h-full dashboard w-full">
      <div className="flex">
        <Sidebar />
        <div className="flex-grow flex flex-col">
          <Header />
          <Routes>
            {/* <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
