import fotobio from "../Asset/fotobio.jpg";
import curve from "../Asset/curve.svg";
import { BsFilm, FaGamepad, AiFillRead, FcSportsMode } from "react-icons/all";

export default function Biodata() {
  return (
    <>
      <div className="w-full">
        <img src={curve} alt="" className="w-full" />
      </div>
      <div className="flex justify-center my-10">
        <div className="flex-col">
          <p className="font-bold text-[50px] text-[#BE9E44] text-center">
            Perkenalan Diri
          </p>
          <div className="border-4 border-solid p-4 mx-5 mt-5">
            <p className="text-xl">
              Perkenalkan, nama saya{" "}
              <p className="inline font-bold">Fadhil Farhisyi</p> ...
              <br />
              Saya biasa dikenal atau dipanggil dengan{" "}
              <p className="inline font-bold">nama Fadhil</p>.. <br />
              Saya saat ini berusia 23 tahun dari waktu <br /> kelahiran saya
              yang jatuh pada <p className="inline font-bold">3 Januari 2000</p>
              . <br />
              Saya berasal dari{" "}
              <p className="inline font-bold">Cirebon, Desa Tegalwangi</p>
            </p>
          </div>
          <div className="border-4 border-solid p-4 mx-5 my-5">
            <p className="text-xl">Hobby :</p>
            <div className="flex  justify-center">
              <div className="flex-col justify-center items-center w-[100px] p-5">
                <BsFilm className="h-[50px] w-[65px] my-2" />
                <p className="text-center">Menonton Film</p>
              </div>
              <div className="flex-col justify-center items-center w-[100px] p-5">
                <FaGamepad className="h-[50px] w-[65px] my-2" />
                <p className="text-center">Bermain game</p>
              </div>
              <div className="flex-col justify-center items-center w-[100px] p-5">
                <AiFillRead className="h-[50px] w-[65px] my-2" />
                <p className="text-center">Membaca komik/novel</p>
              </div>

              <div className="flex-col justify-center items-center w-[100px] p-5">
                <FcSportsMode className="h-[50px] w-[65px] my-2" />
                <p className="text-center">Olahraga</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mx-5">
          <img src={fotobio} alt="" className="h-[500px] rounded-xl" />
        </div>
      </div>
    </>
  );
}
