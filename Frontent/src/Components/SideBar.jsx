const SideBar = () => {
  return (
    <div className="text-white bg-[url('/images/background.png')]  h-screen bg-cover bg-center flex items-center justify-center flex-col">
      <img src="/images/logocrop.png" className="w-[390px] h-[385px]:" />
      <p className="text-3xl mt-10 font-semibold">
        Feel <span className="text-[#00D347]">Safe</span> Everywhere
      </p>
      <p className="font-medium mt-10 text-2xl">
        #Safe-<span className="text-[#00D347]">T</span>-Fast
      </p>
    </div>
  );
};
export default SideBar;
