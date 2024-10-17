import React, { useState } from "react";
import {
  CharmCircleTick,
  MdiArrowDownDrop,
  PhClockClockwiseThin,
} from "../assets/icons";

const DropdownButton = ({ label, options }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block">
      <button
        className={`flex items-center shadow-xl justify-around px-2 gap-1 w-[105px] h-[30px] rounded-2xl ${
          label === "Active"
            ? "bg-[#00D347] border-[#00B13C]"
            : "bg-[#FF5050] border-[#Af2626]"
        } border-[0.5px]`}
        onClick={toggleDropdown}
      >
        {label === "Active" ? (
          <CharmCircleTick style={{ width: "24px", height: "24px" }} />
        ) : (
          <PhClockClockwiseThin style={{ width: "24px", height: "24px" }} />
        )}
        {label} <MdiArrowDownDrop />
      </button>
      {isDropdownOpen && (
        <div className="absolute  left-0 mt-1 w-[120px] bg-white flex    border-gray-300 rounded-xl shadow-lg z-10 p-2">
          <ul >
            <button className="bg-[#00D347] mb-1 border-[0.5px] flex items-center justify-around px-2  gap-1 border-[#00B13C] w-[105px] h-[30px] rounded-2xl">
              <CharmCircleTick style={{ width: "24px", height: "24px" }} />{" "}
              Active <MdiArrowDownDrop />
            </button>
            <button className="bg-[#FF5050] border-0 flex items-center justify-around px-2 gap-1 border-[#Af2626] w-[105px] h-[30px] rounded-2xl">
              <PhClockClockwiseThin style={{ width: "24px", height: "24px" }} />{" "}
              Inactive <MdiArrowDownDrop />
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
