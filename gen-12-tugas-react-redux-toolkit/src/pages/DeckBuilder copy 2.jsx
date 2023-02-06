import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../Utility/DeckProvider";
import { ThemeContext } from "../../Utility/DarkMode";

const defaultInput = {
  name: "",
  rarity: "",
  image: "",
  type: "",
  desc: "",
  TypeDeck: "",
};

function DeckBuilder() {
  //Modal

  //dark Theme
  const { theme, toogleDarkMode } = useContext(ThemeContext);

  //form
  const [formInput, setFormInput] = useState({ ...defaultInput });

  //Get Data
  const { card, setCard, exDeck, setExDeck, library, setLibrary } =
    useContext(UserContext);
  const { getAllCard } = useContext(UserContext);
  const { getLibraryCard } = useContext(UserContext);
  const { getExtraDeck } = useContext(UserContext);

  //Manage Card
  const time = new Date().getTime();

  const addCardByList = async (card) => {
    const newCard = {
      name: card.name,
      TypeDeck: card.TypeDeck,
      rarity: card.rarity,
      image: card.image,
      type: card.type,
      desc: card.desc,
    };
    if (card.TypeDeck == "Main") {
      await axios.post("http://localhost:3000/users", newCard);
      getAllCard();
    } else if (card.TypeDeck == "Extra") {
      await axios.post("http://localhost:3000/ExtraDeck", newCard);
      getExtraDeck();
      console.log(time);
    }
  };

  ////edit

  const edit = async (library) => {
    console.log(library);
    const res = await axios.get(
      "http://localhost:3000/Library/" + library.id,
      library
    );
    setFormInput(res.data);
  };

  //delete
  const deleteCard = async (card) => {
    console.log(card);
    if (card.TypeDeck == "Main") {
      const res = await axios.delete(
        "http://localhost:3000/users/" + card.id,
        card
      );
      getAllCard();
    } else if (card.TypeDeck == "Extra") {
      const res = await axios.delete(
        "http://localhost:3000/ExtraDeck/" + card.id,
        card
      );
      getExtraDeck();
    }
  };

  //Handling Form

  const handleFormInput = (type, value) =>
    setFormInput({ ...formInput, [type]: value });

  ////for users
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(formInput.TypeDeck);

    const isEdit = !!formInput.id;

    if (isEdit) {
      await axios.put(
        "http://localhost:3000/Library/" + formInput.id,
        formInput
      );
    } else {
      await axios.post("http://localhost:3000/Library", formInput);
    }

    setFormInput({ ...defaultInput });
    getExtraDeck();
    getAllCard();
    getLibraryCard();
  };

  //navigate
  const navigate = useNavigate()
  const navi = () => {
    navigate("/Login")
  }

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
      <div
        className={
          theme == "light"
            ? "container flex justify-center pt-14 bg-white"
            : "container flex justify-center pt-14 bg-slate-900 text-white"
        }
      >
        <div>
          <h1 className="container font-bold text-2xl text-center">
            {" "}
            Build Your Own Deck
          </h1>
          <div className="container mb-10">
            <h2 className="font-bold text-2xl text-center">Library</h2>
            <div className="flex flex-wrap flex-row justify-center mt-9 w-full">
              {library.map((lib) => (
                <div key={lib.id} className="w-36 mx-5 mb-9">
                  <img src={lib.image} alt="" className="h-48" />
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
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => addCardByList(lib)}
                      >
                        Add
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
                    value={formInput.image}
                    placeholder="Input URL Image"
                    onChange={(evt) =>
                      handleFormInput("image", evt.target.value)
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
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              <img src={formInput.image} alt="" />
            </div>
          </div>
          <hr className="mt-10" />

          <h1 className="font-bold text-2xl my-10 text-center"> Main Deck</h1>
          <hr />
          <div className="CardList">
            <div className="flex flex-wrap flex-row justify-center mt-9">
              {card.map((c) => (
                <div key={c.id} className="w-36 mx-5 mb-9">
                  <Link to={`/card/${c.id}`}>
                    {" "}
                    <img src={c.image} alt="" className="h-48" />
                  </Link>
                  <div className="flex justify-center mt-2">
                    <div>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => deleteCard(c)}
                      >
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr className="mt-12" />
          <h1 className="font-bold text-2xl my-10 text-center"> Extra Deck</h1>
          <hr className="mt-9" />
          <div className="CardList">
            <div className="flex flex-wrap flex-row justify-center mt-9">
              {exDeck.map((c) => (
                <div key={c.id} className="w-36 mx-5 mb-9">
                  <Link to={`/card/${c.id}`}>
                    {" "}
                    <img src={c.image} alt="" className="h-48" />
                  </Link>
                  <div className="flex justify-center mt-2">
                    <div>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => deleteCard(c)}
                      >
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeckBuilder;
