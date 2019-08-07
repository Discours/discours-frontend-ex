import { is, up } from "./breakpoints";

const breakpoints = {
  xs: 0,
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

describe("is", () => {
  it("should return true for a first breakpoint", () => {
    expect(is(breakpoints)(["xs"], 5)).toBe(true);
  });

  it("should return false for a false breakpoint", () => {
    expect(is(breakpoints)(["xs"], 15)).toBe(false);
  });

  it("should return false for another false breakpoint", () => {
    expect(is(breakpoints)(["sm"], 35)).toBe(false);
  });

  it("should return true for a true breakpoint", () => {
    expect(is(breakpoints)(["sm"], 15)).toBe(true);
  });

  it("should return false for the last breakpoint and wrong width", () => {
    expect(is(breakpoints)(["xl"], 30)).toBe(false);
  });

  it("should return true for the last breakpoint", () => {
    expect(is(breakpoints)(["xl"], 150)).toBe(true);
  });

  it("should work inclusive on the min width", () => {
    expect(is(breakpoints)(["sm"], 10)).toBe(true);
  });

  it("should work non-inclusive on the max width", () => {
    expect(is(breakpoints)(["sm"], 20)).toBe(false);
  });

  it("should work for second element in array", () => {
    expect(is(breakpoints)(["sm", "lg"], 35)).toBe(true);
  });

  it("should return false if both elements in array are false", () => {
    expect(is(breakpoints)(["sm", "md"], 35)).toBe(false);
  });
});

describe("up", () => {
  it("should should work inclusive", () => {
    expect(up(breakpoints)("xs", 0)).toBe(true);
    expect(up(breakpoints)("xs", 5)).toBe(true);
  });

  it("should should return true if width from next breakpoint is provided", () => {
    expect(up(breakpoints)("xs", 105)).toBe(true);
  });
});
