import { useContext } from "react";
import "./Letters.css";
import GameContext from "../store/game-context";

//to create the characters of the alphabet
let alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));

//to create buttons for each character in the alphabet
function Letters() {
  const ctx = useContext(GameContext);

  const alphabetLetters = alphabet.map((letter) => (
    <button
      //ternary operator to add the class "correct" (change background of button to green) if the letter is included in the correct guesses
      className={`button ${
        ctx.correctGuesses.includes(letter.toLowerCase()) &&
        !ctx.incorrectGuesses.includes(letter.toLowerCase())
          ? "correct"
          : ""
      }`}
      //disabling the alphabet buttons if the game is lost or won or if the letter is included in incorrect guesses or correct guesses
      disabled={
        ctx.correctGuesses.includes(letter.toLowerCase()) ||
        ctx.incorrectGuesses.includes(letter.toLowerCase()) ||
        ctx.gameWon ||
        ctx.gameLost
          ? "disabled"
          : ""
      }
      onClick={ctx.onAlphabetClick}
      type="button"
      key={letter}
    >
      {letter}
    </button>
  ));
  return (
    <>
      <div className="alphabet">{alphabetLetters}</div>
    </>
  );
}

export default Letters;
