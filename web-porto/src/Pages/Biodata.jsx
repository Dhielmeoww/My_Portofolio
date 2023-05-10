import fotobio from "../Asset/fotobio.jpg";
import curve from "../Asset/curve.svg";
import { BsFilm, FaGamepad, AiFillRead, FcSportsMode } from "react-icons/all";

export default function Biodata() {
  return (
    <>
      <div className="flex justify-center my-10">
        <div className="flex-col">
          <p className="font-bold text-[50px] text-[#BE9E44] text-center">
            Perkenalan Diri
          </p>
          <div className="border-4 border-solid p-4 mx-5 mt-5 w-[900px]">
            <p className="text-xl">
              <p>Nama saya adalh Fadhil Farhisyi, biasa dikenal dengan fadhil.
              Saya adalah lulusan S1 Fisika di Universitas Padjadjaran.</p><br/>
              <p>Selama berkuliah, saya aktif berorganisasi dengan menjadi bagian dari Himpunan Mahasiswa Fisika
                atau yang biasa dikenal dengan HIFI dan menjadi bagian dari BEM KEMA FMIPA Unpad sebagai anggota.
              </p> <br />
              <p>
                Perjalanan saya untuk menjadi profesional developer, saya mengikuti beberapa pelatihan (bootcamp)
                pemrograman, diawali dengan mengikuti kelas Front-end Developer pada bootcamp Kawah Edukasi Batch II, 
                lalu kelas Digital Marketing pada Bootcamp yang diselenggarakan oleh Candradimuka Jabar Coding Camp, dan kemudian
                mengambil kelas Bootcamp di PT Pro Sigmaka Mandiri yaitu Fullstack Developer (Prodemy) dan Software Quality Assurance Manual Testing.
                Disini saya banyak belajar terkait bahasa pemrograman dan teknologi Backend dan Frontend, dimulai dengan membuat Restful API, aplikasi CRUD, dan Debugging. 
                Dengan berkembangnya pengetahuan dan kemampuan yang saya miliki, saya meyakini bahwa akan berguna untuk menjadi software engineer. Oleh karenanya, saat ini saya sedang terbuka untuk pekerjaan untuk bagian IT Developer/Software Engineer.
              </p>


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
