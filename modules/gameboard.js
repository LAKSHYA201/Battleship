import Ship from "./ship";

class Gameboard {
  constructor() {
    this.carrier = new Ship(5);
    this.battleship = new Ship(4);
    this.destroyer = new Ship(3);
    this.submarine = new Ship(3);
    this.patrolBoat = new Ship(2);
  }
}

export default Gameboard;
