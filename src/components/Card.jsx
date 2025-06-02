import React from "react";

const Card = ({ judul, link, imgSrc }) => {
  return (
    <a href={link} target="_blank">
      <div className="max-w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img
          src={imgSrc}
          alt="Sample Image"
          className="w-full h-64 object-center p-4 "
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 text-center">
            {judul}
          </h2>
        </div>
      </div>
    </a>
  );
};

export default Card;
