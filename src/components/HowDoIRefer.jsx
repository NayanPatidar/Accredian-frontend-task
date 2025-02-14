import { useState } from "react";
import ReferFormModal from "./ReferFormModal";

const HowDoIRefer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-[#EEF5FF] w-full h-[692px] mt-10 flex flex-col items-center justify-center">
      <div className="w-[1360px] h-[692px] rounded-2xl flex flex-col items-center p-10">
        <h5 className="text-[24px] font-medium text-[#000] mb-6">
          How Do I Refer?
        </h5>
        <img
          src="/ReferSteps.svg"
          alt="How to Refer Steps"
          className="w-full"
        />
        <button
          className="mt-6 bg-[#007bff] text-white px-6 py-3 rounded-lg text-[20px] font-medium cursor-pointer"
          onClick={openModal}
        >
          Refer Now
        </button>
      </div>
      <ReferFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default HowDoIRefer;
