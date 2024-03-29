import curve from "../Asset/curve.svg";
import {
  BsWhatsapp,
  AiOutlineMail,
  FaLinkedin,
  BsInstagram,
} from "react-icons/all";
import { Link } from "react-router-dom";

export default function Kontak() {
  return (
    <>
      <div className="w-full">
        <img src={curve} alt="" className="w-full" />
      </div>
      <div className="flex-col justify-center my-10">
        <p className="font-bold text-[50px] text-[#BE9E44] text-center">
          Kontak
        </p>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center items-center my-10">
            <div className="flex justify-center items-center h-[150px] w-[500px] border-4 border-[#BE9E44] p-3 mx-3 my-3">
              <BsWhatsapp className="w-[100px] h-[100px]" />

              <p className="mx-10 text-2xl text-black font-bold">
                {" "}
                a/n Fadhil Farhisyi
              </p>
            </div>
            <div className="flex justify-center items-center h-[150px] w-[500px] border-4 border-[#BE9E44] p-3 mx-3 my-3">
              <AiOutlineMail className="w-[100px] h-[100px]" />

              <p className="mx-10 text-2xl text-black font-bold">
                {" "}
                fadhilfarhisyi@gmail.com
              </p>
            </div>
            <div className="flex justify-center items-center h-[150px] w-[500px] border-4 border-[#BE9E44] p-3 mx-3 my-3">
              <FaLinkedin className="w-[100px] h-[100px]" />

              <Link
                to="https://www.linkedin.com/in/fadhil-farhisyi-117061219/"
                className="mx-10 text-2xl text-black font-bold"
              >
                {" "}
                Fadhil Farhisyi
              </Link>
            </div>
            <div className="flex justify-center items-center h-[150px] w-[500px] border-4 border-[#BE9E44] p-3 mx-3 my-3">
              <BsInstagram className="w-[100px] h-[100px]" />

              <Link
                to="https://www.instagram.com/fadhil_farhisyi/"
                className="mx-10 text-2xl text-black font-bold"
              >
                {" "}
                a/n Fadhil Farhisyi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
