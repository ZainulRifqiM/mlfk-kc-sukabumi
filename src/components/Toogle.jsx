import React from "react";

const Toggle = ({ title, isActive, onClick }) => {
  console.log(title);
  return (
    <div
      className={`${
        isActive
          ? "bg-[#A4D8E1] text-[#333333] font-semibold"
          : "text-labelColor font-medium border border-disabledColor"
      } text-textColor w-24 py-2 px-4 rounded items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#B2E0D4] hover:text-[#333]`}
      onClick={() => onClick()}
    >
      <p className="text-center">{title}</p>
    </div>
  );
};

export default Toggle;
