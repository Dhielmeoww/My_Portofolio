import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Utility/DeckProvider";
import { ThemeContext } from "../../Utility/DarkMode";
import { SearchContext } from "../../Utility/SearchProvider";

function DeckBuilder() {
  //
  const [defaultData, setDefaultData] = useState({
    name: "",
    rarity: "",
    image: "",
    type: "",
    desc: "",
    TypeDeck: "",
  });

  //dark Theme
  const { theme, toogleDarkMode } = useContext(ThemeContext);

  //Get Data
  const { card, setCard, exDeck, setExDeck, library, setLibrary } =
    useContext(UserContext);
  const { search, setSearch } = useContext(SearchContext);
  const { getAllCard } = useContext(UserContext);
  const { getLibraryCard } = useContext(UserContext);
  const { getExtraDeck } = useContext(UserContext);

  //search Option
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const libRow = (lib) => (
    <div key={lib.id} className="w-36 mx-5 mb-9">
      <button onClick={() => cardDetail(lib)}><img src={lib.image} alt="" className="h-48" /></button>
      
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
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded"
            onClick={() => addCardByList(lib)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );

  const handleCard = (library, search) => {
    return library
      .filter((lib) => lib.name.toLowerCase().includes(search.toLowerCase()))
      .map(libRow);
  };

  const cardDetail = async (library) => {
    console.log(library);
    const res = await axios.get(
      "https://pushy-perpetual-steam.glitch.me/Library/" + library.id,
      library
    );
    setDefaultData(res.data);
  }

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
      await axios.post(
        "https://pushy-perpetual-steam.glitch.me//users",
        newCard
      );
      getAllCard();
    } else if (card.TypeDeck == "Extra") {
      await axios.post(
        "https://pushy-perpetual-steam.glitch.me/ExtraDeck",
        newCard
      );
      getExtraDeck();
      console.log(time);
    }
  };

  //delete
  const deleteCard = async (card) => {
    console.log(card);
    if (card.TypeDeck == "Main") {
      const res = await axios.delete(
        "https://pushy-perpetual-steam.glitch.me/users/" + card.id,
        card
      );
      getAllCard();
    } else if (card.TypeDeck == "Extra") {
      const res = await axios.delete(
        "https://pushy-perpetual-steam.glitch.me/ExtraDeck/" + card.id,
        card
      );
      getExtraDeck();
    }
  };

  //navigate
  const navigate = useNavigate();
  const navi = () => {
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
      <div
        className={
          theme == "light"
            ? "container flex justify-center pt-14 bg-white"
            : "container flex justify-center pt-14 bg-slate-900 text-white"
        }
      >
        <div>
        <div className="flex justify-center">
          <div>
          <h1 className="container font-bold text-2xl text-center">
            {" "}
            Build Your Own Deck
          </h1>
          <h2 className="font-bold text-2xl text-center">Library</h2>
          </div>
          <div><input
              className="bg-white text-black"
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Seacrh"
            /></div>
        </div>
          <div className="container flex flex-row mb-10">
            <div className="flex justify-center w-2/5 h-[800px] mr-3 mt-9 bg-slate-500">
              <div><p className="flex text-3xl">{defaultData.name}</p>
                </div>
                <div>
                <img src={defaultData.image} className="h-80"/></div>

              
              
            </div>
            <div className="flex flex-row flex-wrap mt-9 w-3/5 h-[800px] overflow-auto">
              {handleSearch ? handleCard(library, search) : library.map(libRow)}
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
