import { React, shallow } from "../setup";
import DismissiblePrompt from "../../lib/DismissiblePrompt";
import Button from "../../lib/Button";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("DismissiblePrompt", () => {
  let wrapper: any;
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const onDismissSpy = jest.fn();

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <DismissiblePrompt onDismiss={onDismissSpy}>
        // @ts-expect-error TS(2304): Cannot find name 'Hello'. Hello world
      </DismissiblePrompt>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders children", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.text()).toEqual("Hello world<Button />");
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("it fires the onDismiss prop when clicking the close button", () => {
    wrapper.find(Button).simulate("click");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onDismissSpy).toHaveBeenCalled();
  });
});
