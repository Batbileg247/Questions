"use client";

import { useState } from "react";

const qArr = [
  {
    id: 1,
    title: "Do I have to allow the use of cookies?",
    answer:
      "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    id: 2,
    title: "How do I change my My Page password?",
    answer:
      "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
  {
    id: 3,
    title: "What is BankID?",
    answer:
      "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },
  {
    id: 4,
    title: "Whose birth number can I use?",
    answer:
      "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
  },
  {
    id: 5,
    title: "When do I recieve a password ordered by letter?",
    answer:
      "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan",
  },
];

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[#cffafe] flex items-center justify-center">
      <div className="p-12 bg-white flex flex-col items-center">
        <h1 className="w-180 text-5xl flex justify-center mb-12">Questions</h1>
        <Quest />
      </div>
    </div>
  );
}

const Quest = () => {
  const [openId, setOpenId] = useState([]);
  const [list, setList] = useState(qArr);
  const [isVisible, setIsVisible] = useState(false);
  console.log(openId);

  const showText = (id) => {
    setIsVisible(!isVisible);
    setOpenId((prev) => [...prev, id]);
  };

  return (
    <div>
      {list.map((item) => {
        const isOpen = openId.includes(item.id) && isVisible;

        return (
          <div
            key={item.id}
            className="mb-8 p-4 flex flex-col items-center rounded-sm border-2 border-black/25 shadow-2xl"
          >
            <div className="w-167 flex items-center justify-between">
              <h2 className="text-xl font-semibold">{item.title}</h2>

              <button
                onClick={() => showText(item.id)}
                className="h-8 w-8 cursor-pointer bg-[#164e63] rounded-full text-white"
              >
                {isOpen ? "-" : "+"}
              </button>
            </div>

            {isOpen && <div className="w-167 text-gr mt-2">{item.answer}</div>}
          </div>
        );
      })}
    </div>
  );
};
