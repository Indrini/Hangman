import { useState, useEffect, useContext } from "react";
import "./Letters.css";
import GameContext from "../store/game-context";

//display shown when the game is won by the player
function GameWon() {
  const ctx = useContext(GameContext);
  return (
    <div>
      <h1>Congratulations! You Win!</h1>
      <p className="guesses">
        The correct word was: {ctx.generateWord.toUpperCase()}
      </p>
    </div>
  );
}

export default GameWon;
