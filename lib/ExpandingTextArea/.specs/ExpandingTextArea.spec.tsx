import { describe, expect, it, vi } from "vitest";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { ExpandingTextArea } from "..";

describe("ExpandingTextArea", () => {
  const originalscrollHeight = Object.getOwnPropertyDescriptor(
    Element.prototype,
    "scrollHeight"
  );
  afterAll(() => {
    vi.restoreAllMocks();
    Object.defineProperty(
      Element.prototype,
      "scrollHeight",
      originalscrollHeight
    );
  });

  it("renders a textarea hooked up to event handler props", () => {
    const handleOnChange = vi.fn();
    const handleOnFocus = vi.fn();
    const handleOnBlur = vi.fn();
    render(
      <ExpandingTextArea
        handleOnChange={handleOnChange}
        handleOnFocus={handleOnFocus}
        handleOnBlur={handleOnBlur}
      />
    );

    expect(screen.getByRole("textbox").getAttribute("rows")).toEqual("1");

    fireEvent.focus(screen.getByRole("textbox"));
    expect(handleOnFocus).toHaveBeenCalled();
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "well hi!" },
    });
    expect(handleOnChange).toHaveBeenCalled();
    fireEvent.blur(screen.getByRole("textbox"));
    expect(handleOnBlur).toHaveBeenCalled();
  });

  it("calculates the row height", () => {
    Object.defineProperty(Element.prototype, "scrollHeight", {
      configurable: true,
      value: 500,
    });

    vi.spyOn(window, "getComputedStyle").mockImplementation(() => ({
      paddingTop: 5,
      paddingBottom: 5,
      lineHeight: 16,
    }));

    render(<ExpandingTextArea handleOnChange={() => {}} value="beep" />);
    expect(screen.getByRole("textbox").getAttribute("rows")).toEqual("30");
  });
});
