import { describe, expect, it, vi } from "vitest";

import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import Dropdown from "..";

describe("Dropdown", () => {
  it("Displays the dropdown content", () => {
    const onToggleSpy = vi.fn();
    const onHideSpy = vi.fn();
    const actionSpy = vi.fn();

    render(
      <>
        <Dropdown onToggle={onToggleSpy} onHide={onHideSpy} id="id-1">
          <Dropdown.Trigger>Trigger 1</Dropdown.Trigger>
          <Dropdown.Content data-testid="test-dropdown-content">
            <Dropdown.ActionGroup>
              <Dropdown.Action action={actionSpy}>Howdy</Dropdown.Action>
            </Dropdown.ActionGroup>
          </Dropdown.Content>
        </Dropdown>
        <div>We outside</div>
      </>
    );

    expect(
      screen
        .getByTestId("test-dropdown-content")
        .classList.contains("gui-is-active")
    ).toBeFalsy();

    fireEvent.click(screen.getByText("Trigger 1"));

    expect(onToggleSpy).toHaveBeenCalledOnce();

    expect(
      screen
        .getByTestId("test-dropdown-content")
        .classList.contains("gui-is-active")
    ).toBeTruthy();

    fireEvent.click(screen.getByText("Howdy"));

    expect(actionSpy).toHaveBeenCalledOnce();

    fireEvent.click(screen.getByText("We outside"));

    expect(
      screen
        .getByTestId("test-dropdown-content")
        .classList.contains("gui-is-active")
    ).toBeFalsy();
  });

  it("Persists the active state when the external show prop is true", () => {
    render(
      <>
        <Dropdown onToggle={() => {}} onHide={() => {}} id="id-1" persistShow>
          <Dropdown.Trigger>Trigger 1</Dropdown.Trigger>
          <Dropdown.Content data-testid="test-dropdown-content">
            <Dropdown.ActionGroup>
              <Dropdown.Action action={() => {}}>Howdy</Dropdown.Action>
            </Dropdown.ActionGroup>
          </Dropdown.Content>
        </Dropdown>
        <div>We outside</div>
      </>
    );

    fireEvent.click(screen.getByText("Trigger 1"));

    expect(
      screen
        .getByTestId("test-dropdown-content")
        .classList.contains("gui-is-active")
    ).toBeTruthy();

    fireEvent.click(screen.getByText("We outside"));

    expect(
      screen
        .getByTestId("test-dropdown-content")
        .classList.contains("gui-is-active")
    ).toBeTruthy();
  });
});
