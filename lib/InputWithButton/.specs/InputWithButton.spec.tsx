import { describe, expect, it } from "vitest";

import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import InputWithButton from "..";

describe("InputWithButton", () => {
  it("can change the button text after clicking", () => {
    render(
      <InputWithButton
        // @ts-expect-error no overload matches this call
        inputId="input"
        buttonId="button"
        value="Hello"
        buttonText="Click me"
        buttonTextAfterClick="Ouchy"
        onClick={() => {}}
      />
    );
    expect(screen.queryByText("Ouchy")).toBeFalsy();
    fireEvent.click(screen.getByText("Click me"));
    expect(screen.queryByText("Click me")).toBeFalsy();
    expect(screen.getByText("Ouchy"));
  });

  it("can add a small modifier", () => {
    const { rerender } = render(
      <InputWithButton
        // @ts-expect-error no overload matches this call
        inputId="input"
        buttonId="button"
        value="Hello"
        buttonText="Clicky"
      />
    );
    let wrapper = screen.getByText("Clicky").parentNode as HTMLElement;
    expect(
      wrapper.classList.contains("gui-input-with-button--padding-small")
    ).toBeFalsy();

    rerender(
      <InputWithButton
        // @ts-expect-error no overload matches this call
        inputId="input"
        buttonId="button"
        value="Hello"
        buttonText="Clicky"
        paddingSmall
      />
    );

    screen.getByText("Clicky").parentNode as HTMLElement;
    expect(
      wrapper.classList.contains("gui-input-with-button--padding-small")
    ).toBeTruthy();
  });
});
