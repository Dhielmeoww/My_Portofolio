import { useContext, useEffect } from "react"
import { UserContext } from "../utility/ItemProvider"

export default function ListPakaian(){
    const {listPakaian, pakaianList} = useContext(UserContext)

    useEffect(()=>{
        listPakaian()
    }, [])

    return <>
    ini List Pakaian

    {pakaianList.length == 0 ? "Loading" : (
        <div>
            {pakaianList.map((item) => (
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
}