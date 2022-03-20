export const checkCollision = (player, board, { x: moveX, y: moveY }) => {
  console.log(player);
  for (let y = 0; y < player.tetramino.shape.length; y += 1) {
    for (let x = 0; x < player.tetramino.shape[y].length; x += 1) {
      if (player.tetramino.shape[y][x] !== 0) {
        if (
          !board[y + player.pos.y + moveY] ||
          !board[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          board[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
