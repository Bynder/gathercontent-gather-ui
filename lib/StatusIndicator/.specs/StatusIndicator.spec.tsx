import { describe, expect, it } from "vitest";

import React from "react";

import { render, screen } from "@testing-library/react";

import StatusIndicator from "..";

const classList = [
  "gui-status-indicator--completed",
  "gui-status-indicator--collapsed",
  "gui-status-indicator--bordered",
  "gui-status-indicator--small",
  "gui-status-indicator--medium",
  "gui-status-indicator--soft-label",
  "gui-status-indicator--read-only",
  "gui-status-indicator--row",
];

describe("StatusIndicator", () => {
  it("adds the modifer classes", () => {
    const { rerender } = render(
      <StatusIndicator data-testid="status-indicator" />
    );

    let statusIndicator = screen.getByTestId("status-indicator");

    classList.map((modifierClass) => {
      expect(statusIndicator.classList.contains(modifierClass)).toBe(false);
    });

    rerender(
      <StatusIndicator
        data-testid="status-indicator"
        completed
        collapsed
        bordered
        small
        medium
        softLabel
        readOnly
        row
      />
    );
    statusIndicator = screen.getByTestId("status-indicator");

    classList.map((modifierClass) => {
      expect(statusIndicator.classList.contains(modifierClass)).toBeTruthy();
    });
  });
});
