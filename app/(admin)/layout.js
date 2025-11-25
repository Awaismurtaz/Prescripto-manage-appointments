'use client'
import AdminHeader from "@/components/admin-header";
import AdminSidebar from "@/components/admin-sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";


export default function AdminLayout({ children }) {

      const { data: session, status } = useSession();
      const router = useRouter();
    
      useEffect(() => {
        if (status === "loading") return;
  
        if (!session) {
          router.push("/login");
        }
        
        if(session?.user?.role === "patient"){
          return router.push("/my-appointments");
        }
      }, [session, status, router]);

  return (
    <div>
      <AdminHeader />
      <section>
        <div className="row g-0">
          <div className="col-md-3 col-lg-2 border-end border-2">
            <AdminSidebar />
          </div>
          <div className="col-md-9 col-lg-10">
            <main>{children}</main>
          </div>
        </div>
      </section>
    </div>
  );
}
