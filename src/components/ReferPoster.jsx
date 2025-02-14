import { useState } from "react";
import ReferFormModal from "./ReferFormModal";

const ReferPoster = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-[#EEF5FF] w-[1360px] h-[692px] mt-10 rounded-2xl relative flex justify-between items-center p-10">
      {/* Left Side Content */}
      <div className="flex flex-col max-w-[50%]">
        <h1 className="text-[88px] font-bold leading-tight text-[#000]">
          Let’s Learn & Earn
        </h1>
        <p className="text-[40px] text-[#333] mt-4 font-[400]">
          Get a chance to win <br></br> up to{" "}
          <span className="text-[#007bff] font-bold">Rs. 15,000</span>
        </p>
        <button
          className="mt-6 bg-[#007bff] text-white px-6 py-3 rounded-lg text-[20px] font-medium w-[192px] cursor-pointer"
          onClick={openModal}
        >
          Refer Now
        </button>
      </div>

      <div>
        <img src="/PosterImage.svg" alt="Refer and Earn Poster" />
      </div>
      <ReferFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ReferPoster;
