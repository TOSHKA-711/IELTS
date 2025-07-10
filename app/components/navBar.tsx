import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-full bg-[#b80036] pt-4 px-[15px]">
      <Image src="/IELTSLogo.gif" alt="logo" width={200} height={100}/>
    </div>
  );
};

export default NavBar;
