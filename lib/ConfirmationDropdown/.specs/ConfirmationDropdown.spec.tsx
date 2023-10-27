import { describe, expect, it, vi } from "vitest";

import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ConfirmationDropdown from "..";

describe("ConfirmationDropdown", () => {
  it("Calls the confirmation promise and sets the correct state whilst pending", () =>
    new Promise<void>(async (done) => {
      const user = userEvent.setup();

      const createDelayedPromise = (timeout = 100) => {
        // eslint-disable-next-line no-promise-executor-return
        return new Promise((resolve) => setTimeout(resolve, timeout));
      };

      render(
        // @ts-expect-error no overload matches
        <ConfirmationDropdown
          id="confirmation-dropdown"
          confirmationText="Confirmation"
          confirmationPromise={createDelayedPromise}
          onPromiseResolve={() => {}}
          onPromiseReject={() => {}}
          onCancel={() => {}}
          onHide={() => {}}
          dropdownContent={
            <div className="gui-confirmation-dropwdown__content">
              Dropdown content
            </div>
          }
          isDanger
          className="gui-confirmation-dropdown"
          data-testid="confirmation-dropdown"
        >
          Trigger
        </ConfirmationDropdown>
      );

      await user.click(screen.getByText("Trigger"));

      expect(screen.getByText("Dropdown content"));

      await user.click(screen.getByText("Confirmation"));

      expect(screen.getByTitle("Loading icon")).toBeTruthy();

      expect(
        screen
          .getByTestId("confirmation-dropdown")
          .parentElement?.classList.contains("gui-is-pending")
      );

      setTimeout(() => {
        expect(screen.queryByTitle("Loading icon")).toBeFalsy();
        done();
      }, 110);
    }));

  it("Renders a cancel button", async () => {
    const user = userEvent.setup();

    const onCancelSpy = vi.fn();

    const onHideSpy = vi.fn();

    render(
      // @ts-expect-error no overload matches
      <ConfirmationDropdown
        id="confirmation-dropdown"
        confirmationText="Confirmation"
        confirmationPromise={() => {}}
        onPromiseResolve={() => {}}
        onPromiseReject={() => {}}
        onCancel={onCancelSpy}
        onHide={onHideSpy}
        dropdownContent={
          <div className="gui-confirmation-dropwdown__content">
            Dropdown content
          </div>
        }
        isDanger
        className="gui-confirmation-dropdown"
        data-testid="confirmation-dropdown"
      >
        Trigger
      </ConfirmationDropdown>
    );

    await user.click(screen.getByText("Trigger"));

    await user.click(screen.getByText("Cancel"));

    expect(onHideSpy).toHaveBeenCalledOnce();

    expect(onCancelSpy).toHaveBeenCalledOnce();
  });
});
