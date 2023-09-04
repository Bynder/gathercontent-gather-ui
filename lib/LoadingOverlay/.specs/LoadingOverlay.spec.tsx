import { describe, expect, it, vi } from "vitest";

import React from "react";

import { render, screen } from "@testing-library/react";
import LoadingOverlay from "..";

describe("LoadingOverlay", () => {
  it("can optionally load the svg, text, fixed modifier, and a loading percentage", () => {
    const loadingText = "Gathering flumps";
    const loadingPercentage = 25;
    const { rerender } = render(<LoadingOverlay />);
    expect(
      screen.getByRole("status").classList.contains("loading-overlay--fixed")
    ).toBeFalsy();
    expect(screen.getByTitle("Loading"));
    expect(screen.queryByText(loadingText)).toBeFalsy();
    expect(screen.queryByText(`${loadingPercentage}%`)).toBeFalsy();

    rerender(
      <LoadingOverlay
        hideSVG
        fixed
        percentageLoaded={loadingPercentage}
        loadingText={loadingText}
      />
    );

    expect(
      screen.getByRole("status").classList.contains("loading-overlay--fixed")
    ).toBeTruthy();
    expect(screen.queryByTitle("Loading")).toBeFalsy();
    expect(screen.getByText(loadingText));
    expect(screen.getByText(`${loadingPercentage}%`));
  });
});
