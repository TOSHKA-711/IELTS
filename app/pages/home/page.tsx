import NavBar from "@/app/components/navBar";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="home-content border-1 border-white flex flex-row items-start gap-6 max-md:flex-col max-md:px-3">
        <div className="child flex flex-col gap-6 min-lg:min-w-[28.25rem] max-md:min-w-full">
          <div className="part flex flex-col">
            <span
              className="bg-[#b80036] text-white text-[20px] pt-[9px] pb-[17px] pl-5 pr-31 mb-3"
              style={{ borderRadius: "25% 0% / 0% 150% 150% 100%" }}
            >
              Registered Users
            </span>
            <a href="/auth" className="text-[#B80036] underline pl-5 text-sm">
              Login
            </a>
            <p className="pl-5 text-sm px-2">
              Email addresses and passwords are case sensitive.
            </p>
          </div>
          <div className="part flex flex-col">
            <span
              className="bg-[#b80036] text-white text-[20px] pt-[9px] pb-[17px] pl-5 pr-31 mb-3"
              style={{ borderRadius: "25% 0% / 0% 150% 150% 100%" }}
            >
              Register
            </span>
            <a
              href="/auth/register"
              className="text-[#B80036] underline pl-5 text-sm px-2"
            >
              Register for the Online Results Verification and E-download or
              update your contact details
            </a>
          </div>
          <div className="part flex flex-col gap-2">
            <span
              className="bg-[#b80036] text-white text-[20px] pt-[9px] pb-[17px] pl-5 pr-31 mb-3"
              style={{ borderRadius: "25% 0% / 0% 150% 150% 100%" }}
            >
              About
            </span>
            <a
              className="text-[#B80036] underline pl-5 text-sm px-2"
              href="ftp/termsandconditions.pdf"
              target="_blank"
            >
              Terms and Conditions
            </a>

            <a
              className="text-[#B80036] underline pl-5 text-sm px-2"
              rel="noopener"
              href="https://www.ielts.org/en-us/policy/privacy-policy"
              target="_blank"
            >
              Privacy Policy
            </a>
          </div>
          <div className="part flex flex-col">
            <span
              className="bg-[#b80036] text-[#b80036] text-[18px] pt-[6px] pb-[14px] pl-5 pr-31 mb-0"
              style={{
                borderRadius: "25% 0% / 0% 150% 150% 100%",
                userSelect: "none",
              }}
            >
              Registered Users
            </span>
          </div>
        </div>
        <div
          className="child p-3 flex flex-col gap-2 "
          style={{ lineHeight: "21px" }}
        >
          <h1 className="text-[#b80036] text-xl">
            Welcome to the IELTS Test Report Form (TRF) Verification Service
          </h1>
          <h2 className="text-[#b80036] text-md">
            The IELTS results verification service has been upgraded. Login as
            normal to see changes.
          </h2>
          <p className="text-[14px]">
            If you wish to temporarily return to the old site design,{" "}
            <a className="text-[#B80036] underline" href="/auth">
              click here
            </a>{" "}
            and login as normal. IELTS is used by many organisations as evidence
            of competence in English. A candidate who has taken IELTS is given a
            Test Report Form (TRF) which details the candidate's test scores. In
            order to check that the candidate is presenting a genuine TRF, and
            that the candidate and the TRF match, we have developed an online
            verification service. Access to the service is free and the service
            will help you to ensure that anyone presenting you with a TRF is
            entitled to claim the level of competence detailed on the TRF.
            Access to the site is restricted in order to protect the data we
            hold on candidates. You will not be able to carry out general
            searches of the data we hold; you will only be able to verify
            complete TRF numbers or test scores shared with your organisation.
          </p>
          <p className="text-[14px]">
            To make verification more convenient where an organisation needs to
            verify a large number of TRFs, results for a number of candidates
            can be downloaded in a single file.
          </p>
          <p className="bg-[#b80036] text-white p-2">
            What if my organisation needs access to the service?
          </p>
          <p className="text-[14px]">
            Please note that only IELTS Recognising Organisations can apply to
            access this service. It is not available to organisations providing
            additional services to clients, such as recruitment agents, travel
            agents, legal and immigration agents. You can apply to have access
            to the TRF Verification Service by completing the{" "}
            <a
              className="text-[#B80036] underline"
              rel="noopener"
              href="https://cambridgeenglish.formstack.com/forms/ielts_recognising_organisation"
              target="_blank"
            >
              Administrator Application Form
            </a>{" "}
            and agreeing to the{" "}
            <a
              className="text-[#B80036] underline"
              href="ftp/termsandconditions.pdf"
              target="_blank"
            >
              Administrator Terms and Conditions
            </a>
            . You will need{" "}
            <a
              className="text-[#B80036] underline"
              href="http://www.adobe.com/"
              target="_new"
            >
              Adobe Acrobat
            </a>{" "}
            to view PDF documents. Please check within your organisation to
            ensure that it is not already registered. If your organisation is
            already registered we will reject your request and refer you to the
            Administrator for your organisation.
          </p>
          <p className="bg-[#b80036] text-white p-2">
            What if my organisation already has access but I do not?
          </p>
          <p className="text-[14px]">
            if your organisation already has access, please contact the person
            at your organisation who we have made an Administrator; they will be
            able to give you access to the service
          </p>
        </div>
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

export default HomePage;
