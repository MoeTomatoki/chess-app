import { welcomeFunc } from "./model/script";

const person1: Account = {
  id: 79,
  displayName: "MoeTomatoki",
  version: 1,
};

const person2: Account = {
  id: 792,
  displayName: "Oleg",
  version: 3.41,
};

const person3: Account = {
  id: 793,
  displayName: "Ivan",
  version: 2.1,
};

const Game = (props: { className: string }) => {
  return (
    <>
      <div className={props.className}>{welcomeFunc(person1)}</div>
    </>
  );
};

export default Game;
