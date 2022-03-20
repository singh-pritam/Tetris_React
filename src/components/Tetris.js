import React, { useState } from "react";
import { createShape } from "../BoardShape";
import SquareBox from "./SquareBox";
import "./Tetris.css";
import { usePlayer } from "../hooks/usePlayer";
import { useBoard } from "../hooks/useBoard";
import uuid from "react-uuid";
import { checkCollision } from "../CollisionDetection";
import { useInterval } from "../hooks/useInterval";
import { useGameStatus } from "../hooks/useGameStatus";

function Board() {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [board, setBoard, clearedRows] = useBoard(player, resetPlayer);
  const [score, setScore, level, setLevel, rows, setRows] =
    useGameStatus(clearedRows);

  const movePlayer = (dir) => {
    if (!checkCollision(player, board, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    setBoard(createShape());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  const drop = () => {
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      setDropTime(1000 / (level + 1) + 200);
    }

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
      if (keyCode === 37) movePlayer(-1);
      else if (keyCode === 39) movePlayer(1);
      else if (keyCode === 40) dropPlayer();
      else if (keyCode === 38) playerRotate(board, 1);
    }
  };

  const gameStatus = () => {
    if (gameOver) return "Game Over";

    return "Score: " + score;
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <div className="screen" onKeyDown={(e) => move(e)}>
      <div className="board">
        {board.map((row, i) =>
          row.map((box, j) => <SquareBox key={uuid()} color={box[2]} />)
        )}
      </div>
      <div className="left_screen">
        <button onClick={startGame} className="start_button">
          Start
        </button>
        <div className="display">{gameStatus()}</div>
        <div className="display">Level: {level}</div>
      </div>
    </div>
  );
}

export default Board;
