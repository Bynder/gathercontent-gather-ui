import { describe, expect, it, vi } from "vitest";
import { keepValueWithinRange, toPixels } from "../helpers";

describe("helpers: toPixels", () => {
  it("should not convert arguments of type number", () => {
    expect(toPixels(100)).toBe(100);
  });

  it("should convert pixels to number", () => {
    expect(toPixels(`100px`)).toBe(100);
  });

  it("should convert percentage to number", () => {
    expect(toPixels(`100%`)).toBe(100);
  });

  it("should convert to a percentage value of the percentageOf arg", () => {
    expect(toPixels("50%", 200)).toBe(100);
  });

  it("should return number and warning for unknown units", () => {
    const warn = vi.spyOn(global.console, "warn");

    expect(toPixels("123rem")).toBe(123);
    expect(warn).toHaveBeenCalledOnce();
    expect(warn).toHaveBeenCalledWith(
      `Could not interpret a normalised value for: 123rem.\nParsing directly to integer: 123.`
    );
  });
});

describe("helpers: keepValueWithinRange", () => {
  it("should return the value if there are no other arguments", () => {
    expect(keepValueWithinRange(50)).toBe(50);
  });

  it("should return the value if it is within the range", () => {
    expect(keepValueWithinRange(50, 33, 77)).toBe(50);
  });

  it("should return the max if the value is above the max", () => {
    expect(keepValueWithinRange(11, 1, 10)).toBe(10);
  });

  it("should return the min if the value is below the min", () => {
    expect(keepValueWithinRange(0, 1, 10)).toBe(1);
  });
});
