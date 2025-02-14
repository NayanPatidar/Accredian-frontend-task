const Navbar = () => {
  return (
    <div className=" w-full bg-none h-[80px] text-center flex justify-between items-center gap-5 max-w-[1360px]">
      <div className=" flex gap-5">
        <img src="/Link.svg" />
        <div className=" bg-[#1A73E8] rounded text-white p-2 w-30">
          <span>Courses</span>{" "}
        </div>
      </div>
      <div className=" flex gap-5 items-center ">
        <div>Refer & Earn</div>
        <div>Resources</div>
        <div>About Us</div>
        <div className=" bg-[#1A73E8] rounded text-white p-2 w-30">
          <span>Try For Free</span>{" "}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
