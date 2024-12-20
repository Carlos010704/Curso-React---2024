// Guardamos la partida y el turno
export const  saveGame = ({ newBoard, newTurn }) => {
  window.localStorage.setItem("board", JSON.stringify(newBoard));
  window.localStorage.setItem("turn", newTurn);
}

// Eliminamos la partida guardada y eliminados el turno
export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }