import { useContext, useEffect } from "react";
import { UserContext } from "../utility/ItemProvider";

export default function Home() {
  const { itemList, getList } = useContext(UserContext);

  useEffect(() => {
    getList()
  }, []);

  return <>
  {itemList.length ==  0 ? "Loading" : 
  (<div className="bg-blue-200 flex flex-wrap">
    {itemList.map((item) => (
        <div key={item.id}>
            <p>name : {item.name}</p>
            <p>type : {item.type}</p>
            <p>desc : {item.desc}</p>
            <p>price : {item.price}</p>
            <img src={item.imgUrl} alt="" />
        </div>
    ))}
  </div>)}
  </>;
}
