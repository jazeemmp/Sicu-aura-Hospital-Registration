import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import { OcticonFilter16, FeSearch } from "../assets/icons";
import DropdownButton from "../Components/DropDownButton";

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const registrations = [
    {
      id: 1,
      date: "01.01.2000, 12:00 am",
      hospital: "ABC Hospital",
      email: "alexrobinson001@gmail.com",
      address: "ABC Road, Park Colony paalarivattam poonad poovanchri",
      phone: "9876543210",
      city: "Kolkata",
      state: "West Bengal",
      pincode: "700001",
      active: false,
    },
    {
      id: 2,
      date: "01.01.2000, 12:00 am",
      hospital: "ABC Hospital",
      email: "alexrobinson001@gmail.com",
      address: "ABC Road, Park Colony",
      phone: "9876543210",
      city: "Kolkata",
      state: "Chhattisgarh",
      pincode: "700001",
      active: true,
    },
  ];
  return (
    <div className="bg-[#F3FAFF]">
      <NavBar />
      <div className="px-[100px] py-[20px]">
        <img src="/images/support.png" className="w-32 ml-auto mr-16 " />
        <div className="flex justify-between">
          <div>
            <h1 className="text-[32px] font-normal text-[#404040]">
              Hospital Registrations
            </h1>
          </div>
          <div className="flex items-center gap-8 relative">
            <div className="flex bg-white items-center h-[40px] text-base justify-between py-2 px-6 rounded-xl shadow-[2px_2px_8px_0px_rgba(0,0,0,0.15)] w-[450px]">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none border-none"
              />
              <FeSearch style={{ width: "28.8px", height: "28.8px" }} />
            </div>
            <div
              className="w-[40px] h-[40px] bg-white rounded-[10px] cursor-pointer flex items-center justify-center shadow-[2px_2px_8px_0px_rgba(0,0,0,0.15)]"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <OcticonFilter16 style={{ width: "24px", height: "24px" }} />
            </div>
            {showMenu && (
              <div
                style={{ right: "-70px" }}
                className="absolute  top-10 w-[102px] h-[117px] bg-white rounded-md flex flex-col text-base text-[#909090] items-center justify-center"
              >
                <p>Date</p>
                <p>Active</p>
                <p>Inactive</p>
              </div>
            )}
          </div>
        </div>
        <div className="overflow-x-auto w-full flex mt-10 scrollbar-hide">
          <div className="flex-none w-full  p-4">
            <div className="flex w-full text-base font-medium rounded-3xl bg-[#0DF5E3] text-black h-[40px] items-center justify-evenly">
              <p className="w-[40px] text-center">No.</p>
              <p className="w-[120px] text-center">Date & Time</p>
              <p className="w-[180px] text-center">Hospital Name</p>
              <p className="w-[180px] text-center">Email</p>
              <p className="w-[100px] text-center">Address</p>
              <p className="w-[120px] text-center">Phone No.</p>
              <p className="w-[100px] text-center">City</p>
              <p className="w-[80px] text-center">State</p>
              <p className="w-[80px] text-center">Pincode</p>
            </div>
            {registrations.map((registration, index) => (
              <div
                key={registration.id}
                className={`flex items-center font-medium justify-evenly text-xs rounded-3xl py-3 ${
                  index % 2 == 0 ? "bg-white" : "bg-[#f5f5f5]"
                }`}
              >
                <div className="w-[40px] text-center">{index + 1}</div>
                <div className="w-[120px] text-center">{registration.date}</div>
                <div className="w-[180px] truncate text-center">
                  {registration.hospital}
                </div>
                <div className="w-[180px] truncate text-center">
                  {registration.email}
                </div>
                <div className="w-[100px] truncate text-center">
                  {registration.address}
                </div>
                <div className="w-[120px] text-center">
                  {registration.phone}
                </div>
                <div className="w-[100px] text-center">{registration.city}</div>
                <div className="w-[80px] text-center">{registration.state}</div>
                <div className="w-[80px] text-center">
                  {registration.pincode}
                </div>
              </div>
            ))}
            {Array.from({ length: 20 }, (_, index) => (
              <div
                className={`flex items-center font-medium relative justify-evenly text-xs w-full rounded-3xl py-3 ${
                  index % 2 === 0 ? "bg-white" : "bg-[#f5f5f5]"
                }`}
              ></div>
            ))}
          </div>
          <div className="flex-none w-full p-4">
            <div className="flex items-center">
              <div className="flex w-full text-base font-medium rounded-3xl bg-[#0DF5E3] text-black h-[40px] items-center justify-evenly">
                <p className="w-[210px] text-center">
                  Hospital Registration Date
                </p>
                <p className="w-[240px] text-center">
                  Hospital Registration Number
                </p>
                <p className="w-[220px] text-center">
                  Hospital Registration Photo
                </p>
                <p className="w-[220px] text-center">Emergency-Ward Number</p>
              </div>
              <div className="mx-5 text-base font-medium text-center">
                staus
              </div>
            </div>
            {registrations.map((registration, index) => (
              <div
                key={registration.id}
                className={`flex items-center font-medium relative justify-evenly text-xs w-full rounded-3xl py-3 ${
                  index % 2 === 0 ? "bg-white" : "bg-[#f5f5f5]"
                }`}
              >
                <div className="w-[120px] text-center">{registration.date}</div>
                <div className="w-[180px] truncate text-center">
                  {registration.email}
                </div>
                <div className="w-[180px] truncate text-center">
                  <img
                    src={registration.photo}
                    alt="Hospital Registration"
                    className="w-[50px] h-auto mx-auto"
                  />
                </div>
                <div className="w-[180px] truncate text-center">
                  {registration.emergencyWardNumber || "nkjxnckj"}
                </div>
                <div className="absolute right-0 ">
                  <DropdownButton
                    label={registration.active ? "Active" : "Inactive"}
                  />
                </div>
              </div>
            ))}
            {Array.from({ length: 20 }, (_, index) => (
              <div
                className={`flex items-center font-medium relative justify-evenly text-xs w-full rounded-3xl py-3 ${
                  index % 2 === 0 ? "bg-white" : "bg-[#f5f5f5]"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
