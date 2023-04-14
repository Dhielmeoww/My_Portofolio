import React from "react";
import { useState } from "react";
import V1 from "../../assets/V1.mp4"
import Image1 from "../../assets/Image1.jpg";
import gambar2 from "../../assets/gambar2.jpg";
import gambar3 from "../../assets/gambar3.jpg";
import gambar4 from "../../assets/gambar4.jpg";
import gambar5 from "../../assets/gambar5.jpg";

export default function Home() {
  const [init, setInit] = useState(0);

  const Restart = () => {
    setInit(0);
  };

  const Next = () => {
    const incree = init + 1;
    setInit(incree);
  };

  const Prev = () => {
    const decree = init - 1;
    setInit(decree);
  };

  const slides = [
    {
      title: Image1,
      link: "We're gonna do 3 fundamental exercises.",
    },
    {
      title: gambar2,
      link: "Do 10 reps. Remember about full range of motion. Don't rush.",
    },
    {
      title: gambar3,
      link: "Squats are important. Remember to keep your back straight.",
    },
    {
      title: gambar4,
      link: "Slightly bend your knees. Remember about full range of motion.",
    },
    {
      title: gambar5,
      link: "You made it, have a nice day and see you next time!",
    },
  ];

  return (
    <>
      <div className="flex flex-row justify-center my-9">
        <button onClick={Prev} disabled={init == 0}>
          <p className="font-bold text-3xl mx-3">❮</p>
        </button>
        <div>
          <img src={slides[init].title} alt="" />
          <p>
            {init + 1} / {slides.length}
          </p>
        </div>
        <button onClick={Next} disabled={slides.length - 1 == init}>
          <p className="font-bold text-3xl mx-3">❯</p>
        </button>
      </div>
      <div className="flex flex-row justify-center">
        <div className="text-black font-semibold h-[400px] mx-5">
          <h1 className=" mb-2">Video Commercial</h1>
          
          <video className="h-[300px]" controls >
      <source src={V1} type="video/mp4"/>
     </video>
        </div>
        <div className="text-black font-semibold h-[400px] mx-5">
          <h1 className=" mb-2">News and Article</h1>
          <img src={gambar4} alt="" className="h-[300px]" />
        </div>
      </div>
    </>
  );
}
