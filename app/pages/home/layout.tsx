import NavBar from "@/app/components/navBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <NavBar /> */}
      {children}
    </div>
  );
};

export default Layout;
