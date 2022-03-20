import { useState, useEffect, useCallback } from "react";

export const useGameStatus = (clearedRows) => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [rows, setRows] = useState(0);

  const scores = [40, 100, 300, 1200];

  const calcScore = useCallback(() => {
    if (clearedRows > 0) {
      setScore((prev) => prev + scores[clearedRows / 2 - 1] * (level + 1));
      setRows((prev) => prev + clearedRows);
    }
  }, [level, scores, clearedRows]);

  useEffect(() => {
    calcScore();
  }, [calcScore, clearedRows, score]);

  return [score, setScore, level, setLevel, rows, setRows];
};
