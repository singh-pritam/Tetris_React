import React from "react";
import { createShape } from "../BoardShape";
import { useBoard } from "../hooks/useBoard";
import { usePlayer } from "../hooks/usePlayer";
import "./RightScreen.css";

function RightScreen() {
  const [player, , resetPlayer] = usePlayer();
  const [, setBoard] = useBoard(player, resetPlayer);
  const startGame = () => {
    console.log(player.pos);
    setBoard(createShape());
    resetPlayer();
    console.log(player.pos);
  };

  console.log(resetPlayer);
  return (
    <div className="rightScreen">
      <button className="startButton" onClick={startGame}>
        Start
      </button>
    </div>
  );
}

export default RightScreen;
