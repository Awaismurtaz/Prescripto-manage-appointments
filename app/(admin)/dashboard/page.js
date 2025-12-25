'use client'
import AdminDashboard from "@/components/admin-dashboard";
import DoctorDashboard from "@/components/doctor-dashboard";
import { useSession } from "next-auth/react";
import React from "react";

const Dashboard = () => {
  const session =useSession();
  const role=session?.data?.user?.role;
  console.log(role,"role")
  return (
    <div>
      <div className="dashboard-inner pt-4 ">
        {role==="admin" ?
        <AdminDashboard/>
        :
        <DoctorDashboard/>
         }
      </div>
    </div>
  );
};

export default Dashboard;
