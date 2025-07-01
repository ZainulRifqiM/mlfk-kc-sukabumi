import React from "react";
import CardSmall from "../components/CardSmall";
import Datas from "../utils/DataFaskes";

const Faskes = () => {
  return (
    <div
      className="md:px-8 p-4 text-center space-y-20 max-w-screen-xl w-full mx-auto  h-screen text-textColor"
      id="home"
    >
      <div className="mt-32">
        <h3 className="font-semibold text-xl">
          Selamat datang di Menu Fasilitas Kesehatan!
        </h3>
        <p className="w-2/3 mx-auto mt-4 font-medium text-labelColor text-md">
          Cari dan lihat informasi beserta performa fasilitas kesehatan tingkat
          pertama dan fasilitas kesehatan rujukan tingkat lanjut di Kota
          Sukabumi, Kabupaten Sukabumi, dan Kabupaten Cianjur
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center">
        {Datas.map((data) => (
          <CardSmall
            key={data.id}
            namaRS={data.namaRS}
            namaPIPP={data.namaPIPP}
            tipe={data.tipe}
            wilayah={data.wilayah}
            link={data.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Faskes;
