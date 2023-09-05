import { describe, expect, it, vi } from "vitest";

import React from "react";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Guideline from "..";

describe("Guideline", () => {
  vi.spyOn(Element.prototype, "getBoundingClientRect").mockImplementation(
    () => ({
      height: 50,
      width: 200,
      x: 100,
      y: 100,
      bottom: 100,
      left: 100,
      right: 100,
      top: 100,
      toJSON: () => {},
    })
  );

  afterAll(() => vi.restoreAllMocks());

  it("toggles the display of the guidelines body", async () => {
    render(
      <Guideline title="Well howdy partner">
        <p data-testid="guideline-body-child">Why dont you just mosey on in</p>
      </Guideline>
    );
    let guidelineBody = screen.getByTestId("guideline-body-child")
      .parentNode as HTMLElement;

    expect(guidelineBody.style.maxHeight).toEqual("50px");

    fireEvent.click(screen.getByText("Hide guidelines"));

    expect(guidelineBody.style.maxHeight).toEqual("");

    fireEvent.click(screen.getByText("Show guidelines"));

    expect(screen.getByText("Well howdy partner"));
    expect(screen.getByText("Why dont you just mosey on in"));

    await waitFor(() => {
      expect(guidelineBody.style.maxHeight).toEqual("50px");
    });
  });

  it("wont show the toggle if there's no children", async () => {
    render(<Guideline title="Well howdy partner, nothing more to see here" />);

    expect(screen.getByText("Well howdy partner, nothing more to see here"));
    expect(screen.queryByText("Hide guidelines")).toBeFalsy();
    expect(screen.queryByText("Show guidelines")).toBeFalsy();
  });
});
