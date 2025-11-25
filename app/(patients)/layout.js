"use client";
import React, { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
;

export default function Layout({ children }) {

      const { data: session, status } = useSession();
      const router = useRouter();
    
      useEffect(() => {
        if (status === "loading") return;
  
        if (!session) {
          router.push("/login");
        }
      }, [session, status, router]);
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
