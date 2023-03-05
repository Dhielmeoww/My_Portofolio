import curve from "../Asset/curve.svg";
import psm from "../Asset/prosigmaka-Logo.png";
import ims from "../Asset/ims-small.jpg";
import jcc from "../Asset/LogoJCC-desktop.svg";
import ke from "../Asset/logo-kawah-edukasi-white.svg";

export default function Pengalaman() {
  return (
    <>
      <div className="w-full">
        <img src={curve} alt="" className="w-full" />
      </div>
      <div className="flex-col justify-center my-10">
        <p className="font-bold text-[50px] text-[#BE9E44] text-center">
          Pengalaman
        </p>
        <div className="flex flex-wrap justify-center items-center my-10">
          <div className="border-4 flex p-5 w-[700px] h-[150px] mx-2 my-2">
            <div className="w-[100px] bg-orange-400">
              <img src={ims} alt="" className="h-[100px]" />
            </div>
            <p className="mx-5">
              International Conference on Magnetism and Its Applications (ICMIA)
              2022
              <br />
              <p className="font-bold">Presenter</p>
              Bali, Indonesia
            </p>
          </div>
          <div className="border-4 flex p-5 w-[700px] h-[150px] mx-2 my-2">
            <div className="w-[100px] bg-green-600 px-2">
              <img src={ke} alt="" className="h-[100px]" />
            </div>
            <p className="mx-5">
              Beasiswa Programmer Batch II
              <br />
              <p className="font-bold">
                Peserta Pelatihan : Front-end Developer
              </p>
              Online (3 Bulan) <br />
              Juni - Agustus 2022
            </p>
          </div>
          <div className="border-4 flex p-5 w-[700px] h-[150px] mx-2 my-2">
            <div className="w-[100px] px-2">
              <img src={jcc} alt="" className="h-[100px]" />
            </div>
            <p className="mx-5">
              Bootcamp Digital Marketing
              <br />
              <p className="font-bold">Peserta Pelatihan</p>
              Online (1 Bulan) <br />
              Oktober - November 2022
            </p>
          </div>
          <div className="border-4 flex p-5 w-[700px] h-[150px] mx-2 my-2">
            <div className="w-[100px] px-2  flex justify-center items-center">
              <img src={psm} alt="" className="h-[50px]" />
            </div>
            <p className="mx-5">
              Junior Technical Consultant
              <br />
              <p className="font-bold">Bootcamp Fullstack Developer</p>
              Online (3 Bulan) <br />
              November 2022 - Maret 2023
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
