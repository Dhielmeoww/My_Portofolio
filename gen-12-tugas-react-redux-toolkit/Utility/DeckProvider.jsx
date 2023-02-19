import { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export default function DeckProvider(props) {
  const [card, setCard] = useState([]);
  const [exDeck, setExDeck] = useState([]);
  const [library, setLibrary] = useState([]);

  const getAllCard = async () => {
    const res = await axios.get("https://pushy-perpetual-steam.glitch.me//users");
    setCard(res.data);
  };

  const getLibraryCard = async () => {
    const res = await axios.get("https://pushy-perpetual-steam.glitch.me//Library");
    setLibrary(res.data);
  };

  const getExtraDeck = async () => {
    const res = await axios.get("https://pushy-perpetual-steam.glitch.me//ExtraDeck");
    setExDeck(res.data);
  };

  const shareValue = {
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
