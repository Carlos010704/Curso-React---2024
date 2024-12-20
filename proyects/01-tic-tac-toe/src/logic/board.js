import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardTocheck) => {
  for (const combo of WINNER_COMBOS) {
    // Revisamos las combinaciones disponibles
    const [a, b, c] = combo;

    if (
      boardTocheck[a] &&
      boardTocheck[a] == boardTocheck[b] &&
      boardTocheck[a] == boardTocheck[c]
    ) {
      return boardTocheck[a]; // Retornamos el ganador
    }
  }
  return null; // En caso que no haya ganador
};

export const checkEndGame = (newBoard) => {
  // Al llenar completamente el tablero, y no tener ganador
  return newBoard.every((square) => square !== null);
};
