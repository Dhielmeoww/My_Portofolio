import { useEffect, useState } from "react";
import axios from "axios";

export default function TierList() {
  const [tier, setTier] = useState([]);

  const getTier = async () => {
    const res = await axios.get("https://pushy-perpetual-steam.glitch.me/TierList");
    setTier(res.data);
  };

  useEffect(() => {
    getTier()
  }, []);

  return (
    <>
      <div className="container py-9">
        <div className="font-bold text-2xl text-center">
          <h1>Tier List (OnProgress)</h1>
        </div>
        <div className="flex flex-wrap flex-row justify-center mt-9">
          {tier.map((t) => (
            <div key={t.name} className="mx-9">
              <img src={t.image} alt="" className="h-[200px] rounded-2xl"/>
              <p>
                <b>Name</b> : {t.name}
              </p>
              <p>
                <b>Power</b> : {t.power}
              </p>
              <p>
                <b>Tier</b> : {t.tier}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
