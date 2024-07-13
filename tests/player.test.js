import Ship from "../modules/ship";
import Gameboard from "../modules/gameboard";
import Player from "../modules/player";

test("Player Creation", () => {
  let player = new Player();
  let gameboard = new Gameboard();
  expect(player).toEqual({ gameboard });
});
