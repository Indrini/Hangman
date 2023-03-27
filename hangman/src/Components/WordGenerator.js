import React, { useContext } from "react";
import GameContext from "../store/game-context";

//shows generated word for testing purposes
function RandomWords(props) {
  const ctx = useContext(GameContext);
  return <h1 className="hidden">{ctx.generateWord}</h1>;
}

export default RandomWords;
