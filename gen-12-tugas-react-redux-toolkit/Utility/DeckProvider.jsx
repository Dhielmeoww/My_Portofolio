import { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export default function DeckProvider(props) {
  const [card, setCard] = useState([]);
  const [exDeck, setExDeck] = useState([]);
  const [library, setLibrary] = useState([]);
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(0)

  const getAllCard = async () => {
    const res = await axios.get("https://pushy-perpetual-steam.glitch.me//users");
    setCard(res.data);
  };

  const getLibraryCard = async () => {
    const res = await axios.get('https://transparent-canyon-woolen.glitch.me/data?_page=' + page);
    // console.log(res.headers.link, typeof res.headers.link)
    // console.log(res.headers.link.split(','));
    // console.log(res.headers.link.split(',')[2].split(';'));
    // console.log(res.headers.link.split(',')[2].split(';')[0].substring(1, res.headers.link.split(',')[2].split(';')[0].length-1));


    const index = res.headers.link
    .split(',')[2] 
    .split(';')[0]
    .substring(2, res.headers.link.split(',')[2].split(';')[0].length-1)
    .indexOf('=')

    setLastPage(
      res.headers.link
      .split(',')[2]
      .split(';')[0]
      .substring(2, res.headers.link.split(',')[2].split(';')[0].length
      -1)
      .substring(
        index + 1,
        res.headers.link
      .split(',')[2]
      .split(';')[0]
      .substring(2, res.headers.link.split(',')[2].split(';')[0].length
      -1).length
      )
    );
    console.log(lastPage)

    setLibrary(res.data);
    console.log(res)
  };

  const getExtraDeck = async () => {
    const res = await axios.get("https://pushy-perpetual-steam.glitch.me//ExtraDeck");
    setExDeck(res.data);
  };

  const shareValue = {
    page, setPage, lastPage, setLastPage,
    card,
    setCard,
    exDeck,
    setExDeck,
    library,
    setLibrary,
    getAllCard,
    getLibraryCard, 
    getExtraDeck
  };

  return (
    <UserContext.Provider value={shareValue}>
      {props.children}
    </UserContext.Provider>
  );
}
