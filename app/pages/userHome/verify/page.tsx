"use client"
import React from "react";

const Page = () => {



    // const handleVerifyClick=()=>{
     
    // }

  return (
    <div
      className="child p-3 flex flex-col gap-2 "
      style={{ lineHeight: "21px" }}
    >
      <h1 className="text-xl">
        Please enter the Test Report Form (TRF) number below.
      </h1>
      <h2 className="text-[#666A70] text-md">
        It is important to note the following:
      </h2>
      <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
        <li>Reports for tests taken recently may not be available yet.</li>
        <li>
          Reports for tests taken before 1-Jan-2003 are not held in the system.
        </li>
        <li>
          You must only attempt to verify a TRF where you have been presented
          with a hardcopy from the IELTS test centre where the candidate took
          their test.
        </li>
        <li>
          If no match is found for the TRF you are checking, you will be
          directed to a screen which details what you need to do next.
        </li>
        <li>
          We will be unable to verify a result that you cannot find on the site
          that is more than two years old. More information can be found in the{" "}
          <br />
          <em> Information for Candidates Booklet </em> located on
          <a
            href="http://www.ielts.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E31837]"
          >
            {" "}
            www.ielts.org{" "}
          </a>
          .
        </li>
      </ul>
      <div className="ipt flex items-center gap-2 mt-3">
        <p>Test Report Form (TRF) number :</p>
        <input
          type="text"
          placeholder=""
          style={{
            border: "2px solid #ccc",
            padding: "3px",
            borderRadius: "2px",
          }}
        />
        <button onClick={() => window.location.href = "/pages/userHome/serialDetails"} className="bg-[#ac1027] text-white self-center px-4 py-2 text-[18px] cursor-pointer">
          Verify
        </button>
      </div>
    </div>
  );
};

export default Page;
