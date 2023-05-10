import { useContext, useEffect } from "react";
import { UserContext } from "../utility/ItemProvider";
import { InputContext } from "../utility/FormInputProvider";

export default function Home() {
  const { itemList, getList } = useContext(UserContext);
  const { formInput, setFormInput, handleChange} = useContext(InputContext)

  useEffect(() => {
    getList()
  }, []);

  return <>
  <div>
    <form action="">
      <input type="text" id="inputName" className="border-2 border-black" value={formInput.name} onChange={(evt)=> handleChange("name", evt.target.value) }/>
      <label htmlFor="inputName" className="text-black"> Masukan Nama</label>
      {console.log(formInput.name)}
    </form>
  </div>
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
