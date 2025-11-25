"use client";

import React, { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {


  return (
    <div className="container">
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
