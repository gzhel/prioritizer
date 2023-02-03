const { prioritize } = require("./prioritize");

describe("Prioritize tests", () => {
  it("Prioritize array of strings", () => {
    expect(prioritize(['a', 'b', 'c', 'd', 'c', 'c', 'a'])).toEqual({
      'a': 2,
      'b': 1,
      'c': 3,
      'd': 1
    });
  });
  
  it("Prioritize array of numbers", () => {
    expect(prioritize([-1, 1, 2, 3, 4, 3, 3, 1, NaN])).toEqual({
      '-1': 1,
      '1': 2,
      '2': 1,
      '3': 3, // happy number
      '4': 1,
      'NaN': 1,
    });
  });

  it("Prioritize array of booleans", () => {
    expect(prioritize([true, false, true, false, true])).toEqual({
      'true': 3,
      'false': 2,
    });
  });

  it("Prioritize array of custom elements", () => {
    expect(prioritize([1, '1', 'a', NaN, 2, true, null, undefined])).toEqual({
      '1': 2,
      '2': 1,
      'a': 1,
      'NaN': 1,
      'true': 1,
      'null': 1,
      'undefined': 1,
    });
  });
});