class Ship {
  constructor(length) {
    this.length = length;
    this.hitsTaken = 0;
    this.sunk = false;
  }
  hit() {
    this.hitsTaken++;
    return this.hitsTaken;
  }
  isSunk() {
    if (this.hitsTaken == this.length) {
      this.sunk = true;
    }
    return this.sunk;
  }
}

export default Ship;
