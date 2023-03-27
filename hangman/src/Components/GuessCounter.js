import { useContext } from "react";
import "./Letters.css";
import GameContext from "../store/game-context";

//to show how many incorrect guesses the player has left
function GuessCounter() {
  const ctx = useContext(GameContext);
  return (
    <div>
      <p className="guesses">
        Incorrect guesses left: {10 - ctx.incorrectGuessCount}
      </p>
    </div>
  );
}

export default GuessCounter;
