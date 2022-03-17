import React, { useState } from "react";
import { createShape } from "../BoardShape";
import SquareBox from "./SquareBox";
import "./Board.css";
import { usePlayer } from "../hooks/usePlayer";
import { useBoard } from "../hooks/useBoard";
import { randTetrominos } from "../Tetrominos";
import uuid from "react-uuid";
import { checkCollision } from "../CollisionDetection";

function Board() {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [board, setBoard] = useBoard(player, resetPlayer);

  const movePlayer = (dir) => {
    if (!checkCollision(player, board, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    setBoard(createShape());
    console.log(board);
    resetPlayer();
    setGameOver(false);
  };

  const drop = () => {
    if (!checkCollision(player, board, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        console.log("Game Over!");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
        console.log("left");
      } else if (keyCode === 39) movePlayer(1);
      else if (keyCode === 40) dropPlayer();
      else if (keyCode === 38) {
        console.log("upper key called!");
        playerRotate(board, 1);
      }
    }
  };

  return (
    <div className="board" onKeyDown={(e) => move(e)}>
      {board.map((row, i) =>
        row.map((box, j) => <SquareBox key={uuid()} color={box[2]} />)
      )}
      <button onClick={startGame}>Start</button>
      {console.log(player.pos)}
    </div>
  );
}

export default Board;
