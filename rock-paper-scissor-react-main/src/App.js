import "./styles.css";
import React, { useEffect } from "react";

export default function App() {
  const choices = ["rock", "paper", "scissor"];
  const [userInput, setUserInput] = React.useState("");
  const [pcInput, setPcInput] = React.useState("");
  const [game, setGame] = React.useState(0);
  const [whoWon, setWhowon] = React.useState("");
  const [gameData, setGameData] = React.useState({
    pcWon: 0
  });
  const handleClick = (value) => {
    setUserInput(value);
    setPcInput(computerPlay());
    setGame((prev) => prev + 1);
  };

  useEffect(() => {
    endGame();
  }, [userInput, pcInput]);

  const endGame = () => {
    setWhowon(playRound(userInput, pcInput));
  };

  const computerPlay = () => {
    let gameValue = ["rock", "paper", "scissor"];
    let randValue = Math.floor(Math.random() * 3);
    return gameValue[randValue];
  };

  const playRound = (playerSelection, computerSelection) => {
    console.log(playerSelection, computerSelection);
    if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        return "pc won";
      }
      if (computerSelection === "scissor") {
        return "player won ";
      } else {
        return "tie";
      }
    }

    if (playerSelection === "paper") {
      if (computerSelection === "scissor") {
        return "pc won";
      }
      if (computerSelection === "rock") {
        return "player won ";
      } else {
        return "tie";
      }
    }

    if (playerSelection === "scissor") {
      if (computerSelection === "paper") {
        return "player won";
      }
      if (computerSelection === "rock") {
        return "pc won ";
      } else {
        return "tie";
      }
    }
  };

  return (
    <div className="App">
      <h1>Rock-Paper-Scissor</h1>
      <h1> Game no: {game} </h1>

      {choices.map((choice) => (
        <button onClick={() => handleClick(choice)}> {choice} </button>
      ))}

      {!!userInput && <h1> You played: {userInput} </h1>}

      {!!whoWon && <h1> Computer played: {pcInput} </h1>}

      {!!pcInput && <h1> won by : {whoWon} </h1>}
    </div>
  );
}
