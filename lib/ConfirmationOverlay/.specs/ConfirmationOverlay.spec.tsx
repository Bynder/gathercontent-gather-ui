import { describe, expect, vi } from "vitest";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import ConfirmationOverlay from "../";

describe("Confirmation Overlay", () => {
  const cancelSpy = vi.fn();
  const confirmSpy = vi.fn();

  test("adds a show modifier", () => {
    const { rerender } = render(
      <ConfirmationOverlay
        cancel={cancelSpy}
        confirm={confirmSpy}
        confirmationText="dooo ittttt"
        show
        data-testid="confirmation-overlay"
      />
    );

    expect(
      screen
        .getByTestId("confirmation-overlay")
        .classList.contains("confirmation-overlay--show")
    ).toBeTruthy();

    rerender(
      <ConfirmationOverlay
        cancel={cancelSpy}
        confirm={confirmSpy}
        confirmationText="dooo ittttt"
        data-testid="confirmation-overlay"
      />
    );

    expect(
      screen
        .getByTestId("confirmation-overlay")
        .classList.contains("confirmation-overlay--show")
    ).toBeFalsy();
  });

  test("renders two Buttons", () => {
    render(
      <ConfirmationOverlay
        cancel={cancelSpy}
        confirm={confirmSpy}
        confirmationText="dooo ittttt"
        show
        data-testid="confirmation-overlay"
      />
    );

    const cancelButton = screen.getByText("Cancel");
    const submitButton = screen.getByLabelText(/Submit/i);

    fireEvent.click(cancelButton);
    expect(cancelSpy).toHaveBeenCalled();

    fireEvent.click(submitButton);
    expect(confirmSpy).toHaveBeenCalled();
  });
});
