import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Utility/DeckProvider";
import { ThemeContext } from "../../Utility/DarkMode";
import { SearchContext } from "../../Utility/SearchProvider";

function DeckBuilder() {
  // isloading
  //
  const [defaultData, setDefaultData] = useState({
    name: "",
    type: "",
    frameType: "",
    desc: "",
    race: "",
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
          "https://upload.wikimedia.org/wikipedia/en/2/2b/Yugioh_Card_Back.jpg",
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
  });

  //handle3card
  // const handleDisable = () => {
  //   card.filter((kartu) => kartu.name === card.name)
  //   exDeck.filter((kartu) => kartu.name === exDeck.name)
  //   console.log(card.length, exDeck.length)
  // }

  //dark Theme
  const { theme, toogleDarkMode } = useContext(ThemeContext);

  //Get Data
  const {
    page,
    setPage,
    lastPage,
    setLastPage,
    card,
    setCard,
    exDeck,
    setExDeck,
    library,
    setLibrary,
  } = useContext(UserContext);
  const { search, setSearch } = useContext(SearchContext);
  const { getAllCard } = useContext(UserContext);
  const { getLibraryCard } = useContext(UserContext);
  const { getExtraDeck } = useContext(UserContext);

  //search Option
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const libRow = (lib) => (
    <div
      key={lib.id}
      className="w-36 mx-5 mb-9 h-[280px] bg-slate-200 p-3 rounded-2xl"
    >
      <button onClick={() => cardDetail(lib)}>
        <img src={lib.card_images[0].image_url} alt="" className="h-48" />
      </button>

      <div className="flex justify-center mt-2">
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded"
            onClick={() => addCardByList(lib)}
          >
            Add
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );

  const handleCard = (library, search) => {
    return (
      library
        .filter((lib) =>
          lib.name
            .toLowerCase()

            .includes(search.toLowerCase())
        )
        // || lib.frameType.toLowerCase().includes(search.toLowerCase())
        // || lib.rarity.toLowerCase().includes(search.toLowerCase()))
        .map(libRow)
    );
    // console.log(lib.name))
  };

  const cardDetail = async (library) => {
    // console.log(library);
    const res = await axios.get(
      "https://transparent-canyon-woolen.glitch.me/data/" + library.id,
      library
    );
    setDefaultData(res.data);
  };

  //Manage Card
  const time = new Date().getTime();

  const addCardByList = async (card) => {
    const newCard = {
      name: card.name,
      type: card.type,
      frameType: card.frameType,
      desc: card.desc,
      race: card.race,
      archetype: card.archetype,
      card_sets: [
        {
          set_name: card.set_name,
          set_code: card.set_code,
          set_rarity: card.set_rarity,
          set_rarity_code: card.set_rarity_code,
          set_price: card.set_price,
        },
      ],
      card_images: [
        {
          id: card.card_images[0].id,
          image_url: card.card_images[0].image_url,
          image_url_small: card.card_images[0].image_url_small,
          image_url_cropped: card.card_images[0].image_url_cropped,
        },
      ],
      card_prices: [
        {
          cardmarket_price: card.cardmarket_price,
          tcgplayer_price: card.tcgplayer_price,
          ebay_price: card.ebay_price,
          amazon_price: card.amazon_price,
          coolstuffinc_price: card.coolstuffinc_price,
        },
      ],
    };
    if (
      card.frameType == "normal" ||
      card.frameType == "effect" ||
      card.frameType == "spell" ||
      card.frameType == "trap" ||
      card.frameType == "effect_pendulum" ||
      card.frameType == "Ritual Effect Monster"
    ) {
      await axios.post(
        "https://pushy-perpetual-steam.glitch.me/users",
        newCard
      );
      getAllCard();
    } else if (
      card.frameType == "xyz" ||
      card.frameType == "synchro" ||
      card.frameType == "fusion" ||
      card.frameType == "synchro_pendulum" ||
      card.frameType == "fusion_pendulum" ||
      card.frameType == "link"
    ) {
      await axios.post(
        "https://pushy-perpetual-steam.glitch.me/ExtraDeck",
        newCard
      );
      getExtraDeck();
      // console.log(time);
    }
  };

  //delete
  const deleteCard = async (card) => {
    // console.log(card);
    if (
      card.frameType == "normal" ||
      card.frameType == "effect" ||
      card.frameType == "spell" ||
      card.frameType == "trap" ||
      card.frameType == "effect_pendulum" ||
      card.frameType == "Ritual Effect Monster"
    ) {
      const res = await axios.delete(
        "https://pushy-perpetual-steam.glitch.me/users/" + card.id,
        card
      );
      getAllCard();
    } else if (
      card.frameType == "xyz" ||
      card.frameType == "synchro" ||
      card.frameType == "fusion" ||
      card.frameType == "synchro_pendulum" ||
      card.frameType == "fusion_pendulum" ||
      card.frameType == "link"
    ) {
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
    // console.log(library)
  }, [page]);

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
          <div className="flex flex-col justify-center">
            <div>
              <h1 className="container font-bold text-2xl text-center">
                {" "}
                Build Your Own Deck
              </h1>
              <h2 className="font-bold text-2xl text-center">Library</h2>
            </div>
          </div>
          <div className="container flex flex-row justify-center mb-10">
            <div className="flex flex-col pt-9 w-[700px]">
              <div className=" flex justify-start rounded-md mx-5">
                <input
                  className="bg-white rounded-md text-black w-[500px] h-[70px] p-3"
                  type="text"
                  value={search}
                  onChange={handleSearch}
                  placeholder="Search"
                />
                <button
                  onClick={() => setSearch("")}
                  className="bg-white rounded-lg w-[100px] h-[70px] text-black mx-3"
                >
                  Reset
                </button>
              </div>
              <div className="flex flex-col h-[800px] mx-5 mt-4 bg-slate-500 rounded-3xl">
                <div className="text-center mt-3">
                  <p className="text-3xl">{defaultData.name}</p>
                </div>
                <div className="flex flex-row">
                  <div className="flex justify-center w-1/2 mt-4">
                    <img
                      src={defaultData.card_images[0].image_url}
                      className="h-80"
                    />
                  </div>
                  <div className="text-center flex flex-col justify-center w-1/2 mt-4 mr-5">
                    <div>
                      <p className="text-2xl">Type : {defaultData.type}</p>
                    </div>
                    <div>
                      <p className="text-2xl">Rarity : {defaultData.rarity}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center mt-7 p-5">
                  <div>
                    <p className="text-justify">{defaultData.desc}</p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-9 mx-3 w-[880px] h-[880px] bg-white rounded-lg">
              <div className="flex flex-row justify-center bg-fuchsia-600 rounded-lg h-[70px] p-3 sticky">
                <button
                  onClick={() => setSearch("Link")}
                  className="bg-white text-black w-[100px] rounded-xl mx-3"
                >
                  Link
                </button>
                <button
                  onClick={() => setSearch("Fusion")}
                  className="bg-white text-black w-[100px] rounded-xl mx-3"
                >
                  Fusion
                </button>
                <button
                  onClick={() => setSearch("Synchro")}
                  className="bg-white text-black w-[100px] rounded-xl mx-3"
                >
                  Synchro
                </button>
                <button
                  onClick={() => setSearch("Pendulum")}
                  className="bg-white text-black w-[100px] rounded-xl mx-3"
                >
                  Pendulum
                </button>
                <button
                  onClick={() => setSearch("Ritual")}
                  className="bg-white text-black w-[100px] rounded-xl mx-3"
                >
                  Ritual
                </button>
                <button
                  onClick={() => setSearch("Normal")}
                  className="bg-white text-black w-[100px] rounded-xl mx-3"
                >
                  Normal
                </button>
              </div>
              <div className="flex flex-row flex-wrap justify-center mt-9 h-[700px] w-full overflow-auto">
                {handleSearch
                  ? handleCard(library, search)
                  : library.map(libRow)}
              </div>
              <div className="flex justify-center">
                <button
                  className="text-black mx-2"
                  onClick={() => {
                    if (page > 1) {
                      setPage(page - 1);
                    }
                  }}
                >
                  Prev Page
                </button>
                <button
                  className="text-black mx-2"
                  onClick={() => {
                    if (page < lastPage) {
                      setPage(page + 1);
                    }
                  }}
                >
                  Next Page
                </button>
                {/* <p className="text-black mx-2">curent page : {page}</p>
              <p className="text-black mx-2">last page : {lastPage}</p> */}
              </div>
            </div>
          </div>
          <hr className="mt-10" />
          <h1 className="font-bold text-2xl my-10 text-center"> Main Deck</h1>
          <hr />
          {/* {console.log(exDeck)} */}
          <div className="CardList">
            <div className="flex flex-wrap flex-row justify-center mt-9">
              {card.map((c) => (
                <div key={c.id} className="w-36 mx-5 mb-9">
                  <Link to={`/card/${c.id}`}>
                    {" "}
                    <img
                      src={c.card_images[0].image_url}
                      alt=""
                      className="h-48"
                    />
                    {/* {console.log(c.card_images[0].image_url)} */}
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
                    <img
                      src={c.card_images[0].image_url}
                      alt=""
                      className="h-48"
                    />
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
