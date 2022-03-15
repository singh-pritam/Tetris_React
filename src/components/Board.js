import React, { useState } from "react";
import { createShape } from "../BoardShape";
import SquareBox from "./SquareBox";
import "./Board.css";
import { usePlayer } from "../hooks/usePlayer";
import { useBoard } from "../hooks/useBoard";
import { randTetrominos } from "../Tetrominos";
import uuid from "react-uuid";

function Board() {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [board, setBoard] = useBoard(player, resetPlayer);

  const movePlayer = (dir) => {
    updatePlayerPos({ x: dir, y: 0 });
  };

  const startGame = () => {
    setBoard(createShape());
    resetPlayer();
  };

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false });
  };

  const dropPlayer = () => {
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) movePlayer(-1);
      else if (keyCode === 39) movePlayer(-1);
      else if (keyCode === 40) dropPlayer();
    }
  };

  return (
    <div className="board">
      {board.map((row, i) =>
        row.map((box, j) => <SquareBox key={uuid()} color={box[2]} />)
      )}
      <button onClick={startGame}>Start</button>
      {console.log(player.pos)}
    </div>
  );
}

export default Board;
