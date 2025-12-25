'use client'
import React from 'react'
import { signOut, useSession } from "next-auth/react";

const AdminHeader = () => {
  const session=useSession();
  return (
    <nav className="navbar navbar-expand px-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="/dashboard">
          <div className="first-logo d-flex align-items-center">
            <img src="img/Group 4123.png" alt="" />
            <span className="logo-text ms-2">Prescripto</span>
          </div>
        </a>
        <a
          href="Admin-panal"
          className="btn py-1 px-3  btn-outline-dark rounded-5 mt-1 text-capitalize"
        >
          {session?.data?.user?.role}
        </a>
        <div className="ms-auto d-flex align-items-center gap-3">
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="btn log-out-btn py-1 px-3 rounded-5 mt-1"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default AdminHeader
