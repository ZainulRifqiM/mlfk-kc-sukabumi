import React from "react";
import Card from "../components/Card";
import jadwal from "../assets/imgJadwal.png";
import sibling from "../assets/imgSibling.png";
import visit from "../assets/imgVisit.png";
// import { data } from "react-router-dom";

const Laporan = () => {
  const dataLaporan = [
    {
      judul: "Jadwal",
      link: "https://bpjskesehatano365-my.sharepoint.com/:x:/g/personal/250804_zainul_bpjs-kesehatan_go_id/EVj985TbKUVFhoZWZDvshAcBkWXYg9RC-OvcPYXxUH_WWw?e=XKdfV2",
      imgSrc: jadwal,
    },
    {
      judul: "Sibling",
      link: "https://bpjskesehatano365-my.sharepoint.com/:x:/g/personal/250804_zainul_bpjs-kesehatan_go_id/EeRY4YEvfQFIhVTtwdUMUWkB-4bwS6XR78K1TCg1XbQhMA?e=FPcfXy",
      imgSrc: sibling,
    },
    {
      judul: "Customer Visit",
      link: "https://bpjskesehatano365-my.sharepoint.com/:x:/g/personal/250804_zainul_bpjs-kesehatan_go_id/EZIJ54KXUlhMoNYapWg5ulwB3Hg_9hOhLu0ujvgm6ICxeA?e=dE9KyL",
      imgSrc: visit,
    },
  ];
  return (
    <>
      <div
        className="md:px-8 space-y-20 p-4 text-center max-w-screen-xl w-full mx-auto  h-screen text-textColor"
        id="home"
      >
        <div className="mt-32">
          <h3 className="font-semibold text-xl">
            Selamat datang di Menu Laporan!
          </h3>
          <p className="w-2/3 mx-auto mt-4 font-medium text-labelColor text-md">
            Akses laporan penting seperti jadwal, sibling ke fasilitas
            kesehatan, dan kunjungan pelanggan ke peserta untuk mengoptimalkan
            pengelolaan informasi Anda dengan mudah
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {dataLaporan.map((laporanData) => (
            <Card
              key={laporanData.judul}
              judul={laporanData.judul}
              link={laporanData.link}
              imgSrc={laporanData.imgSrc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Laporan;
