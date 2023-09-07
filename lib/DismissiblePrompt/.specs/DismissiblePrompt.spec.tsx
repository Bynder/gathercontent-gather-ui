import { describe, expect, it, vi } from "vitest";
import React from "react";
import DismissiblePrompt from "../";
import Button from "../../Button";

import { render, fireEvent, screen } from "@testing-library/react";

describe("DismissiblePrompt", () => {
  const onDismissSpy = vi.fn();

  test("it fires the onDismiss prop when clicking the close button", () => {
    render(
      <DismissiblePrompt onDismiss={onDismissSpy}>Yo yo</DismissiblePrompt>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(onDismissSpy).toHaveBeenCalled();
  });
});
