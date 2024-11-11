import { Main } from "../src/berlinClock.js";


describe("Single Minutes Row", function () {
  it("Should return 'OOOO' for 0 minute", function () {
    const main = new Main();

    let result =main.singleMinutesRow(0);

    expect(result).toBe("OOOO");
  });
});
