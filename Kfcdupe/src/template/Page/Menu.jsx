import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../Utility/MenuProvider";

export default function Menu() {
  const {
    menuSpecial,
    getMenuSpecial,
    initSp,
    setInitSp,
    initCb,
    setInitCb,
    menuCombo,
    getMenuCombo, 
    // Next, Prev, 
    id, setID, 
    PrevCb, PrevSp, NextCb, NextSp
  } = useContext(UserContext);

  console.log(menuSpecial);


  useEffect(() => {
    getMenuSpecial();
    getMenuCombo();
  }, []);

  return (
    <>
      <div>
        <div className="flex justify-center my-10">
          <div>
            <ul className="flex flex-row">
              <li className="mx-5 text-xl font-semibold hover:scale-125 hover:cursor-pointer">
                <h1>Special</h1>
              </li>
              <li className="mx-5 text-xl font-semibold hover:scale-125 hover:cursor-pointer">
                <h1>Combo</h1>
              </li>
              <li className="mx-5 text-xl font-semibold hover:scale-125 hover:cursor-pointer">
                <h1>Praktis</h1>
              </li>
              <li className="mx-5 text-xl font-semibold hover:scale-125 hover:cursor-pointer">
                <h1>Ala Carte</h1>
              </li>
              <li className="mx-5 text-xl font-semibold hover:scale-125 hover:cursor-pointer">
                <h1>Drinks</h1>
              </li>
              <li className="mx-5 text-xl font-semibold hover:scale-125 hover:cursor-pointer">
                <h1>Kids Meal</h1>
              </li>
              <li className="mx-5 text-xl font-semibold hover:scale-125 hover:cursor-pointer">
                <h1>Breakfast</h1>
              </li>
              <li className="mx-5 text-xl font-semibold hover:scale-125 hover:cursor-pointer">
                <h1>Coffe</h1>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-col px-7 bg-slate-400">
          <h1 className="font-bold text-5xl pt-7 ml-5">Special</h1>
          <div className="flex flex-row justify-center content-center">
            <button id="prevSp" onClick={PrevSp} disabled={initSp == 0}>
              <p className="font-bold text-3xl mx-9">❮</p>
            </button>
            {menuSpecial.length == 0 ? null : (
              <div className="flex flex-row justify-center content-center h-[400px]">
                <div>
                  <img
                    src={menuSpecial[initSp].image}
                    className="hover:scale-125"
                    alt=""
                  />
                  <p className="text-lg font-bold text-center mt-4">{menuSpecial[initSp].title}</p>
                </div>
                <div>
                  <img
                    src={menuSpecial[initSp + 1].image}
                    className="hover:scale-125"
                    alt=""
                  />
                  <p className="text-lg font-bold text-center  mt-4">{menuSpecial[initSp+1].title}</p>
                </div>
                <div>
                  <img
                    src={menuSpecial[initSp + 2].image}
                    className="hover:scale-125"
                    alt=""
                  />
                  <p className="text-lg font-bold text-center  mt-4">{menuSpecial[initSp+2].title}</p>
                </div>
              </div>
            )}

            <button id="nextSp" onClick={NextSp} disabled={menuSpecial.length - 3 == initSp}>
              <p className="font-bold text-3xl mx-9">❯</p>
            </button>
          </div>

          {/* <div className="flex overflow-x-auto h-[400px] p-9">
            {menuSpecial.map((menus) => (
              <div key={menus.id} className="mx-5">
                <img src={menus.image} className="hover:scale-125" alt="" />
                <p className="text-center font-bold my-4">{menus.title}</p>
              </div>
            ))}
          </div> */}
        </div>
        <div className="flex-col px-7 bg-slate-600">
          <h1 className="font-bold text-5xl pt-7 ml-5">Combo</h1>
          <div className="flex flex-row justify-center content-center">
            <button id="prevCb" onClick={PrevCb} disabled={initCb == 0}>
              <p className="font-bold text-3xl mx-9">❮</p>
            </button>
            {menuCombo.length == 0 ? null : (
              <div className="flex flex-row justify-center content-center h-[400px]">
                <div>
                  <img
                    src={menuCombo[initCb].image}
                    className="hover:scale-125"
                    alt=""
                  />
                  <p className="text-lg font-bold text-center mt-4">{menuCombo[initCb].title}</p>
                </div>
                <div>
                  <img
                    src={menuCombo[initCb + 1].image}
                    className="hover:scale-125"
                    alt=""
                  />
                  <p className="text-lg font-bold text-center  mt-4">{menuCombo[initCb+1].title}</p>
                </div>
                <div>
                  <img
                    src={menuCombo[initCb + 2].image}
                    className="hover:scale-125"
                    alt=""
                  />
                  <p className="text-lg font-bold text-center  mt-4">{menuCombo[initCb+2].title}</p>
                </div>
              </div>
            )}

            <button id="nextCb" onClick={NextCb} disabled={menuSpecial.length - 3 == initCb}>
              <p  className="font-bold text-3xl mx-9">❯</p>
            </button>
          </div>

          {/* <div className="flex overflow-x-auto h-[400px] p-9">
            {menuCombo.map((menus) => (
              <div key={menus.id} className="mx-5">
                <img src={menus.image} className="hover:scale-125" alt="" />
                <p className="text-center font-bold my-4">{menus.title}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
}
