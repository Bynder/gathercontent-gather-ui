import { describe, expect, it } from "vitest";

import React from "react";

import { render, screen } from "@testing-library/react";
import LoadingOverlay from "..";

describe("LoadingOverlay", () => {
  it("can optionally load the svg", () => {
    const { rerender } = render(<LoadingOverlay />);
    expect(screen.getByTitle("Loading"));

    rerender(<LoadingOverlay hideSVG />);

    expect(screen.queryByTitle("Loading")).toBeFalsy();
  });

  it("can optionally load a fixed modifier", () => {
    const { rerender } = render(<LoadingOverlay />);
    expect(
      screen
        .getByRole("status")
        .classList.contains("gui-loading-overlay--fixed")
    ).toBeFalsy();

    rerender(<LoadingOverlay fixed />);

    expect(
      screen
        .getByRole("status")
        .classList.contains("gui-loading-overlay--fixed")
    ).toBeTruthy();
  });

  it("can optionally load text and a loading percentage", () => {
    const loadingText = "Gathering flumps";
    const loadingPercentage = 25;
    const { rerender } = render(<LoadingOverlay />);
    expect(screen.queryByText(loadingText)).toBeFalsy();
    expect(screen.queryByText(`${loadingPercentage}%`)).toBeFalsy();

    rerender(
      <LoadingOverlay
        percentageLoaded={loadingPercentage}
        loadingText={loadingText}
      />
    );

    expect(screen.getByText(loadingText));
    expect(screen.getByText(`${loadingPercentage}%`));
  });
});
