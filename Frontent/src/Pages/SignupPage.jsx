import React from "react";
import SideBar from "../Components/SideBar";
import Signup from "../Components/Signup";

const SignupPage = () => {
  return (
    <div className="flex">
      <div className="bg-black w-[40%]">
        <SideBar />
      </div>
      <div className="w-[60%]">
        <Signup />
      </div>
    </div>
  );
};

export default SignupPage;
