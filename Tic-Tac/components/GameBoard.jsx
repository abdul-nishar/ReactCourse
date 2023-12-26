/* eslint-disable */
export default function GameBoard({ onSelectBox, board }) {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleGameBoard(rowIndex, columnIndex) {
  //     setGameBoard((previousGameBoard) => {
  //       const updatedBoard = [
  //         ...previousGameBoard.map((element) => [...element]),
  //       ];
  //       updatedBoard[rowIndex][columnIndex] = activePlayerSymbol;
  //       return updatedBoard;
  //     });
  //     onSelectBox();
  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button
                  onClick={() => onSelectBox(rowIndex, columnIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
