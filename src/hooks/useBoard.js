import React, { useState, useEffect } from "react";
import { createShape } from "../BoardShape";
import { randTetrominos } from "../Tetrominos";

export const useBoard = (player, resetPlayer) => {
  const [board, setBoard] = useState(createShape());

  useEffect(() => {
    const updateBoard = (prevBoard) => {
      const newBoard = prevBoard.map((row) =>
        row.map((cell) => (cell[1] == "clear" ? [0, "clear", "0,0,0"] : cell))
      );

      //Draw tetromino
      let color = randTetrominos().color;
      player.tetramino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newBoard[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`,
              color,
            ];
          }
        });
      });

      if (player.collided) {
        resetPlayer();
      }
      return newBoard;
    };

    setBoard((prev) => updateBoard(prev));
  }, [player, resetPlayer]);

  return [board, setBoard];
};
