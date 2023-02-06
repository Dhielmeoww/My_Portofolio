import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
  const { theme, toogleDarkMode } = useContext(ThemeContext);
  const [formInput, setFormInput] = useState({ ...defaultInput });

  //darkmode

  //Get Data
  const { card, setCard, exDeck, setExDeck, library, setLibrary } =useContext(UserContext);
  const { getAllCard } = useContext(UserContext);
  const { getLibraryCard } = useContext(UserContext);
  const { getExtraDeck } = useContext(UserContext);

  //Manage Card

  const addCardByList = async (card) => {
    if (card.TypeDeck == "Main") {
      await axios.post("http://localhost:3000/users", card);
      getAllCard();
    } else if (card.TypeDeck == "Extra") {
      await axios.post("http://localhost:3000/ExtraDeck", card);
      getExtraDeck();
    }
  };

  ////edit

  const edit = async (card) => {
    console.log(card);
    if (card.TypeDeck == "Main") {
      const res = await axios.get(
        "http://localhost:3000/users" + card.id,
        card
      );
      setFormInput(res.data);
    } else if (card.TypeDeck == "Extra") {
      const res = await axios.get(
        "http://localhost:3000/ExtraDeck/" + card.id,
        card
      );
      setFormInput(res.data);
    }
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
      if (formInput.TypeDeck == "Main") {
        await axios.put(
          "http://localhost:3000/users/" + formInput.id,
          formInput
        );
      } else {
        await axios.put(
          "http://localhost:3000/ExtraDeck/" + formInput.id,
          formInput
        );
      }
    } else {
      if (formInput.TypeDeck == "Main") {
        await axios.post("http://localhost:3000/users", formInput);
      } else {
        await axios.post("http://localhost:3000/ExtraDeck", formInput);
      }
    }

    setFormInput({ ...defaultInput });
    getExtraDeck();
    getAllCard();
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
      <div
        className={
          theme == "light"
            ? "container flex justify-center pt-14 bg-white"
            : "container flex justify-center pt-14 bg-slate-900 text-white"
        }
      >
        <div>
          <h1 className="font-bold text-2xl text-center">
            {" "}
            Build Your Own Deck
          </h1>
          <div className="mb-10">
            <h2 className="font-bold text-2xl text-center">Library</h2>
            <div className="flex flex-wrap flex-row justify-center mt-9">
              {library.map((lib) => (
                <div key={lib.name} className="w-36 mx-5">
                  <img src={lib.image} alt="" className="h-48" />
                  <div className="h-[150px] mt-9">
                    <p>
                      <b>Name</b> : {lib.name}
                    </p>
                    <p>
                      <b>Rarity</b> : {lib.rarity}
                    </p>
                    <p>
                      <b>Type</b> : {lib.type}
                    </p>
                    <p>
                      <b>Desc</b> : &nbsp;
                      <button onClick={() => Desc(`${lib.desc}`)}>
                        {" "}
                        Click{" "}
                      </button>
                    </p>
                  </div>
                  <div className="flex justify-center mt-2">
                    <div>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => addCardByList(lib)}
                      >
                        Add
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
                Add or Edit
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
          </div>
          <hr />

          <h1 className="font-bold text-2xl my-10"> Main Deck</h1>
          <div className="CardList">
            <div>
              <table className="w-[1500px]">
                <thead
                  className={
                    theme == "light"
                      ? "uppercase bg-white border-b"
                      : "uppercase border-b bg-slate-900 text-white"
                  }
                >
                  <tr>
                    <th className="px-6 py-3">Card</th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Rarity</th>
                    <th className="px-6 py-3">Type</th>
                    <th className="px-6 py-3">Desc</th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {card.map((cards) => (
                    <tr
                      key={cards.id}
                      className={
                        theme == "light"
                          ? "bg-white border-b"
                          : "border-b bg-slate-900 text-white"
                      }
                    >
                      <td className="px-6 py-3">
                        <img src={cards.image} alt="" height="200px" />
                      </td>
                      <td className="px-6 py-3">
                        <Link to={`/card/${cards.id}`}>{cards.name}</Link>
                      </td>
                      <td className="px-6 py-3">{cards.rarity}</td>
                      <td className="px-6 py-3">{cards.type}</td>
                      <td className="px-6 py-3">{cards.desc}</td>
                      <td className="px-6 py-3">
                        <button
                          className="bg-gray-500 my-5 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => edit(cards)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-gray-500 my-5 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => deleteCard(cards)}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <h1 className="font-bold text-2xl my-10"> Extra Deck</h1>
          <div className="CardList">
            <div>
              <table className="w-[1500px]">
                <thead
                  className={
                    theme == "light"
                      ? "uppercase bg-white border-b"
                      : "uppercase border-b bg-slate-900 text-white"
                  }
                >
                  <tr>
                    <th className="px-6 py-3">Card</th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Rarity</th>
                    <th className="px-6 py-3">Type</th>
                    <th className="px-6 py-3">Desc</th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {exDeck.map((cards) => (
                    <tr
                      key={cards.id}
                      className={
                        theme == "light"
                          ? " bg-white border-b"
                          : " border-b bg-slate-900 text-white"
                      }
                    >
                      <td className="px-6 py-3">
                        <img src={cards.image} alt="" height="200px" />
                      </td>
                      <td className="px-6 py-3">
                        <Link to={`/card/${cards.id}`}>{cards.name}</Link>
                      </td>
                      <td className="px-6 py-3">{cards.rarity}</td>
                      <td className="px-6 py-3">{cards.type}</td>
                      <td className="px-6 py-3">{cards.desc}</td>
                      <td className="px-6 py-3">
                        <button
                          className="bg-gray-500 my-5 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => edit(cards)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-gray-500 my-5 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => deleteCard(cards)}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeckBuilder;
