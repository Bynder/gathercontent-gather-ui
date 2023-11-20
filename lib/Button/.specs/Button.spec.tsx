import { describe, expect, it } from "vitest";

import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import Button from "../index";

describe("Button", () => {
  it("Can have different classnames depending on the type", () => {
    const { rerender } = render(<Button>Botão</Button>);

    expect(
      screen.getByRole("button").classList.contains("gui-button--primary")
    ).toBeTruthy();

    rerender(<Button types={["collapsed"]}>Botão</Button>);

    expect(
      screen.getByRole("button").classList.contains("gui-button--collapsed")
    ).toBeTruthy();
  });

  it("Can be a regular button or a submit button", () => {
    const { rerender } = render(<Button>Botão</Button>);

    expect(screen.getByRole("button").getAttribute("type")).toEqual("button");

    rerender(<Button isSubmit>Botão</Button>);

    expect(screen.getByRole("button").getAttribute("type")).toEqual("submit");
  });

  it("Should have the disabled attribute when clicked if props.disableOnClick is true", () => {
    const { rerender } = render(<Button>Botão</Button>);

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByRole("button").hasAttribute("disabled")).toBeFalsy();

    rerender(<Button disableOnClick>Botão</Button>);

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByRole("button").hasAttribute("disabled")).toBeTruthy();
  });
});
