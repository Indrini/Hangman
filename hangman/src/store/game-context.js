import React, { useState, useEffect } from "react";
//random word generator
import randomWords from "random-words";

//creating the context to pass the state and data across components
const GameContext = React.createContext({
  show: false,
  gameWon: false,
  gameLost: false,

  onAlphabetClick: () => {},
  onModalShow: () => {},
  onModalClose: () => {},
  onReset: () => {},
  generateWord: "",
  correctGuesses: [],
  incorrectGuesses: [],
  incorrectGuessCount: 0,
});

export const GameContextProvider = (props) => {
  //to open and close the help modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //setting initial states
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [incorrectGuesses, setincorrectGuesses] = useState([]);
  const [incorrectGuessCount, setincorrectGuessCount] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);

  const [randomWord, setRandomWord] = useState("");

  //to remove duplicates from the random word generate to copare to the correct guesses array to determine the win condition
  const randomwordArray = randomWord.split("");
  const randomWordNoDuplicates = [...new Set(randomwordArray)];

  //to reset state to default values
  const resetHandler = () => {
    setCorrectGuesses([]);
    setincorrectGuesses([]);
    setincorrectGuessCount(0);
    setGameWon(false);
    setGameLost(false);

    setRandomWord(randomWords());
  };

  //to generate the initial random word
  useEffect(() => {
    setRandomWord(randomWords());
  }, []);

  //to set the game to won if the correct guesses is equal to the length of the random word without duplicate letters
  //To set the game as lost if the incorrect guesses is 10
  useEffect(() => {
    if (
      randomWord !== "" &&
      correctGuesses.length === randomWordNoDuplicates.length
    ) {
      setGameWon(true);
    }
    if (incorrectGuessCount === 10) {
      setGameLost(true);
    }
  }, [correctGuesses, incorrectGuessCount, randomWord]);

  //when a letter is clicked, add to correct guesses if letter matches one in the random word. Add to incorrect guesses if letter doesn't match any in the random word
  const handleClick = (event) => {
    const guess = event.target.textContent.toLowerCase();

    if (randomWord.includes(guess)) {
      setCorrectGuesses([...correctGuesses, guess]);
    } else {
      setincorrectGuesses([...incorrectGuesses, guess]);
      setincorrectGuessCount(incorrectGuessCount + 1);
    }
  };

  return (
    <GameContext.Provider
      value={{
        gameWon: gameWon,
        gameLost: gameLost,
        onAlphabetClick: handleClick,
        generateWord: randomWord,
        correctGuesses: correctGuesses,
        incorrectGuessCount: incorrectGuessCount,
        incorrectGuesses: incorrectGuesses,
        show: show,
        onModalShow: handleShow,
        onModalClose: handleClose,
        onReset: resetHandler,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContext;
