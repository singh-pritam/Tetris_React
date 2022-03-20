export const Tetrominos = {
  0: {
    shape: [[0]],
    color: "0, 0, 0",
  },

  A: {
    shape: [
      ["A", 0, 0, 0],
      ["A", 0, 0, 0],
      ["A", 0, 0, 0],
      ["A", 0, 0, 0],
    ],

    color: "255, 0, 0",
  },

  B: {
    shape: [
      ["B", 0, 0],
      ["B", 0, 0],
      ["B", "B", 0],
    ],

    color: "238, 130, 238",
  },

  C: {
    shape: [
      ["C", "C"],
      ["C", "C"],
    ],

    color: "106, 90, 205",
  },

  D: {
    shape: [
      ["D", 0, 0],
      ["D", "D", 0],
      [0, "D", 0],
    ],

    color: "85, 52, 235",
  },

  E: {
    shape: [
      ["E", "E", "E"],
      [0, "E", 0],
      [0, 0, 0],
    ],

    color: "52, 235, 107",
  },

  F: {
    shape: [
      [0, "F", 0],
      [0, "F", 0],
      ["F", "F", 0],
    ],
    color: "235, 131, 52",
  },
};

export const randTetrominos = () => {
  const tetrominos = "ABCDEF";
  const randomIndex = Math.floor(Math.random() * tetrominos.length);
  return Tetrominos[tetrominos[randomIndex]];
};
