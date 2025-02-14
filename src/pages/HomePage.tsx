import React from "react";
import ContactExpert from "../components/ContactExpert";
import Navbar from "../components/Navbar";
import ReferListBar from "../components/ReferListBar";
import ReferPoster from "../components/ReferPoster";
import HowDoIRefer from "../components/HowDoIRefer";

const HomePage = () => {
  return (
    <div className=" w-full h-full items-center justify-center flex flex-col">
      <ContactExpert />
      <Navbar />
      <ReferListBar />
      <ReferPoster />
      <HowDoIRefer />
    </div>
  );
};

export default HomePage;
