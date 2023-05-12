import { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export default function ItemProvider(props) {
  const [itemList, setItemList] = useState([]);
  const [celanaList, setCelanaList] = useState([]);
  const [pakaianList, setPakaianList] = useState([]);

  const getList = async () => {
    const rest = await axios.get("http://localhost:8080/api/items");
    setItemList(rest.data);
    console.log(itemList)
  };

  const listCelana = async () => {
    const rest = await axios.get("http://localhost:8080/api/items")
    let arr = []
    for(let i = 0; i < rest.data.length; i++){
      if(rest.data[i].type == "Celana"){
        arr.push(rest.data[i])
      }
    }
    console.log(arr);
    setCelanaList(arr)
  }

  const listPakaian = async () => {
    const rest = await axios.get("http://localhost:8080/api/items")
    let arr = []
    for(let i = 0; i < rest.data.length; i++){
      if(rest.data[i].type == "Pakaian"){
        arr.push(rest.data[i])
      }
    }
    setPakaianList(arr)
  }

  const deleteItem = async (item) => {
    const res = await axios.delete('http://localhost:8080/api/items/' + item.id, item)
    getList()
  }

  const shareValue = {
    itemList,
    setItemList,
    getList,
    listCelana,
    celanaList,
    setPakaianList,
    listPakaian,
    pakaianList,
    deleteItem
  };

  return (
    <UserContext.Provider value={shareValue}>
      {props.children}
    </UserContext.Provider>
  );
}
