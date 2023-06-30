import * as constants from "../lib/constants";

describe("Constants", () => {
  test("exports animation constants", () => {
    expect(constants.ANIMATION_TIME_LONG).toEqual(3000);

    expect(constants.ANIMATION_TIME_MICRO).toEqual(300);
  });
});
