import { cleanup, render } from "@testing-library/react";
// @ts-expect-error TS(2307): Cannot find module 'lib/SelectionBar' or its corre... Remove this comment to see the full error message
import SelectionBar from "lib/SelectionBar";
// @ts-expect-error TS(2307): Cannot find module 'tests/setup' or its correspond... Remove this comment to see the full error message
import { React } from "tests/setup";

describe("SelectionBar", () => {
  const renderWrapper = (ui: any, props = {}) =>
    render(
      <SelectionBar hasSelected onCancel={() => {}} {...props}>
        // @ts-expect-error TS(18004): No value exists in scope for the
        shorthand propert... Remove this comment to see the full error message
        {ui}
      </SelectionBar>
    );

  afterEach(() => {
    cleanup();
  });

  test("rendering children", () => {
    const { getByText } = renderWrapper(
      <SelectionBar.Actions>Actions</SelectionBar.Actions>
    );

    expect(getByText(/Actions/i)).toBeInTheDocument();
  });
});
