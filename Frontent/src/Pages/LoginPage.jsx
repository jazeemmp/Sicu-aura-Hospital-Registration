import React from "react";
import SideBar from "../Components/SideBar";
import Login from "../Components/Login";

const LoginPage = () => {
  return (
    <div className="flex">
      <div className="bg-black w-[40%]">
        <SideBar />
      </div>
      <div className="w-[60%]">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
