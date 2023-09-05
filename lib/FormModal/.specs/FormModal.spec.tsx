import { describe, expect, it, vi } from "vitest";

import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import FormModal from "..";
import { Input } from "../../src/modules/input/Input";
import { Label } from "../../src/modules/label/Label";

describe("FormModal", () => {
  const submitHandler = vi.fn();
  it("renders a modal with a form", () => {
    render(
      <FormModal
        title="FormModal example"
        submitText="Submit"
        cancelText="Cancel"
        submitHandler={submitHandler}
        show
        onHide={() => {}}
      >
        <Label htmlFor="form-modal-field-a">Field A</Label>
        <Input id="form-modal-field-a" />
      </FormModal>
    );

    expect(screen.getByText("FormModal example"));
    expect(screen.getByText("Cancel"));
    fireEvent.change(screen.getByLabelText("Field A"), {
      target: { value: "Waffles" },
    });
    fireEvent.click(screen.getByText("Submit"));
    expect(submitHandler).toHaveBeenCalled();
  });
});
