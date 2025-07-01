import React from "react";

const CardEvidence = ({ faskes }) => {
  //   console.log(faskes);
  return (
    <>
      {faskes.map((f, index) => (
        <a href={f.link} target="_blank" rel="noopener noreferrer" key={index}>
          <div className="max-w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={f.imgSrc}
              alt="Sample Image"
              className="w-full h-64 object-center p-4"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 text-center">
                {f.judul}
              </h2>
            </div>
          </div>
        </a>
      ))}
    </>
  );
};
export default CardEvidence;
