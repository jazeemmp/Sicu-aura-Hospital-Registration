import React from "react";

const NavBar = () => {
  return (
    <nav className=" text-white h-20 bg-[#201A31] flex justify-between px-[100px]">
      <div className="flex items-center gap-4">
        <img src="/images/logo.png" className="w-[50px]" />
        <img src="/images/logoname.png" className="h-[35px]" />
      </div>
      <div className="flex items-center justify-between w-[287px] ">
        <img src="/images/profile.png" className="w-[50px] rounded-[50%] " />
        <p className="text-sm font-medium">Alex Robinson</p>
        <button className="bg-[#302a41] rounded-xl px-7 py-2">Logout</button>
      </div>
    </nav>
  );
};

export default NavBar;
