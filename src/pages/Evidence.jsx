import React from "react";
import { useState } from "react";
import cianjur from "../assets/cianjur.jpg";
import sukabumi from "../assets/sukabumi.jpg";
import kabsukabumi from "../assets/kabsukabumi.jpg";
import Card from "../components/Card";
import Toogle from "../components/Toogle";
import CardEvidence from "../components/CardEvidence";

const Evidence = () => {
  const dataEvidence = [
    {
      id: 1,
      faskes: "FKTP",
      wilayah: [
        {
          id: "fktp1",
          judul: "FKTP Kota Sukabumi",
          link: "https://forms.office.com/Pages/ResponsePage.aspx?id=trHd22W75kaGi_xv57vs9rJ2lkX5sHtEg7_58XRmTOdUQ1ZDVlFBRU03VFBMVzEwVEFPVFBKTlVUMy4u&origin=QRCode",
          imgSrc: sukabumi, // Replace with actual image source
        },
        {
          id: "fktp2",
          judul: "FKTP Kab Sukabumi",
          link: "https://forms.office.com/Pages/ResponsePage.aspx?id=trHd22W75kaGi_xv57vs9rJ2lkX5sHtEg7_58XRmTOdURjBUSFM1MkFVNks0OFdTMEFFQkFINjIxVC4u&origin=QRCode",
          imgSrc: kabsukabumi, // Replace with actual image source
        },
        {
          id: "fktp3",
          judul: "FKTP Kab Cianjur",
          link: "https://forms.office.com/pages/responsepage.aspx?id=trHd22W75kaGi_xv57vs9ivOoGaP6BBApt38yPuZHilUNjRVVjM4QTlPUUNFQllQWE9IUTZUUENXUC4u&route=shorturl",
          imgSrc: cianjur, // Replace with actual image source
        },
      ],
    },

    {
      id: 2,
      faskes: "FKRTL",
      wilayah: [
        {
          id: "fkrtl1",
          judul: "FKRTL Kota Sukabumi",
          link: "https://forms.office.com/Pages/ResponsePage.aspx?id=trHd22W75kaGi_xv57vs9rJ2lkX5sHtEg7_58XRmTOdUQ1ZDVlFBRU03VFBMVzEwVEFPVFBKTlVUMy4u&origin=QRCode",
          imgSrc: sukabumi, // Replace with actual image source
        },
        {
          id: "fkrtl2",
          judul: "FKRTL Kab Sukabumi",
          link: "https://forms.office.com/Pages/ResponsePage.aspx?id=trHd22W75kaGi_xv57vs9rJ2lkX5sHtEg7_58XRmTOdURjBUSFM1MkFVNks0OFdTMEFFQkFINjIxVC4u&origin=QRCode",
          imgSrc: kabsukabumi, // Replace with actual image source
        },
        {
          id: "fkrtl3",
          judul: "FKRTL Kab Cianjur",
          link: "https://forms.office.com/pages/responsepage.aspx?id=trHd22W75kaGi_xv57vs9ivOoGaP6BBApt38yPuZHilUNjRVVjM4QTlPUUNFQllQWE9IUTZUUENXUC4u&route=shorturl",
          imgSrc: cianjur, // Replace with actual image source
        },
      ],
    },
  ];

  const [selected, setSelected] = useState(dataEvidence[0]);
  // console.log(`data awal`, dataEvidence);
  const handleClick = (data) => {
    setSelected(data);
    // console.log(selected);
  };

  return (
    //
    <div
      className="md:px-8 p-4 text-center space-y-20 max-w-screen-xl w-full mx-auto  h-screen text-textColor"
      id="home"
    >
      <div className="mt-32">
        <h3 className="font-semibold text-xl">
          Selamat datang di Menu Evidence!
        </h3>
        <p className="w-2/3 mx-auto mt-4 font-medium text-labelColor text-md">
          Akses gudang evidence dari FKTP dan FKRTL di Kota Sukabumi, Kabupaten
          Sukabumi, dan Kabupaten Cianjur. Temukan data penting untuk mendukung
          analisis dan pengambilan keputusan dalam pengelolaan layanan
          kesehatan.
        </p>
      </div>
      <div className="flex justify-center gap-4">
        {dataEvidence.map((data) => (
          <Toogle
            key={data.id}
            title={data.faskes}
            isActive={selected.id === data.id}
            onClick={() => handleClick(data)}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-20">
        <CardEvidence faskes={selected.wilayah} />
      </div>
    </div>
  );
};

export default Evidence;
