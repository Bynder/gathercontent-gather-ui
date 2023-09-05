import { describe, expect, it } from "vitest";

import React from "react";

import { render, screen } from "@testing-library/react";

import Checkbox from "../Checkbox";

describe("Checkbox", () => {
  it("renders a checkbox", () => {
    // @ts-expect-error TS(2709): Cannot use namespace 'Checkbox' as a type.
    render(<Checkbox id="123" label="Check me out" name="input name" />);
    expect(screen.getByLabelText("Check me out").getAttribute("type")).toEqual(
      "checkbox"
    );
  });
});
