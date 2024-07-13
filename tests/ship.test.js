import Ship from "../modules/ship";

describe("Ship module Test", () => {
  let carrier = new Ship(5);
  test("Object Creation", () => {
    expect(carrier).toEqual({ length: 5, hitsTaken: 0, sunk: false });
  });
  test("hit function working", () => {
    expect(carrier.hit()).toBe(1);
  });
  test("isSunk function working", () => {
    carrier.hit();
    carrier.hit();
    carrier.hit();
    carrier.hit();
    expect(carrier.isSunk()).toBe(true);
  });
});
