import { useState } from "react";
import { WINNING_COMBINATIONS } from "../winning-combinations";

import Player from "../components/Player";
import GameBoard from "../components/GameBoard";
import Log from "../components/Log";
import GameOver from "../components/GameOver";

const PLAYERS = { X: "Player 1", O: "Player 2" };
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function changeActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns[0]?.player === "X") currentPlayer = "O";
  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  const gameBoard = [...INITIAL_GAME_BOARD.map((innerArr) => [...innerArr])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    )
      winner = players[firstSquareSymbol];
  }
  return winner;
}

function App() {
  const [players, setPlayers] = useState({ ...PLAYERS });
  const [gameTurns, setTurns] = useState([]);

  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const activePlayer = changeActivePlayer(gameTurns);
  const isDraw = gameTurns.length >= 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((previousPlayer) => (previousPlayer === "X" ? "O" : "X"));
    setTurns((prevTurns) => {
      const currentPlayer = changeActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function handleRestart() {
    setTurns([]);
    setPlayers({ ...PLAYERS });
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newName };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            name={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || isDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectBox={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
