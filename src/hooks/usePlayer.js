import React, { useCallback, useState } from "react";
import { numberOfColumns, numberOfRows } from "../BoardShape";

import { randTetrominos } from "../Tetrominos";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetramino: randTetrominos().shape,
    collided: false,
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => {
      return {
        ...prev,
        pos: { x: prev.pos.x + x, y: (prev.pos.y += y) },
        collided,
      };
    });
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: numberOfColumns / 2 - 1, y: 0 },
      tetramino: randTetrominos().shape,
      collided: false,
    });
  }, []);
  return [player, updatePlayerPos, resetPlayer];
};
