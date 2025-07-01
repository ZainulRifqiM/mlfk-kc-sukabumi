import Card from "../components/Card";
import imgSiblingFKTP from "../assets/imgSiblingFktp.png";
import imgSiblingFKRTL from "../assets/imgSiblingFkrtl.png";
import imgVisit from "../assets/imgVisit.png";

const Form = () => {
  const dataForm = [
    {
      judul: "Sibling FKTP",
      link: "https://forms.office.com/Pages/ResponsePage.aspx?id=trHd22W75kaGi_xv57vs9rJ2lkX5sHtEg7_58XRmTOdUQ1ZDVlFBRU03VFBMVzEwVEFPVFBKTlVUMy4u&origin=QRCode",
      imgSrc: imgSiblingFKTP, // Replace with actual image source
    },
    {
      judul: "Sibling FKRTL",
      link: "https://forms.office.com/Pages/ResponsePage.aspx?id=trHd22W75kaGi_xv57vs9rJ2lkX5sHtEg7_58XRmTOdURjBUSFM1MkFVNks0OFdTMEFFQkFINjIxVC4u&origin=QRCode",
      imgSrc: imgSiblingFKRTL, // Replace with actual image source
    },
    {
      judul: "Customer Visit",
      link: "https://forms.office.com/pages/responsepage.aspx?id=trHd22W75kaGi_xv57vs9ivOoGaP6BBApt38yPuZHilUNjRVVjM4QTlPUUNFQllQWE9IUTZUUENXUC4u&route=shorturl",
      imgSrc: imgVisit, // Replace with actual image source
    },
  ];
  return (
    <div
      className="md:px-8 p-4 text-center space-y-20 max-w-screen-xl w-full mx-auto  h-screen text-textColor"
      id="home"
    >
      <div className="mt-32">
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
