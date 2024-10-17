import React from "react";

const RegistrationSuccess = () => {
  return (
    <div className="absolute flex-col   inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-[#EEEEEE] bg-opacity-60">
      <div className="w-[720px]  h-[200px] shadow-[10px_10px_10px_0px_rgba(0,0,0,0.2)] rounded-[20px] border flex items-center justify-center bg-white flex-col">
        <img src="/images/success.png" className="w-[75px]" />
        <h1 className="font-medium text-[32px] ">Your Registration has been Successful</h1>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
