const { prioritize } = require("./index");

describe("Prioritizer tests", () => {
  it("Prioritize array of strings", () => {
    expect(add(2, 2)).toBe(4);
  });
  
  it("Prioritize array of numbers", () => {
    expect(subtract(2, 2)).toBe(0);
  });
  
  it("Prioritize array of booleans", () => {
    expect(divide(2, 2)).toBe(1);
  });
  
  it("Prioritize array of custom elements", () => {
    expect(multiply(2, 2)).toBe(4);
  });
});