import Ship from "../modules/ship";
import Gameboard from "../modules/gameboard";

describe("Gameboard Implementation", () => {
  let gameboard = new Gameboard();
  test("Ships creation", () => {
    let carrier = new Ship(5);
    let battleship = new Ship(4);
    let destroyer = new Ship(3);
    let submarine = new Ship(3);
    let patrolBoat = new Ship(2);
    expect(gameboard.carrier).toEqual(carrier);
    expect(gameboard.battleship).toEqual(battleship);
    expect(gameboard.destroyer).toEqual(destroyer);
    expect(gameboard.submarine).toEqual(submarine);
    expect(gameboard.patrolBoat).toEqual(patrolBoat);
  });
});
