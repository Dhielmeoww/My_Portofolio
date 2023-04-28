import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../Utility/DeckProvider";
import { ThemeContext } from "../../../Utility/DarkMode";
import { statLogin, statLogout } from "../../redux/userSlice";

const defaultInput = {
  name: "",
  type: "",
  frameType: "",
  desc: "",
  race: "",
  level: "",
  archetype: "",
  card_sets: [
    {
      set_name: "",
      set_code: "",
      set_rarity: "",
      set_rarity_code: "",
      set_price: "",
    },
  ],
  card_images: [
    {
      image_url:
        "",
      image_url_small: "",
      image_url_cropped: "",
    },
  ],
  card_prices: [
    {
      cardmarket_price: "",
      tcgplayer_price: "",
      ebay_price: "",
      amazon_price: "",
      coolstuffinc_price: "",
    },
  ],
};


function AdminPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  //dark Theme
  const { theme, toogleDarkMode } = useContext(ThemeContext);

  //form
  const [formInput, setFormInput] = useState({ ...defaultInput });

  //Get Data
  const { library, setLibrary } = useContext(UserContext);
  const { getAllCard } = useContext(UserContext);
  const { getLibraryCard } = useContext(UserContext);
  const { getExtraDeck } = useContext(UserContext);

  ////edit

  const edit = async (library) => {
    console.log(library);
    const res = await axios.get(
      "https://transparent-canyon-woolen.glitch.me/data/" + library.id,
      library
    );
    setFormInput(res.data);
  };

  //Handling Form

  const handleFormInput = (type, value) =>
    setFormInput({ ...formInput, [type]: value });

  ////edit or add
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(formInput.TypeDeck);

    const isEdit = !!formInput.id;

    if (isEdit) {
      await axios.put(
        "https://transparent-canyon-woolen.glitch.me/data/" + formInput.id,
        formInput
      );
    } else {
      await axios.post("https://transparent-canyon-woolen.glitch.me/data/", formInput);
    }

    setFormInput({ ...defaultInput });
    getExtraDeck();
    getAllCard();
    getLibraryCard();
  };

  //navigate
  const navigate = useNavigate();

  const Logout = () => {
    dispatch(
      statLogout()
    );
    localStorage.clear()
    navigate("/Login");
  };

  const Desc = (param) => {
    alert(param);
  };

  useEffect(() => {
    getLibraryCard();
  }, []);

  useEffect(() => {
    getExtraDeck();
  }, []);

  useEffect(() => {
    getAllCard();
  }, []);

  return (
    <>
    {console.log(user)}
    {console.log(formInput)}
    {library.length == 0 ? null :
      <div
        className={
          theme == "light"
            ? "container flex justify-center pt-14 bg-white"
            : "container flex justify-center pt-14 bg-slate-900 text-white"
        }
      >
        <div>
          <div className="flex justify-center mx-64 py-8 h-[100px] rounded-2xl bg-orange-500">
            <div className="font-bold text-2xl mx-3">Welcome {user.firstName}</div>
            <div>
              <button
                className="font-bold text-2xl mx-3 w-[200px] text-center bg-blue-600 rounded-xl"
                onClick={Logout}
              >
                {" "}
                Logout
              </button>
            </div>
          </div>

          <div className="container mb-10 pt-9">
            <h2 className="font-bold text-2xl text-center">Library</h2>
             
            <div className="flex flex-wrap flex-row justify-center mt-9 w-full">
              {library.map((lib) => (
                <div key={lib.id} className="w-36 mx-5 mb-9">
                
                  <img src={lib.card_images[0].image_url} alt="" className="h-48" />
                  
                  <div className="h-[130px] mt-9">
                    <p>
                      <b>Name</b> : {lib.name}
                    </p>
                    <p>
                      <b>Rarity</b> : {lib.rarity}
                    </p>
                    <p>
                      <b>Type</b> : {lib.type}
                    </p>
                  </div>
                  <div className="flex justify-center mt-2">
                    <div>
                      <button
                        className="bg-slate-100 text-black rounded-xl mt-2 p-2"
                        onClick={() => Desc(`${lib.desc}`)}
                      >
                        {" "}
                        Description{" "}
                      </button>
                      <button
                        className="bg-gray-500 my-5 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => edit(lib)}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
          <hr />
          <div className="flex justify-center mt-16 ">
            <div className="w-[300px]">
              <h1 className="font-bold text-2xl text-center mb-9">
                {" "}
                Add to Library or Edit
              </h1>
              <form onSubmit={handleSubmit}>
                <label>
                  <p>Name : </p>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={formInput.name}
                    placeholder="Input Name Card"
                    onChange={(evt) =>
                      handleFormInput("name", evt.target.value)
                    }
                  />
                </label>
                <label>
                  <p>Rarity : </p>
                  <select
                    className="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                   text-gray-700
                   bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    value={formInput.rarity}
                    onChange={(evt) =>
                      handleFormInput("rarity", evt.target.value)
                    }
                  >
                    <option value="">Choose Rarity</option>
                    <option value="UR">UR</option>
                    <option value="SR">SR</option>
                    <option value="R">R</option>
                    <option value="N">N</option>
                  </select>
                </label>
                <label>
                  <p>URL Image : </p>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={formInput.card_images[0].image_url}
                    placeholder="Input URL Image"
                    onChange={(evt) =>
                      handleFormInput("card_images[0].image_url", evt.target.value)
                    }
                  />
                </label>
                <label>
                  <p>Type : </p>
                  <select
                    className="form-select appearance-none
                     block
                     w-full
                     px-3
                     py-1.5
                     text-base
                     font-normal
                     text-gray-700
                     bg-white bg-clip-padding bg-no-repeat
                     border border-solid border-gray-300
                     rounded
                     transition
                     ease-in-out
                     m-0
                     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    value={formInput.type}
                    onChange={(evt) =>
                      handleFormInput("type", evt.target.value)
                    }
                  >
                    <option value="">Choose type</option>
                    <option value="Link">Link</option>
                    <option value="Fusion">Fusion</option>
                    <option value="Synchro">Synchro</option>
                    <option value="XYZ">XYZ</option>
                    <option value="Pendulum">Pendulum</option>
                    <option value="Normal">Normal</option>
                    <option value="Ritual">Ritual</option>
                  </select>
                </label>
                <label>
                  <p>Deck Type : </p>
                  <select
                    className="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    value={formInput.TypeDeck}
                    onChange={(evt) =>
                      handleFormInput("TypeDeck", evt.target.value)
                    }
                  >
                    <option value="">Choose Deck type</option>
                    <option value="Main">Main Deck</option>
                    <option value="Extra">Extra Deck</option>
                  </select>
                </label>
                <label>
                  <p>Desc : </p>
                  <textarea
                    className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    // "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Input Description"
                    type="text"
                    value={formInput.desc}
                    onChange={(evt) =>
                      handleFormInput("desc", evt.target.value)
                    }
                  />
                </label>
                <p>
                  <button className="bg-blue-500 my-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    SUBMIT
                  </button>
                </p>
              </form>
            </div>
            <div className="mx-12">
              <img src={formInput.card_images[0].image_url} alt="" />
            </div>
          </div>
          <hr className="mt-10" />
        </div>
      </div>
}
    </>
  );
}

export default AdminPage;
