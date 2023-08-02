

import { useState } from "react";

const cardsData = [
  {
    image:
      "https://preview.colorlib.com/theme/manup/img/team-member/member-3.jpg.webp",
    name: "Hira Nizamani",
    title: "Speaker",
  },
  {
    image:
    "https://preview.colorlib.com/theme/manup/img/team-member/member-3.jpg.webp",
    name: "John Doe",
    title: "Developer",
  },
  {
    image:
    "https://preview.colorlib.com/theme/manup/img/team-member/member-3.jpg.webp",
    name: "John Doe",
    title: "Developer",
  },
  {
    image:
    "https://preview.colorlib.com/theme/manup/img/team-member/member-3.jpg.webp",
    name: "John Doe",
    title: "Developer",
  },
  {
    image:
    "https://preview.colorlib.com/theme/manup/img/team-member/member-3.jpg.webp",
    name: "John Doe",
    title: "Developer",
  },
  {
    image:
    "https://preview.colorlib.com/theme/manup/img/team-member/member-3.jpg.webp",
    name: "John Doe",
    title: "Developer",
  },
  {
    image:
    "https://preview.colorlib.com/theme/manup/img/team-member/member-3.jpg.webp",
    name: "John Doe",
    title: "Developer",
  },
  {
    image:
    "https://preview.colorlib.com/theme/manup/img/team-member/member-3.jpg.webp",
    name: "John Doe",
    title: "Developer",
  },
];

function Cards() {
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const handleCardMouseEnter = (index) => {
    setActiveCardIndex(index);
  };

  const handleCardMouseLeave = () => {
    setActiveCardIndex(null);
  };

  return (
    <div className="w-full h-full flex flex-wrap">
      {cardsData.map((card, index) => (
        <div
          key={index}
          onMouseEnter={() => handleCardMouseEnter(index)}
          onMouseLeave={handleCardMouseLeave}
          className="w-80 h-80 p-3 bg-center bg-cover relative"
          style={{
            backgroundImage: `url("${card.image}")`,
          }}
        >
          <ul
            className={`duration-500 ${
              activeCardIndex === index
                ? "opacity-100 h-[49px]"
                : "opacity-0 h-0"
            }  flex justify-around items-center  p-2 py-3 mx-16 rounded-b bg-gradient-to-r from-orange-400 via-pink-500 to-orange-400 `}
          >
            <li className="fab fa-facebook text-[20px] cursor-pointer text-white" />
            <li className="fab fa-instagram text-[20px] cursor-pointer text-white" />
            <li className="fab fa-twitter text-[20px] cursor-pointer text-white" />
            <li className="fab fa-linkedin text-[20px] cursor-pointer text-white" />
          </ul>
          <div 
            className={`h-19 bg-slate-100 text-slate-900 duration-500 absolute bottom-0 my-5 p-4 px-10 flex-col text-2xl font-semibold transition-transform ${
              activeCardIndex === index ? "translate-x-16 opacity-100 z-10" : "-translate-x-full opacity-0 z-[-1] pointer-events-nones"
            }  `}
          >
            {card.name}
            <div className="text-red-500 text-[1.2rem] leading-1 font-normal">
              {card.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
