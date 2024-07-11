import ship from "./ship";

describe("Test Ship Functions", () => {
  let Ship = new ship();

  test("shipCreation", () => {
    expect(Ship).toBe(Ship);
    expect(Ship.carrier()).toEqual({});
    expect(Ship.battleShip()).toEqual({});
    expect(Ship.destroyer()).toEqual({});
    expect(Ship.submarine()).toEqual({});
    expect(Ship.patrolBoat()).toEqual({});
  });
  test("Ships' hits", () => {
    expect(Ship.carrierHits).toBe(0);
    expect(Ship.battleShipHits).toBe(0);
    expect(Ship.destroyerHits).toBe(0);
    expect(Ship.submarineHits).toBe(0);
    expect(Ship.patrolBoatHits).toBe(0);
  });
});
