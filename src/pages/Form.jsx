import Card from "../components/Card";
import imgSiblingFKTP from "../assets/imgSiblingFKTP.png";
import imgSiblingFKRTL from "../assets/imgSiblingFKRTL.png";
import imgVisit from "../assets/imgVisit.png";

const Form = () => {
  const dataForm = [
    {
      judul: "Sibling FKTP",
      link: "https://www.google.com/",
      imgSrc: imgSiblingFKTP, // Replace with actual image source
    },
    {
      judul: "Sibling FKRTL",
      link: "https://www.google.com/",
      imgSrc: imgSiblingFKRTL, // Replace with actual image source
    },
    {
      judul: "Customer Visit",
      link: "https://www.google.com/",
      imgSrc: imgVisit, // Replace with actual image source
    },
  ];
  return (
    <div
      className="md:px-8 p-4 text-center content-center max-w-screen-xl w-full mx-auto  h-screen text-textColor"
      id="home"
    >
      <div>
        <h3 className="font-semibold text-xl">
          Selamat datang di Menu Form Laporan Kunjungan!
        </h3>
        <p className="w-2/3 mx-auto mt-4 font-medium text-labelColor text-md">
          Catat aktivitas kunjungan ke fasilitas kesehatan dengan mengisi form
          sibling FKTP, sibling FKRTL, dan customer visit. Laporan Anda akan
          membantu kami memantau layanan kesehatan dan meningkatkan hubungan
          dengan pelanggan.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {dataForm.map((FormData) => (
          <Card
            key={FormData.judul}
            judul={FormData.judul}
            link={FormData.link}
            imgSrc={FormData.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Form;
