import { useContext } from "react";
import "./Letters.css";
import GameContext from "../store/game-context";
import { EmojiFrown } from "react-bootstrap-icons";

//display shown when the game is over and the player has lost
function GameOver() {
  const ctx = useContext(GameContext);
  return (
    <div>
      <h1>
        Game over! You lose <EmojiFrown />
      </h1>
      <p className="guesses">
        The correct word was: {ctx.generateWord.toUpperCase()}
      </p>
    </div>
  );
}

export default GameOver;
