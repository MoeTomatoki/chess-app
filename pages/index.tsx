import { useState } from "react";
import { Game, Game2 } from "../components/game/index";
import clsx from "clsx";

const HomePage = () => {
  const [colorBackground, setColorBackground] = useState<ColorState>(null);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const string = e.target.value.trim().split(" ");

    if (string.length > 2) {
      setColorBackground({
        colorBg: null,
        colorOpacity: null,
        colorError: true,
      });
    } else {
      setColorBackground({
        colorBg: string[0],
        colorOpacity: string[1],
        colorError: false,
      });
    }
    console.log(colorBackground, string);
  }

  return (
    <div className="m-16 flex gap-4 flex-col">
      <Game className={"text-5xl text-sky-200 drop-shadow-text-shadow"} />
      <div>Выбор цвета и яркость:</div>
      <input
        onChange={handleInput}
        className="bg-slate-200 border-sky-200 border-4 rounded-full text-center"
      />
      <div className="text-gray-500 text-xs">*Формат: red 400</div>
      <Game2 colorProps={colorBackground}></Game2>
    </div>
  );
};

export default HomePage;
