import { useContext } from "react";
import "./Letters.css";
import GameContext from "../store/game-context";

function MaskedWord() {
  const ctx = useContext(GameContext);
  //creating a box for each character in the random word
  let maskedLetters = ctx.generateWord.split("");
  let maskedbox = maskedLetters.map((char, index) => {
    return (
      <div key={char + index} className="characterBox">
        <p className="guessedChar">
          {/* ternary operator to display the character if included in correct guesses and display "_" if not included in correct guesses */}
          {ctx.correctGuesses.includes(char.toLowerCase())
            ? char.toUpperCase()
            : "_"}
        </p>
      </div>
    );
  });
  return <div className="wordBox">{maskedbox}</div>;
}

export default MaskedWord;
