import { useContext } from "react";
import "./Letters.css";
import GameContext from "../store/game-context";

//array of images showing game status
const imageArray = [
  "./Images/state1.GIF",
  "./Images/state2.GIF",
  "./Images/state3.GIF",
  "./Images/state4.GIF",
  "./Images/state5.GIF",
  "./Images/state6.GIF",
  "./Images/state7.GIF",
  "./Images/state8.GIF",
  "./Images/state9.GIF",
  "./Images/state10.GIF",
  "./Images/state11.GIF",
];

function ImageState() {
  const ctx = useContext(GameContext);
  return (
    <div>
      {/* updating the hangman image through using the incorrect guess count as the index */}
      <img
        alt="drawn hangman"
        className="hangmanImg"
        src={imageArray[ctx.incorrectGuessCount]}
      />
    </div>
  );
}

export default ImageState;
