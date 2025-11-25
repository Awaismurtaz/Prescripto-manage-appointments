"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AdminSidebar = () => {
  const pathname = usePathname();
  const session = useSession();

  if (session?.data?.user?.role === "admin") {
    return (
      <div>
        <ul className="nav flex-column">
          <li className="nav-item custom-nav pt-4">
            <Link
              className={`nav-link ${
                pathname === "/dashboard" ? "active" : ""
              }`}
              href="/dashboard"
            >
              <i className="fa-slab fa-regular fa-house" />
              <p>Dashboard</p>
            </Link>
          </li>

          <li className="nav-item custom-nav mt-3">
            <Link
              className={`nav-link ${
                pathname === "/appoinments-list" ? "active" : ""
              }`}
              href="/appoinments-list"
            >
              <i className="fa-regular fa-calendar-days" />
              <p>Appointments</p>
            </Link>
          </li>

          <li className="nav-item custom-nav mt-3">
            <Link
              className={`nav-link ${
                pathname === "/add-doctor" ? "active" : ""
              }`}
              href="/add-doctor"
            >
              <i className="fa-regular fa-calendar-plus" />
              <p>Add Doctors</p>
            </Link>
          </li>

          <li className="nav-item custom-nav mt-3">
            <Link
              className={`nav-link ${
                pathname === "/doctors-list" ? "active" : ""
              }`}
              href="/doctors-list"
            >
              <i className="bi bi-people m-0" />
              <p>Doctors list</p>
            </Link>
          </li>

          <li className="nav-item custom-nav mt-1">
            <Link
              className={`nav-link ${
                pathname === "/patients-list" ? "active" : ""
              }`}
              href="/patients-list"
            >
              <i className="bi bi-person" />
              <p>Patients</p>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
   if (session?.data?.user?.role === "doctor") {
     return (
       <div>
         <ul className="nav flex-column">
           <li className="nav-item custom-nav pt-4">
             <Link
               className={`nav-link ${
                 pathname === "/dashboard" ? "active" : ""
               }`}
               href="/dashboard"
             >
               <i className="fa-slab fa-regular fa-house" />
               <p>Dashboard</p>
             </Link>
           </li>

           <li className="nav-item custom-nav mt-3">
             <Link
               className={`nav-link ${
                 pathname === "/appoinments-list" ? "active" : ""
               }`}
               href="/appoinments-list"
             >
               <i className="fa-regular fa-calendar-days" />
               <p>Appointments</p>
             </Link>
           </li>

           <li className="nav-item custom-nav mt-1">
             <Link
               className={`nav-link ${
                 pathname === "/patients-list" ? "active" : ""
               }`}
               href="/patients-list"
             >
               <i className="bi bi-person" />
               <p>Patients</p>
             </Link>
           </li>
         </ul>
       </div>
     );
   }
};

export default AdminSidebar;
