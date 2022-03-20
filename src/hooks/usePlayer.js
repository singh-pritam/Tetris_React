import React, { useCallback, useState } from "react";
import { numberOfColumns, numberOfRows } from "../BoardShape";
import { checkCollision } from "../CollisionDetection";

import { randTetrominos, Tetrominos } from "../Tetrominos";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetramino: Tetrominos[0],
    collided: false,
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => {
      return {
        ...prev,
        pos: { x: prev.pos.x + x, y: prev.pos.y + y },
        collided,
      };
    });
  };

  const rotate = (tetromino_shape, dir) => {
    const rotateTetromino = tetromino_shape.map((_, index) => {
      return tetromino_shape.map((col) => col[index]);
    });
    if (dir > 0) return rotateTetromino.map((row) => row.reverse());

    return rotateTetromino.reverse();
  };

  const playerRotate = (board, dir) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetramino.shape = rotate(clonedPlayer.tetramino.shape, dir);
    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, board, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetramino.shape[0].length) {
        rotate(clonedPlayer.tetramino.shape, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }
    setPlayer(clonedPlayer);
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: numberOfColumns / 2 - 1, y: 0 },
      tetramino: randTetrominos(),
      collided: false,
    });
  }, []);
  return [player, updatePlayerPos, resetPlayer, playerRotate];
};
