export const numberOfRows = 20;
export const numberOfColumns = 10;

export const createShape = () => {
  return Array.from(Array(numberOfRows), () => {
    return new Array(numberOfColumns).fill([0, "clear", "0,0,0"]);
  });
};
