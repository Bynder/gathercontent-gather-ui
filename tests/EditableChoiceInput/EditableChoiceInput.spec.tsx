import { cleanup, render, fireEvent } from "@testing-library/react";
import { EditableChoiceInput } from "lib";
import { React } from "../setup";

describe("EditableChoiceInput", () => {
  const defaultProps = {
    type: "radio",
    onChange: () => {},
  };
  const renderWrapper = (props = defaultProps) =>
    render(<EditableChoiceInput {...props} />);

  afterEach(() => {
    cleanup();
  });

  test("displays a radio input", () => {
    const { container } = renderWrapper();
    const radio = container.querySelector('input[type="radio"]');

    expect(radio).toBeInTheDocument();
  });

  test("displays a checkbox input", () => {
    const { container } = renderWrapper({ ...defaultProps, type: "checkbox" });
    const checkbox = container.querySelector('input[type="checkbox"]');

    expect(checkbox).toBeInTheDocument();
  });

  test("displays a text input", () => {
    const onChangeSpy = jest.fn();
    const { getByTestId } = renderWrapper({
      ...defaultProps,
      onChange: onChangeSpy,
    });
    fireEvent.change(getByTestId("editable-choice-text-input"), {
      target: {
        value: "A nice option",
      },
    });

    expect(onChangeSpy).toBeCalled();
  });

  test("displays a readonly text input", () => {
    const onChangeSpy = jest.fn();
    const { getByTestId } = renderWrapper({
      ...defaultProps,
      onChange: onChangeSpy,
      // @ts-expect-error TS(2345): Argument of type '{ onChange: any; readOnly: boole... Remove this comment to see the full error message
      readOnly: true,
    });

    expect(getByTestId("editable-choice-text-input")).toBeDisabled();

    expect(onChangeSpy).not.toBeCalled();
  });

  test("displays the aside", () => {
    const { queryByText, getByText, getByTestId } = renderWrapper({
      ...defaultProps,
      // @ts-expect-error TS(2345): Argument of type '{ aside: boolean; type: string; ... Remove this comment to see the full error message
      aside: <div>howdy!</div>,
    });

    expect(queryByText("howdy!")).toEqual(null);
    const input = getByTestId("editable-choice-text-input");
    fireEvent.mouseEnter(input);

    expect(getByText("howdy!"));
  });
});
