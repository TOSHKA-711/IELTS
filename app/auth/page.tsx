"use client";

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Image from "next/image";
import { PiArticle } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";

export default function AuthPage() {
  const [isLogin, setIsLogin] = React.useState(true);

  const handleNextClick = () => {};
  return (
    <div
      className="opacity-90 "
      style={{
        background: "radial-gradient(#40404b, #111118) rgba(34,34,40,0.94)",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Dialog
        open={true}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiPaper-root": {
            margin: "15px",
            boxShadow: "0 0 40px 4px #111118",
          },
          "& .MuiDialogContent-root": { padding: "0px 0px" },
        }}
      >
        {isLogin ? (
          <DialogContent className="bg-[#fff] text-white w-[22rem]">
            <div className="login-card flex flex-col">
              <div className="head w-full flex items-center justify-center flex-col bg-[rgba(241,241,241,0.8)] py-4">
                <Image
                  width={100}
                  height={50}
                  alt="logo"
                  className="auth0-lock-header-logo"
                  src="https://ielts-results-service.s3.eu-west-2.amazonaws.com/IELTS_TM_red_85x58.svg"
                ></Image>
                <p className="text-black text-xl">IELTS Results </p>
              </div>
              <div className="body w-full flex flex-col items-center p-3 gap-3">
                <span
                  className="w-full flex items-stretch gap-2 rounded-b-sm"
                  style={{ border: "1px solid #f1f1f1" }}
                >
                  <PiArticle className="text-black text-[40px] p-3 bg-[#f1f1f1]" />
                  <input
                    type="email"
                    placeholder="yours@example.com"
                    className="text-black border-none outline-none text-sm px-2"
                  />
                </span>
                <span
                  className="w-full flex items-stretch gap-2 rounded-b-sm"
                  style={{ border: "1px solid #f1f1f1" }}
                >
                  <PiArticle className="text-black text-[40px] p-3 bg-[#f1f1f1]" />
                  <input
                    type="email"
                    placeholder="yours@example.com"
                    className="text-black border-none outline-none text-sm px-2"
                  />
                </span>
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-black text-[12px] mt-2 -mb-5 cursor-pointer"
                >
                  Don't remember your password?
                </button>
              </div>
            </div>
            <button>d</button>
            <div
              className="actions bg-[#ddd] text-white flex items-center justify-center p-5 "
              style={{ backgroundColor: "rgb(227, 24, 55)" }}
            >
              <button
                onClick={handleNextClick}
                className="text-white flex items-center gap-1 hover:text-lg duration-300 cursor-pointer"
              >
                LOG IN
                <IoIosArrowForward />
              </button>
            </div>
          </DialogContent>
        ) : (
          <DialogContent className="bg-[#fff] text-white w-[22rem]">
            <div className="login-card flex flex-col">
              <div className="head w-full flex items-center justify-center flex-col bg-[rgba(241,241,241,0.8)] py-4">
                <Image
                  width={100}
                  height={50}
                  alt="logo"
                  className="auth0-lock-header-logo"
                  src="https://ielts-results-service.s3.eu-west-2.amazonaws.com/IELTS_TM_red_85x58.svg"
                ></Image>
                <p className="text-black text-xl">Reset your password</p>
              </div>
              <div className="body w-full flex flex-col items-center p-3 px-5 gap-4">
                <p
                  className="text-[12px]"
                  style={{ color: "rgba(0,0,0,0.54)" }}
                >
                  Please enter your email address. We will send you an email to
                  reset your password.
                </p>
                <span
                  className="w-full flex items-stretch gap-2 rounded-b-sm"
                  style={{ border: "1px solid #f1f1f1" }}
                >
                  <PiArticle className="text-black text-[40px] p-3 bg-[#f1f1f1]" />
                  <input
                    type="email"
                    placeholder="yours@example.com"
                    className="text-black border-none outline-none text-sm px-2"
                  />
                </span>

                <button
                  onClick={() => setIsLogin(true)}
                  className="text-black text-[16px] mt-2 -mb-5 cursor-pointer"
                >
                  back to login ?
                </button>
              </div>
            </div>
            <button>d</button>
            <div
              className="actions bg-[#ddd] text-white flex items-center justify-center p-5 "
              style={{ backgroundColor: "rgb(227, 24, 55)" }}
            >
              <button
                onClick={handleNextClick}
                className="text-white flex items-center gap-1 hover:text-lg duration-300 cursor-pointer"
              >
                SEND EMAIL
                <IoIosArrowForward />
              </button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
