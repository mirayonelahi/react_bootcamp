import Square from "./Square";
export default function Board({ squares, onClick }) {
  const style = {
    border: "4px solid darkblue",
    borderRadius: "10px",
    width: "250px",
    height: "250px",
    margin: "15px auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"
  };

  const squareElem = squares.map((square, i) => {
    return <Square key={i} value={square} onClick={() => onClick(i)} />;
  });

  return (
    <>
      <div style={style}>{squareElem}</div>
    </>
  );
}
