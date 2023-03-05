import curve from "../Asset/curve.svg";
import {
  TfiMicrosoftAlt,
  DiJavascript,
  DiHtml5,
  BsFiletypeCss,
  FaReact,
  DiJava,
  SiPostgresql,
  DiPhotoshop,
  SiAdobepremierepro,
} from "react-icons/all";

export default function Keahlian() {
  return (
    <>
      <div className="w-full">
        <img src={curve} alt="" className="w-full" />
      </div>
      <div className="flex-col justify-center my-10">
        <p className="font-bold text-[50px] text-[#BE9E44] text-center">
          Keahlian
        </p>
        <div className="flex flex-wrap justify-center my-5">
          <div className="border-4 border-solid p-4 mx-5 mt-5 flex-col justify-center">
            <TfiMicrosoftAlt className="h-[100px] w-[120px]" />
            <p className="text-center my-4">
              {" "}
              Ms. Office :
              <br />
              Word, PPT, Excel
            </p>
          </div>

          <div className="border-4 border-solid p-4 mx-5 mt-5 flex-col justify-center">
            <DiJavascript className="h-[100px] w-[120px]" />
            <p className="text-center my-4">
              {" "}
              JavaScript :
              <br />
              Junior
            </p>
          </div>

          <div className="border-4 border-solid p-4 mx-5 mt-5 flex-col justify-center">
            <DiHtml5 className="h-[100px] w-[120px]" />
            <p className="text-center my-4">
              {" "}
              HTML :
              <br />
              Junior
            </p>
          </div>

          <div className="border-4 border-solid p-4 mx-5 mt-5 flex-col justify-center">
            <BsFiletypeCss className="h-[100px] w-[120px]" />
            <p className="text-center my-4">
              {" "}
              CSS :
              <br />
              Junior
            </p>
          </div>

          <div className="border-4 border-solid p-4 mx-5 mt-5 flex-col justify-center">
            <FaReact className="h-[100px] w-[120px]" />
            <p className="text-center my-4">
              {" "}
              React/Native :
              <br />
              Junior
            </p>
          </div>

          <div className="border-4 border-solid p-4 mx-5 mt-5 flex-col justify-center">
            <DiJava className="h-[100px] w-[120px]" />
            <p className="text-center my-4">
              {" "}
              Java-Spring :
              <br />
              Junior
            </p>
          </div>

          <div className="border-4 border-solid p-4 mx-5 mt-5 flex-col justify-center">
            <SiPostgresql className="h-[100px] w-[120px]" />
            <p className="text-center my-4">
              {" "}
              Postgresql :
              <br />
              Junior
            </p>
          </div>

          <div className="border-4 border-solid p-4 mx-5 mt-5 flex-col justify-center">
            <DiPhotoshop className="h-[100px] w-[120px]" />
            <p className="text-center my-4">
              {" "}
              Photoshop :
              <br />
              Junior
            </p>
          </div>

          <div className="border-4 border-solid p-4 mx-5 mt-5 flex-col justify-center">
            <SiAdobepremierepro className="h-[100px] w-[120px]" />
            <p className="text-center my-4">
              {" "}
              A.Premiere Pro :
              <br />
              Junior
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
