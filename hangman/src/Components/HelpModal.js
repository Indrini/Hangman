import { useContext } from "react";
import "./Letters.css";
import GameContext from "../store/game-context";
import "bootstrap/dist/css/bootstrap.min.css";

//importing buttons and a modal from bootstrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function HelpModal() {
  const ctx = useContext(GameContext);
  return (
    <>
      {/* This is a modal to show the rules for the game */}

      <Modal show={ctx.show} onHide={ctx.onModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Game Rules</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <ul className="modalList">
            <li>Guess the word by clicking a displayed letter </li>
            <li>The number of pink squares indicates the length of the word</li>
            <li>
              If you click on a correct letter, the letter position is revealed
            </li>
            <li>
              If you click on an incorrect letter, a part of the hangman is
              drawn
            </li>
            <li>If you guess all the letters correctly you win</li>
            <li>After 10 incorrect guesses you lose </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ctx.onModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HelpModal;
