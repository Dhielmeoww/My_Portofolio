import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ThemeContext } from "../../Utility/DarkMode";

export default function DeckStore() {
 
  const { theme, toogleDarkMode } = useContext(ThemeContext);

  return (
    <>
      <div
        className={
          theme == "light"
            ? "container justify-center flex flex-wrap py-9 bg-white"
            : "container justify-center flex flex-wrap py-9 bg-indigo-900 text-white"
        }
      >
        <div>
          <label>
            <img
              className="h-[400px]"
              src="https://www.yugioh-card.com/en/wp-content/uploads/2022/12/CYAC_550.png"
              alt=""
            />
            <h1 className="text-2xl text-center">BOOSTER PACK</h1>
          </label>
        </div>
        <div>
          <label>
            <img
              className="h-[400px]"
              src="https://www.yugioh-card.com/en/wp-content/uploads/2020/09/SDPL_Tuck_EN.png"
              alt=""
            />
            <h1 className="text-2xl text-center">STRUCTURE DECK</h1>
          </label>
        </div>
        <div>
          <label>
            <img
              className="h-[400px]"
              src="https://www.yugioh-card.com/en/wp-content/uploads/2020/09/SD2018_Tuck_EN_Mock_Actual.png"
              alt=""
            />{" "}
            <h1 className="text-2xl text-center">STARTER DECK</h1>
          </label>
        </div>
      </div>
    </>
  );
}
