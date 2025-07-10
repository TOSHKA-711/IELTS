"use client";
import Image from "next/image";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Page = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <div className="register bg-[#E31837] w-full min-h-screen flex flex-col gap-3 items-center justify-center max-sm:p-5">
      <Image
        src={"/508111_tmpl_head_6204f505535b5.png"}
        alt="logo"
        width={400}
        height={100}
        className="max-md:w-[15rem]"
      />
      <div className="form bg-white flex flex-col p-7 w-[50rem] gap-4 max-md:w-[30rem] max-sm:w-[22rem]">
        <p className="text-[#666A70] text-2xl my-10 max-sm:text-lg">
          Over 12,500 organisations around the world trust IELTS as a valid,
          secure and reliable indicator of English language proficiency.
        </p>

        <div className="options flex flex-col items-start gap-2 text-[#666A70]">
          <FormControl>
            <FormLabel
              id="demo-controlled-radio-buttons-group"
              sx={{ fontSize: "18px" }}
              className="max-sm:text-[14px]"
            >
              Get started by selecting one of the following options:*
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="I would like to register to accept IELTS results at our organisation"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="My organisation accepts IELTS results and I wish to update the following details (see below):"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="inputs w-full flex flex-col gap-3">
          <div className="ipt flex flex-col items-start gap-2 w-full">
            <span className="text-[#666A70] text-lg">Administrator name*</span>
            <input
              type="text"
              placeholder=""
              className="w-full p-2"
              style={{ width: "100%", border: "1px solid #666A70" }}
            />
            <p className="text-[#666A70] text-md -mt-2 max-sm:text-[14px]">
              Please enter the name of the person who will be the primary
              contact for your organisation
            </p>
          </div>
          <div className="ipt flex flex-col items-start gap-2 w-full">
            <span className="text-[#666A70] text-lg">
              Administrator E-mail address*
            </span>
            <input
              type="email"
              placeholder=""
              className="w-full p-2"
              style={{ width: "100%", border: "1px solid #666A70" }}
            />
          </div>
             <div className="ipt flex flex-col items-start gap-2 w-full">
            <span className="text-[#666A70] text-lg">
              Website URL*
            </span>
            <input
              type="text"
              placeholder=""
              className="w-full p-2"
              style={{ width: "100%", border: "1px solid #666A70" }}
            />
          </div>
        </div>
        <button className="sb-btn bg-[#1C2F3A] text-white self-center px-4 py-2 text-[18px] cursor-pointer mt-10 ">Submit</button>
      </div>
    </div>
  );
};

export default Page;
