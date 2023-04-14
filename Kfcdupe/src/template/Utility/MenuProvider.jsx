import { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export default function MenuProvider(props) {
  const [menuSpecial, setMenuSpecial] = useState([]);
  const [init, setInit] = useState(0);
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

  const shareValue = {
    menuSpecial,
    getMenuSpecial,
    init,
    setInit,
    
  };

  return (
    <UserContext.Provider value={shareValue}>
      {props.children}
    </UserContext.Provider>
  );
}
