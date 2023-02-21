import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Utility/DeckProvider";
import { ThemeContext } from "../../Utility/DarkMode";

function CardDetail() {
  const { cardId } = useParams();
  const [data, setData] = useState({}); 
  const { theme, toogleDarkMode } = useContext(ThemeContext);
  const [image, setImage] = useState('')

  const getDataMain = async () => {
    try {
      const res = await axios.get("https://pushy-perpetual-steam.glitch.me//users/" + cardId);
      console.log(res.status);
      setData(res.data);
      setImage(res.data.card_images[0].image_url)
    } catch (error) {
      if (error.response.status == 404) {
        const res = await axios.get(
          "https://pushy-perpetual-steam.glitch.me//ExtraDeck/" + cardId
        );
        console.log(res.status);
        setData(res.data);
        setImage(res.data.card_images[0].image_url)
      }
    }
  };

  console.log("ini data :",data);
  console.log("ini data image : " ,data.card_images);

  useEffect(() => {
    getDataMain();
    // console.log(data);
  }, []);

  return (
    <>
      <div className={
          theme == "light"
            ? "container flex justify-center p-10 bg-white h-[800px]"
            : "container flex justify-center p-10 bg-slate-900 text-white h-[800px]"
        }
      >
        <div className="container flex justify-center pt-16">
          <div>
            <img src={image} alt="" className="h-[500px]" />
          </div>
          <div className="h-9 w-[900px] text-2xl px-7">
            <h1 className="font-bold text-5xl mb-10 text-orange-600">{data.name}</h1>
            <h1 className="font-bold text-4xl mb-10 text-blue-600">{data.type} Monster</h1>
            <h1 className="font-bold mb-5 text-3xl">Effect :</h1>
            {data.desc}
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
}

export default CardDetail;
