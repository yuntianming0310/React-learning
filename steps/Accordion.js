import { useState } from "react";

const data = [
  {
    title: "324典故周公吐哺",
    text: "相传，周公曾盘下资溪面包店铺，开放其仓库赈灾324，此后一赈成名，备受一栋人民推崇...",
  },
  {
    title: "324典故徐公孰美",
    text: "相传，徐公曾自信前往329与蒋子比美，但唱跳RAP篮球样样没比过，此后一蹶不振，每日揽镜自顾夜不眠...",
  },
  {
    title: "324典故自由飞翔",
    text: "相传，梁子曾疯玩游戏，在暗夜突袭中与表弟一起得吃，自由飞翔吃鸡，最后摔死不得吃...",
  },
];

export function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div>
      {data.map((el, i) => (
        <AccordionItem
          num={i}
          title={el.title}
          text={el.text}
          curOpen={curOpen}
          onOpen={setCurOpen}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text, curOpen, onOpen }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">${title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
