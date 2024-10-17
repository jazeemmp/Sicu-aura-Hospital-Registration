import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import { OcticonFilter16, FeSearch } from "../assets/icons";
import axios from "../Axios/authAxios";
import DropdownButton from "../Components/DropdownButton";
import { formatDate } from "../assets/formatDate";
const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hospitals, setHospitals] = useState([]);
  const [filteredHospitals, setFilteredHospitals] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("/hospitals");
    setHospitals(data);
  };

  const filterHospitals = (e) => {
    const prompt = e.target.value; // Get the current input value
    if (prompt === "") {
       setFilteredHospitals(hospitals)
    } else {
      const filteredHospitals = hospitals.filter((hospital) => {
        return (
          hospital.email.toLowerCase().includes(prompt.toLowerCase()) || // Check if email includes the prompt
          hospital.name.toLowerCase().includes(prompt.toLowerCase()) // Check if name includes the prompt
        );
      });

      setFilteredHospitals(filteredHospitals);
    }
  };
  const sortByDate = ()=>{
    const sortedData = hospitals.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setFilteredHospitals(sortedData)
  }
  const sortlist = (prompt) => {
    const status = prompt == "Inactive" ? true : false;
    const data = hospitals.filter((hospital) => hospital.inactive === status);
    setFilteredHospitals(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const openImageInNewTab = (name) => {
    const imageURL = `/uploads/${name}`;
    window.open(imageURL, "_blank");
  };
  return (
    <div className="bg-[#F3FAFF]">
      <NavBar />
      <div className="px-[100px] py-[20px]">
        <img src="/images/support.png" className="w-32 ml-auto mr-16 " />
        <div className="flex justify-between">
          <div>
            <h1 className="text-[32px] font-normal text-[#404040]">
              Hospital datas
            </h1>
          </div>
          <div className="flex items-center gap-8 relative">
            <div className="flex bg-white items-center h-[40px] text-base justify-between py-2 px-6 rounded-xl shadow-[2px_2px_8px_0px_rgba(0,0,0,0.15)] w-[450px]">
              <input
                type="text"
                placeholder="Search"
                onChange={filterHospitals}
                className="bg-transparent w-full outline-none border-none"
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
                className="absolute cursor-pointer  top-10 w-[102px] h-[117px] bg-white rounded-md flex flex-col text-base text-[#909090] items-center justify-center"
              >
                <p onClick={sortByDate}>Date</p>
                <p onClick={() => sortlist("Active")}>Active</p>
                <p onClick={() => sortlist("Inactive")}>Inactive</p>
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
            <div>
              {(filteredHospitals.length > 0
                ? filteredHospitals
                : hospitals
              ).map((data, index) => (
                <div
                  key={data.id}
                  className={`flex items-center font-medium justify-evenly text-xs rounded-3xl py-3 ${
                    index % 2 === 0 ? "bg-white" : "bg-[#f5f5f5]"
                  }`}
                >
                  <div className="w-[40px] text-center">{index + 1}</div>
                  <div className="w-[120px] text-center">
                    {formatDate(data.createdAt)}
                  </div>
                  <div className="w-[180px] truncate text-center">
                    {data.name}
                  </div>
                  <div className="w-[180px] truncate text-center">
                    {data.email}
                  </div>
                  <div className="w-[100px] truncate text-center">
                    {data.address}
                  </div>
                  <div className="w-[120px] text-center">{data.phone}</div>
                  <div className="w-[100px] text-center">{data.city}</div>
                  <div className="w-[80px] text-center">{data.state}</div>
                  <div className="w-[80px] text-center">{data.pincode}</div>
                </div>
              ))}
            </div>
            {/* As per design  */}
            {Array.from({ length: 20 }, (_, index) => (
              <div
                className={`flex h-[40px] items-center font-medium relative justify-evenly text-xs w-full rounded-3xl py-3 ${
                  index % 2 === 1 ? "bg-white" : "bg-[#f5f5f5]"
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
                <p>Number of Ambulance</p>
              </div>
              <div className="mx-5 text-base font-medium text-center">
                staus
              </div>
            </div>
            {(filteredHospitals.length > 0 ? filteredHospitals : hospitals).map(
              (data, index) => (
                <div
                  key={data.id}
                  className={`flex items-center font-medium relative justify-evenly text-xs w-full rounded-3xl py-3 ${
                    index % 2 === 0 ? "bg-white" : "bg-[#f5f5f5]"
                  }`}
                >
                  <div className="w-[120px] text-center">{data.date}</div>
                  <div className="w-[180px] truncate text-center">
                    {data.registerNum}
                  </div>
                  <div className="w-[180px] truncate text-center">
                    <p
                      className="cursor-pointer text-blue-600 font-medium"
                      onClick={() => openImageInNewTab(data.certificate)}
                    >
                      File
                    </p>
                  </div>
                  <div className="w-[180px] truncate text-center">
                    {data.wardNum}
                  </div>
                  <div className="w-[180px] truncate text-center">
                    {data.availability}
                  </div>
                  <div className="absolute right-0">
                    <DropdownButton
                      label={data.inactive ? "Inactive" : "Active"}
                      id={data._id}
                      fetchData={fetchData}
                    />
                  </div>
                </div>
              )
            )}
            {/* As per design  */}
            {Array.from({ length: 20 }, (_, index) => (
              <div
                className={`flex h-[40px] items-center font-medium relative justify-evenly text-xs w-full rounded-3xl py-3 ${
                  index % 2 === 1 ? "bg-white" : "bg-[#f5f5f5]"
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
