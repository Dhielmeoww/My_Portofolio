import { useContext, useEffect } from "react";
import { UserContext } from "../utility/ItemProvider";

export default function Home() {
  const { itemList, getList } = useContext(UserContext);

  useEffect(() => {
    getList()
  }, []);

  return <>
  {itemList.length ==  0 ? "Loading" : 
  (<div className="bg-blue-200">
    {itemList.map((item) => (
        <div key={item.id}>
            <p>name : {item.Name}</p>
            <p>type : {item.Type}</p>
            <p>desc : {item.Description}</p>
            <p>price : {item.Price}</p>
            <p>link image : {item.image_URL}</p>
            <img src={item.image_URL} alt="" />
        </div>
    ))}
  </div>)}
  </>;
}
