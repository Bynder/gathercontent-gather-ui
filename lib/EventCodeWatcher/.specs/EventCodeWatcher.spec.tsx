import { describe, expect, it, vi } from "vitest";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import EventCodeWatcher from "..";

describe("EventCodeWatcher", () => {
  it("detects when the passed keycode has been pressed", () => {
    const onKeyCodePress = vi.fn();
    render(
      <>
        <EventCodeWatcher
          eventName="keydown"
          onKeyCodePress={onKeyCodePress}
          keyCode={30}
        />
        <div>hello!</div>
      </>
    );
    fireEvent.keyDown(screen.getByText("hello!"), { keyCode: 30 });
    expect(onKeyCodePress).toHaveBeenCalled();
  });
});
