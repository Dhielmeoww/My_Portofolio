import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "../../Utility/DarkMode";
import { useContext } from "react";
import { CiDark, MdDarkMode } from "react-icons/all";

export default function Layout() {
  const { theme, toogleDarkMode } = useContext(ThemeContext);

  return (
    <>
      <div
        className={
          theme == "light"
            ? "container flex justify-between p-10 bg-slate-200"
            : "container flex justify-between p-10 bg-slate-900 text-white"
        }
      >
        <div>
          <img
            src="https://www.yugioh-card.com/en/wp-content/uploads/2020/04/logo-main.png"
            alt=""
          />
          <h1 className="text-3xl font-bold">Welcome To Yugioh</h1>
        </div>
        <div className="mt-16 font-medium text-xl">
          <nav>
            <Link to="/">Home</Link> &nbsp; | &nbsp;
            <Link to="/DeckBuilder">Deck Builder</Link> &nbsp; | &nbsp;
            <Link to="/Store">Store</Link> &nbsp; | &nbsp;
            <Link to="/TierList">Tier List</Link> &nbsp; | &nbsp;
            <Link to="/Admin">Library</Link> &nbsp; | &nbsp;
            <button onClick={toogleDarkMode}>
              {theme == "light" ? <MdDarkMode /> : <CiDark />}
            </button>{" "}
            &nbsp; &nbsp;
          </nav>
        </div>
      </div>
      <hr className="container" />
      <Outlet />
      <hr className="container" />
    </>
  );
}
