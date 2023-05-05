import { useContext, useEffect } from "react";
import { UserContext } from "../utility/ItemProvider";

export default function ListCelana() {
  const { listCelana, celanaList, getList } =
    useContext(UserContext);

  useEffect(() => {
    getList(),
    listCelana()
  }, []);

  return (
    <>
      ini List Celana <br />

      {celanaList.length == 0 ? (
        "Loading"
      ) : (
        <div className="bg-blue-200 w-[200px] h-[200px]">
          {celanaList.map((item) => (
            <div key={item.id}>
              <p>name : {item.name}</p>
              <p>type : {item.type}</p>
              <p>desc : {item.desc}</p>
              <p>price : {item.price}</p>
              <img src={item.imgUrl} alt="" />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
