export const Tetrominos = {
  0: {
    shape: [[0]],
    color: "0, 0, 0",
  },

  A: {
    shape: [
      [0, "A", 0, 0],
      [0, "A", 0, 0],
      [0, "A", 0, 0],
      [0, "A", 0, 0],
    ],

    color: "255, 0, 0",
  },

  B: {
    shape: [
      [0, "B", 0],
      [0, "B", 0],
      [0, "B", 0],
    ],

    color: "238, 130, 238",
  },

  C: {
    shape: [
      ["C", "C", 0],
      ["C", "C", 0],
      ["C", "C", 0],
    ],

    color: "106, 90, 205",
  },
};

export const randTetrominos = () => {
  const tetrominos = "ABC";
  const randomIndex = Math.floor(Math.random() * tetrominos.length);
  return Tetrominos[tetrominos[randomIndex]];
};
