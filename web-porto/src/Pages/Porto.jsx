import { Link } from "react-router-dom";
import curve from "../Asset/curve.svg";

export default function Porto() {
    return <>
    <div className="w-full">
        <img src={curve} alt="" className="w-full" />
      </div>
    <div>
          <p className="text-center mt-10 text-xl text-[#BE9E44]">Portofolioku : </p>
          <div className="flex flex-wrap justify-center items-center mt-4">
            <div className="w-[100px] h-[80px] border-4 mx-2 flex justify-center items-center text-center">
              <Link to="https://simple-note-by-fadhil.netlify.app">
                Simple Note
              </Link>
            </div>

            <div className="w-[100px] h-[80px] border-4 mx-2 flex justify-center items-center text-center">
              <Link to="https://dhielmeow-tdm.netlify.app/">
                Desain Web dengan Tailwind
              </Link>
            </div>

            <div className="w-[100px] h-[80px] border-4 mx-2 flex justify-center items-center text-center">
              <Link to="https://cv-fadhil-farhisyi.netlify.app/">
                CV Fadhil Farhisyi
              </Link>
            </div>

            <div className="w-[100px] h-[80px] border-4 mx-2 flex justify-center items-center text-center">
              <Link to="https://dhielmeow-duelist.netlify.app/">
                Web Yu-Gi-Oh
              </Link>
            </div>
            <div className="w-[100px] h-[80px] border-4 mx-2 flex justify-center items-center text-center">
              <p>Provite</p>
            </div>
          </div>
        </div>
    </>
}