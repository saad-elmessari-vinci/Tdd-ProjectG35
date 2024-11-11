import { Main } from "../src/berlinClock.js";

describe("SingleMinutesRow function should return the answer ", function () {
  const main = new Main();

  it("Should return 'OOOO' for 0 minute", function () {
    let result = main.singleMinutesRow(0);

    expect(result).toBe("OOOO");
  });

  it("Should return 'YOOO' for 1 minute", function () {
    let result = main.singleMinutesRow(1);

    expect(result).toBe("YOOO");
  });

  it("Should return 'YYOO' for 2 minutes", function () {
    let result = main.singleMinutesRow(2);

    expect(result).toBe("YYOO");
  });
});
