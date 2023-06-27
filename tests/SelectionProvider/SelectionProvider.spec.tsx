import { render, fireEvent } from "@testing-library/react";
import { React } from "../setup";
import { SelectionProvider, SelectionContext } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("SelectionProvider", () => {
  const createWrapper = (child: any) => (
    <SelectionProvider>
      // @ts-expect-error TS(2503): Cannot find namespace 'SelectionContext'.
      <SelectionContext.Consumer>{child}</SelectionContext.Consumer>
    </SelectionProvider>
  );

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it("appends a selected id", () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const childSpy = jest.fn();

    const { getByText } = render(
      createWrapper((context: any) => (
        <React.Fragment>
          <button
            type="button"
            onClick={() => context.updateSelected("7", "testType")}
          >
            Append Id
          </button>
          {childSpy(context)}
        </React.Fragment>
      ))
    );

    fireEvent.click(getByText("Append Id"));

    const resultingContext = childSpy.mock.calls[1][0];

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(resultingContext.selected).toEqual(["7"]);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(resultingContext.currentSelectedType).toEqual("testType");
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it("removes a selected id if it is already selected", () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const childSpy = jest.fn();

    const { getByText } = render(
      createWrapper((context: any) => (
        <React.Fragment>
          <button
            type="button"
            onClick={() => context.updateSelected("7", "anotherTestType")}
          >
            Click with Id
          </button>
          {childSpy(context)}
        </React.Fragment>
      ))
    );

    fireEvent.click(getByText("Click with Id"));
    fireEvent.click(getByText("Click with Id"));

    const resultingContext = childSpy.mock.calls[2][0];

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(resultingContext.selected).toEqual([]);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(resultingContext.currentSelectedType).toEqual(null);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it("sets multiple selected ids", () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const childSpy = jest.fn();

    const { getByText } = render(
      createWrapper((context: any) => (
        <React.Fragment>
          <button
            type="button"
            onClick={() =>
              context.selectMultiple(["7", "8", "9", "10"], "testType")
            }
          >
            Select Multiple
          </button>
          {childSpy(context)}
        </React.Fragment>
      ))
    );

    fireEvent.click(getByText("Select Multiple"));

    const resultingContext = childSpy.mock.calls[1][0];

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(resultingContext.selected).toEqual(["7", "8", "9", "10"]);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(resultingContext.currentSelectedType).toEqual("testType");
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it("deselects multiple ids", () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const childSpy = jest.fn();

    const { getByText } = render(
      createWrapper((context: any) => (
        <React.Fragment>
          <button
            type="button"
            onClick={() =>
              context.selectMultiple(["7", "8", "9", "10", "5", "3", "1"])
            }
          >
            Select Multiple
          </button>
          <button
            type="button"
            onClick={() =>
              context.deselectMultiple(
                ["7", "8", "9", "10", "5", "3", "1"],
                "1"
              )
            }
          >
            Deselect Multiple
          </button>
          {childSpy(context)}
        </React.Fragment>
      ))
    );

    fireEvent.click(getByText("Select Multiple"));
    fireEvent.click(getByText("Deselect Multiple"));

    const resultingContext = childSpy.mock.calls[2][0];

    expect(resultingContext.selected).toEqual([]);
    expect(resultingContext.currentSelectedType).toEqual(null);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it("clears everything", () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const childSpy = jest.fn();

    const { getByText } = render(
      createWrapper((context: any) => (
        <React.Fragment>
          <button
            type="button"
            onClick={() =>
              context.selectMultiple(["7", "8", "9", "10", "5", "3", "1"])
            }
          >
            Select Multiple
          </button>
          <button type="button" onClick={() => context.clear()}>
            Clear
          </button>
          {childSpy(context)}
        </React.Fragment>
      ))
    );

    fireEvent.click(getByText("Select Multiple"));
    fireEvent.click(getByText("Clear"));

    const resultingContext = childSpy.mock.calls[2][0];
    expect(resultingContext.selected).toEqual([]);
    expect(resultingContext.currentSelectedType).toEqual(null);
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it("handles intendedToSelect", () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const childSpy = jest.fn();

    const { getByText } = render(
      createWrapper((context: any) => (
        <React.Fragment>
          <button
            type="button"
            onMouseEnter={() =>
              context.setIntendedToSelect(["7", "8", "9", "10", "5", "3", "1"])
            }
            onMouseLeave={() => context.setIntendedToSelect([])}
          >
            IntendedToSelect
          </button>
          {childSpy(context)}
        </React.Fragment>
      ))
    );

    fireEvent.mouseEnter(getByText("IntendedToSelect"));
    fireEvent.mouseLeave(getByText("IntendedToSelect"));

    const mouseEnterContext = childSpy.mock.calls[1][0];
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(mouseEnterContext.intendedToSelect).toEqual([
      "7",
      "8",
      "9",
      "10",
      "5",
      "3",
      "1",
    ]);

    const mouseLeaveContext = childSpy.mock.calls[2][0];
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(mouseLeaveContext.intendedToSelect).toEqual([]);
  });
});
