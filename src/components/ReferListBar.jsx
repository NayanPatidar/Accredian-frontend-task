import { useState } from "react";

const ReferListBar = () => {
  const tabs = ["Refer", "Benefits", "FAQs", "Support"];
  const [selectedTab, setSelectedTab] = useState("Refer");

  return (
    <div className="flex items-center justify-around p-2 bg-blue-100 rounded-full w-[797px]">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`relative px-6 py-2 text-gray-700 cursor-pointer transition-colors duration-300 ${
            selectedTab === tab ? "text-blue-600 font-semibold" : ""
          }`}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
          {selectedTab === tab && (
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReferListBar;
