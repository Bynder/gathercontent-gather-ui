import { describe, expect, it, vi } from "vitest";

import React from "react";

import { fireEvent, getByText, render, screen } from "@testing-library/react";
import NotificationBar from "../bar";

describe("NotificationBar", () => {
  it("renders the correct level class", () => {
    const { rerender } = render(
      <NotificationBar>I'm notifying you!</NotificationBar>
    );
    expect(screen.getByText("I'm notifying you!"));
    expect(screen.queryByTitle("Close notification")).toEqual(null);

    expect(screen.getByRole("button").classList.contains("bg-yellow-primary"));

    rerender(
      <NotificationBar level="danger">I'm notifying you!</NotificationBar>
    );
    expect(screen.getByRole("button").classList.contains("bg-red-primary"));

    rerender(
      <NotificationBar level="information">I'm notifying you!</NotificationBar>
    );
    expect(screen.getByRole("button").classList.contains("bg-blue-primary"));

    rerender(
      <NotificationBar level="promo">I'm notifying you!</NotificationBar>
    );
    expect(screen.getByRole("button").classList.contains("bg-purple-primary"));
  });

  it("adds a close button", () => {
    const onClose = vi.fn();
    render(
      <NotificationBar onClose={onClose}>I'm notifying you!</NotificationBar>
    );
    fireEvent.click(screen.getByTitle("Close notification"));
    expect(onClose).toHaveBeenCalled();
  });
});
