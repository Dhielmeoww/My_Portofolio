import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Rootlayout() {
  return (
    <>
      <div className="bg-blue-400 h-[100px]">
        <div className="flex justify-end mr-12 text-white">
          <div>
            <Link>Karier</Link> &nbsp;
            <Link>Kontak</Link> &nbsp;
            <Link>Feedback</Link> &nbsp;
            <Link>KFC Online</Link> &nbsp;
            <Link>Hotcall</Link> &nbsp;
          </div>
        </div>
        <div className="text-center text-white text-xl flex justify-center content-center mx-5 mt-3">
          <div className="h-[45px] w-[100px] mx-5">
            <Link to="/" className="text-center text-xl">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="mx-5">
            <Link to="/Layanan" className="peer">
              Layanan
            </Link>
            <div
              class="hidden peer-hover:flex hover:flex
         flex-col bg-white drop-shadow-lg"
            >
              <a class="px-5 py-3 hover:bg-gray-200 text-red-600" href="#">
                Drive Thru
              </a>
              <a class="px-5 py-3 hover:bg-gray-200 text-red-600" href="#">
                Catering
              </a>
              <a class="px-5 py-3 hover:bg-gray-200 text-red-600" href="#">
                Breakfast
              </a>
            </div>
          </div>

          <div className="mx-5">
            <Link to="/Menu">Menu</Link>
          </div>

          <div className="mx-5">
            <Link to="/Kids"  className="peer">Kids</Link>
            <div
              class="hidden peer-hover:flex hover:flex
         flex-col bg-white drop-shadow-lg"
            >
              <a class="px-5 py-3 hover:bg-gray-200 text-red-600" href="#">
                Birthday Ajib
              </a>
              <a class="px-5 py-3 hover:bg-gray-200 text-red-600" href="#">
                Birthday Thematic
              </a>
              <a class="px-5 py-3 hover:bg-gray-200 text-red-600" href="#">
                Others Party
              </a>
            </div>
          </div>

          <div className="mx-5">
            <Link to="/Automotive">Automotive</Link>
          </div>
          <div className="mx-5">
            <Link to="/Corporate">Corporate</Link>
          </div>
          <div className="mx-5">
            <Link to="/Gallery">Gallery</Link>
          </div>
          <div className="mx-5">
            <Link to="/Store">Store</Link>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
