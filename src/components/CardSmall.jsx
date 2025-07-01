import React from "react";

const CardSmall = ({ namaRS, namaPIPP, link, tipe, wilayah }) => {
  const backgroundColor =
    wilayah === "1"
      ? "bg-[#B2E0D4]"
      : wilayah === "2"
      ? "bg-[#A4D8E1]"
      : "bg-[#F4C2D7]";

  const bgTipe =
    tipe === "B"
      ? "bg-[#E1C6E7]"
      : tipe === "C"
      ? "bg-[#F9EBAE]"
      : tipe === "D"
      ? "bg-[#F8C8B0]"
      : "bg-[#E1A4A5]";

  return (
    <a href={link} target="_blank">
      <div
        className={`text-[#2F4F4F] flex items-center gap-4 border border-disabledColor shadow-labelColor ${backgroundColor} w-72 h-24 p-4 rounded`}
      >
        <div className={`${bgTipe} py-2  w-12 rounded`}>
          <h3 className="text-textColor font-bold">{tipe}</h3>
        </div>
        <div className={`text-left`}>
          <h4 className="font-semibold text-sm text-[#333]">{namaRS}</h4>
          <p className="text-xs font-medium text-textColor">{namaPIPP}</p>
        </div>
      </div>
    </a>
  );
};

export default CardSmall;
