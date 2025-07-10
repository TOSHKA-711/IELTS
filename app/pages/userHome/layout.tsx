import NavBar from "@/app/components/navBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
       <div className="part flex flex-col w-1/2">
            <span
              className="bg-[#b80036] text-[#fff] text-[18px] pt-[6px] pb-[14px] pl-2 pr-10 mt-0 flex items-center justify-end"
              style={{
                borderRadius: "10px 10px 200px 10px",
                userSelect: "none",
              }}
            >
              TRF Query:
            </span>
          </div>
      <div className="home-content border-1 border-white flex flex-row items-start gap-6 max-md:flex-col max-md:px-3">
        <div className="child flex flex-col gap-0 min-lg:min-w-[28.25rem] max-md:min-w-full">
          <div className="part flex flex-col">
            <span
              className="bg-[#b80036] text-white text-[20px] py-[15px] pl-5 pr-31 mb-0 cursor-pointer"
              style={{ border: "1px solid white" }}
            >
              Home
            </span>
          </div>
          <div className="part flex flex-col">
            <span
              className="bg-[#7c0025] text-white text-[20px] py-[15px] pl-5 pr-31 mb-0 cursor-pointer"
              style={{ border: "1px solid white" }}
            >
              TRF Query
            </span>
          </div>
          <div className="part flex flex-col gap-2">
            <span
              className="bg-[#b80036] text-white text-[20px] py-[15px] pl-5 pr-31 mb-0 cursor-pointer"
              style={{ border: "1px solid white" }}
            >
              Update My Profile
            </span>
          </div>
          <div className="part flex flex-col gap-2">
            <span
              className="bg-[#b80036] text-white text-[20px] py-[15px] pl-5 pr-31 mb-0 cursor-pointer"
              style={{ border: "1px solid white" }}
            >
              FAQs
            </span>
          </div>
          <div className="part flex flex-col gap-2">
            <span
              className="bg-[#b80036] text-white text-[20px] py-[15px] pl-5 pr-31 mb-0 cursor-pointer"
              style={{ border: "1px solid white" }}
            >
              IELTS.org
            </span>
          </div>
          <div className="part flex flex-col">
            <span
              className="bg-[#b80036] text-[#b80036] text-[18px] pt-[6px] pb-[14px] pl-5 pr-31 mt-0"
              style={{
                borderRadius: "25% 0% / 0% 150% 150% 100%",
                userSelect: "none",
              }}
            >
              Registered Users
            </span>
          </div>
        </div>
        {children}
      </div>
      <div className="footer flex items-center justify-end w-full bg-[#b80036] text-white px-2 text-sm">
        <a
          rel="noopener"
          href="https://www.ielts.org/policy/privacy-policy"
          target="_blank"
        >
          Data Protection &amp; Privacy Statement
        </a>
      </div>
    </div>
  );
};

export default Layout;
