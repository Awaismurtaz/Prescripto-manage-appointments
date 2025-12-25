"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

export default function Layout({ children }) {

  return (
    <div className="container">
      <main>{children}</main>
    </div>
  );
}
