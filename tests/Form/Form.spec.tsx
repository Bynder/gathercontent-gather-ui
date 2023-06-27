import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Form'... Remove this comment to see the full error message
import { Form } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("Form", () => {
  let onSubmitSpy: any;
  let onCancelSpy: any;
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    onSubmitSpy = jest.fn();
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    onCancelSpy = jest.fn();
    wrapper = shallow(
      <Form onSubmit={onSubmitSpy} onCancel={onCancelSpy} className="test">
        // @ts-expect-error TS(2304): Cannot find name 'input'.
        <input />
      </Form>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders children", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find("input")).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("calls props.onSubmit when submitting", () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const preventDefaultSpy = jest.fn();
    const event = { preventDefault: preventDefaultSpy };
    wrapper.find("form").prop("onSubmit")(event);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onSubmitSpy).toHaveBeenCalledWith(event);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("calls onCancel with the esc key", () => {
    wrapper.instance().handleKeyDown({ keyCode: 27 });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onCancelSpy).not.toHaveBeenCalled();

    wrapper.setProps({ escToClose: true });
    wrapper.instance().handleKeyDown({ keyCode: 27 });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onCancelSpy).toHaveBeenCalledTimes(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders the classNames", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("test")).toEqual(true);
  });
});
