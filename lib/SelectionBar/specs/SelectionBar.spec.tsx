import { describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
// @ts-expect-error TS(2307): Cannot find module 'lib/SelectionBar' or its corre... Remove this comment to see the full error message
import SelectionBar from "lib/SelectionBar";
import React from "react";

describe("SelectionBar", () => {
  const renderWrapper = (ui: any, props = {}) =>
    render(
      <SelectionBar hasSelected onCancel={() => {}} {...props}>
        {ui}
      </SelectionBar>
    );

  afterEach(() => {
    cleanup();
  });

  it("rendering children", () => {
    const { getByText } = renderWrapper(
      <SelectionBar.Actions>Actions</SelectionBar.Actions>
    );

    expect(getByText(/Actions/i)).toBeInTheDocument();
  });
});
