import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r p-4">
      <h1 className="text-9xl font-extrabold mb-6 drop-shadow-lg text-primaryColor">
        404
      </h1>
      <p className="text-2xl md:text-3xl mb-8 font-semibold drop-shadow text-primaryColor">
        Oops! Halaman tidak ditemukan.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-white text-primaryColor font-bold rounded shadow-md hover:bg-blue-50 transition duration-300"
      >
        Kembali ke Faskes
      </button>
    </div>
  );
};

export default NotFound;
