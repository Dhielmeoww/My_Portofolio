import { useContext, useEffect } from "react";
import { UserContext } from "../utility/ItemProvider";
import { InputContext } from "../utility/FormInputProvider";

export default function Home() {
  const { itemList, getList, deleteItem } = useContext(UserContext);
  const { formInput, setFormInput, handleChange, handleSubmit } =
    useContext(InputContext);

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <div className="bg-orange-300">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center border-t-4 border-b-4 p-9">
            <ul className="">
              <li>
                <label htmlFor="inputName" className="text-black">
                  {" "}
                  Masukan Nama :{" "}
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="inputName"
                  className="border-2 border-black rounded-md"
                  value={formInput.name}
                  onChange={(evt) => handleChange("name", evt.target.value)}
                />
              </li>
              <li>
                <label htmlFor="typeItem">Pilih Type : </label>
                <br />
                <select
                  name=""
                  id="typeItem"
                  className="border-2 border-black rounded-md"
                  value={formInput.type}
                  onChange={(evt) => handleChange("type", evt.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Celana">Celana</option>
                  <option value="Pakaian">Pakaian</option>
                </select>
              </li>
              <li>
                <label htmlFor="harga">Masukkan harga : </label> <br />
                <input
                  id="harga"
                  className="border-2 border-black rounded-md"
                  type="number"
                  value={formInput.price}
                  onChange={(evt) => handleChange("price", evt.target.value)}
                />
              </li>
              <li>
                <label htmlFor="deskripsi">Masukkan deskripsi : </label> <br />
                <input
                  type="text"
                  className="border-2 border-black rounded-md"
                  value={formInput.desc}
                  onChange={(evt) => handleChange("desc", evt.target.value)}
                />
              </li>
              <li>
                <label htmlFor="img">Masukkan alamat gambar : </label> <br />
                <input
                  type="text"
                  className="border-2 border-black rounded-md"
                  id="img"
                  value={formInput.imgUrl}
                  onChange={(evt) => handleChange("imgUrl", evt.target.value)}
                />
              </li>
              <li>
                <button>Save</button>
              </li>
            </ul>
          </div>
        </form>
      </div>
      {itemList.length == 0 ? (
        "Loading"
      ) : (
        <div className="bg-blue-200 flex flex-wrap justify-center p-10">
          {itemList.map((item) => (
            <div key={item.id} className="mx-5 border-2 p-4">
              <p className="text-lg font-semibold">{item.name}</p>

              <img className="mt-4 mb-4" src={item.imgUrl} alt="" />
              <ul className="flex justify-between">
                <li>
                  <p>{item.type}</p>
                </li>
                <li>
                  <p>price : {item.price}</p>
                </li>
              </ul>

              <p>desc : {item.desc}</p>

              <div className="flex justify-center">
                <ul className="flex">
                  <li>
                    <button className="bg-white text-black p-4 rounded-md m-4">
                      {" "}
                      Edit{" "}
                    </button>
                  </li>
                  <li>
                    <button
                      className="bg-white text-black p-4 rounded-md m-4"
                      onClick={() => deleteItem(item)}
                    >
                      {" "}
                      Hapus{" "}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
