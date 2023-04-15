import { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export default function MenuProvider(props) {
  const [menuSpecial, setMenuSpecial] = useState([]);
  const [initSp, setInitSp] = useState(0);
  const [initCb, setInitCb] = useState(0);
  const [id, setID] = useState()
  const [menuCombo, setMenuCombo] = useState([]);
  const [menuPraktis, setMenuPraktis] = useState([]);
  const [menuCarte, setMenuCarte] = useState([]);
  const [menuDrink, setMenuDrink] = useState([]);
  const [menuKids, setMenuKids] = useState([]);
  const [menuBreakFast, setMenuBreakfast] = useState([]);
  const [menuCoffe, setMenuCoffe] = useState([]);

  const getMenuSpecial = async () => {
    const res = await axios.get("http://localhost:3000/Special");
    setMenuSpecial(res.data);
    console.log(res.data);
  };

  const getMenuCombo = async () => {
    const res = await axios.get("http://localhost:3000/Combo");
    setMenuCombo(res.data);
    console.log(res.data);
  };

  // const Next = () => {
  //   if( id == "nextSp"){
  //     console.log(id);
  //     let incree = initSp + 1;
  //     setInitSp(incree);
  //   } else if (id == "nextCb"){
  //     let incree = initCb + 1;
  //     setInitCb(incree);
  //     console.log(id);
  //   }
  // };

  const NextSp = () => {
      let incree = initSp + 1;
      setInitSp(incree);
  };

  const NextCb = () => {

      let incree = initCb + 1;
      setInitCb(incree);
      console.log(id);
  };

  // const Prev = () => {
  //   if(id == "prevCb"){
  //     let decree = initCb - 1;
  //     setInitCb(decree);
  //   } else if(id == "prevSp"){
  //     let decree = initSp - 1;
  //     setInitSp(decree);
  //   }
  // };

  const PrevCb = () => {
   
      let decree = initCb - 1;
      setInitCb(decree);
   
  };

  const PrevSp = () => {
    
      let decree = initSp - 1;
      setInitSp(decree);
    
  };

  const shareValue = {
    menuSpecial,
    getMenuSpecial,
    initSp,
    setInitSp,
    initCb,
    setInitCb,
    menuCombo, getMenuCombo,
    // Next, Prev, 
    id, setID, PrevCb, PrevSp, NextCb, NextSp
    
  };

  return (
    <UserContext.Provider value={shareValue}>
      {props.children}
    </UserContext.Provider>
  );
}
