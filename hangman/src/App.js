import logo from "./logo.svg";
import React, { useContext } from "react";
import "./App.css";
import RandomWords from "./Components/WordGenerator";
import Letters from "./Components/Letters";
import ImageState from "./Components/ImageState";
import MaskedWord from "./Components/MaskedWord";
import GameContext from "./store/game-context";
import GameOver from "./Components/GameOver";
import GuessCounter from "./Components/GuessCounter";
import GameWon from "./Components/GameWon";
import Heading from "./Components/Heading";
import Modal from "./Components/HelpModal";
// import "../letters.css";

function App() {
  const ctx = useContext(GameContext);
  return (
    <div className="App">
      <Heading />
      <Modal />
      <RandomWords />
      {ctx.gameLost && <GameOver />}
      {ctx.gameWon && <GameWon />}
      <ImageState />
      <GuessCounter />
      <div>
        <MaskedWord />
      </div>
      <Letters />
    </div>
  );
}

export default App;
