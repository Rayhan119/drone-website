import React from "react";
import useAuth from "../../../../Hooks/useAuth";
import "./DashboardHome.css";

const DashboardHome = () => {
  const { users } = useAuth();
  return (
    <div>
      <div className="dashboard-home-header">
        <h1>
          Welcome <span>{users.displayName}</span> To the Dashboard
        </h1>
      </div>
    </div>
  );
};

export default DashboardHome;
