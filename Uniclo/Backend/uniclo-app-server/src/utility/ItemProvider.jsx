import { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export default function ItemProvider(props) {
  const [itemList, setItemList] = useState([]);

  const getList = async () => {
    const rest = await axios.get("/api/unc");
    setItemList(rest.data);
    console.log(itemList)
  };

  const shareValue = {
    itemList,
    setItemList,
    getList,
  };

  return (
    <UserContext.Provider value={shareValue}>
      {props.children}
    </UserContext.Provider>
  );
}
