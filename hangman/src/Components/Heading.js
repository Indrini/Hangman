import { useContext } from "react";
import "./Letters.css";
import Button from "react-bootstrap/Button";
import GameContext from "../store/game-context";

import { Joystick } from "react-bootstrap-icons";

function Heading() {
  const ctx = useContext(GameContext);
  return (
    <div>
      <h1 className="heading">
        Hangman <Joystick />
      </h1>
      {/* button to display the help modal */}
      <button className="modalButton" onClick={ctx.onModalShow}>
        Help
      </button>
      {/* button to reset the game */}
      <button className="modalButton" onClick={ctx.onReset}>
        Reset
      </button>
    </div>
  );
}

export default Heading;
