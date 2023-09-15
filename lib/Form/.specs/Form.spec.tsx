import { describe, expect, it, vi } from "vitest";

import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import Form from "..";
import { Input } from "../../src/modules/input/Input";

describe("Form", () => {
  it("renders a form that calls onSubmit", () => {
    const onSubmit = vi.fn();
    render(
      <Form onSubmit={onSubmit} aria-label="form">
        <Input />
      </Form>
    );
    expect(onSubmit).not.toHaveBeenCalled();
    fireEvent.submit(screen.getByRole("form"));
    expect(onSubmit).toHaveBeenCalled();
  });

  it("calls onCancel on esc key down", () => {
    const onCancel = vi.fn();
    render(
      <Form onCancel={onCancel} aria-label="form" escToClose>
        <Input />
      </Form>
    );
    expect(onCancel).not.toHaveBeenCalled();
    fireEvent.keyDown(screen.getByRole("form"), { keyCode: 27 });
    expect(onCancel).toHaveBeenCalled();
  });
});
