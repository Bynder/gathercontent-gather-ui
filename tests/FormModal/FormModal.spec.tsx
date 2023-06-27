// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'FormM... Remove this comment to see the full error message
import { FormModal, ProgressButton, Button } from "../../lib";
import { React, mount } from "../setup";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("FormModal", () => {
  let modal: any;
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const handleSubmitSpy = jest.fn();

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    modal = mount(
      <FormModal
        title="Foo"
        submitText="Go"
        cancelText="Stop"
        submitHandler={handleSubmitSpy}
        show
      >
        // @ts-expect-error TS(2304): Cannot find name 'input'.
        <input />
      </FormModal>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("has a submit button", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(modal.find(ProgressButton).render().text()).toEqual("Go");
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("has a cancel button", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(modal.find(Button).first().render().text()).toEqual("Stop");
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("it renders the child form elements", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(modal.find("input").length).toEqual(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("shows a progress button with a spinner when formIsSubmitting is true", () => {
    modal.setProps({ formIsSubmitting: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(modal.find(ProgressButton).prop("showSpinner")).toEqual(true);
  });
});
