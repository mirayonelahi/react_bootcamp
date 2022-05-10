import Board from "./Board";
import { useState } from "react";
import { calculateWinner } from "../helpers";
export default function Game() {
  const styles = {
    width: "200px",
    margin: "20px auto"
  };

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };
  const renderMoves = () => {
    return (
      <button
        className="border-2 rounded shadow px-1 bg-blue-100 mt-2 flex hover:bg-blue-200"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Start Game
      </button>
    );
  };
  const jumpTo = () => {};

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </div>
    </>
  );
}
