import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../Utility/MenuProvider";

export default function Menu() {
  const { menuSpecial, getMenuSpecial, init, setInit } = useContext(UserContext);
  console.log(menuSpecial);

  const Next = () => {
    const incree = init + 1;
    setInit(incree);
  };

  const Prev = () => {
    const decree = init - 1;
    setInit(decree);
  };

  useEffect(() => {
    getMenuSpecial();
  }, []);

  return (
    <>
      <div>
        <div className="flex justify-center my-10">
          <div>
            <ul className="flex flex-row">
              <li className="mx-5 text-xl font-semibold">
                <h1>Special</h1>
              </li>
              <li className="mx-5 text-xl font-semibold">
                <h1>Combo</h1>
              </li>
              <li className="mx-5 text-xl font-semibold">
                <h1>Praktis</h1>
              </li>
              <li className="mx-5 text-xl font-semibold">
                <h1>Ala Carte</h1>
              </li>
              <li className="mx-5 text-xl font-semibold">
                <h1>Drinks</h1>
              </li>
              <li className="mx-5 text-xl font-semibold">
                <h1>Kids Meal</h1>
              </li>
              <li className="mx-5 text-xl font-semibold">
                <h1>Breakfast</h1>
              </li>
              <li className="mx-5 text-xl font-semibold">
                <h1>Coffe</h1>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row flex-wrap">
            {menuSpecial.map((menus) => (
                <div key={menus.id}>
                    <img src={menus.image} alt="" />
                </div>
            ))}
        </div>
        <div>
            ini Coba Coba
            <button onClick={Prev} disabled={init == 0}>Prev</button>
            {/* <img src={menuSpecial[init].image} alt="" />
            <img src={menuSpecial[init+1].image} alt="" />
            <img src={menuSpecial[init+2].image} alt="" /> */}
            <button onClick={Next} disabled={menuSpecial.length - 3 == init }>Next</button>
        </div>
      </div>
    </>
  );
}
