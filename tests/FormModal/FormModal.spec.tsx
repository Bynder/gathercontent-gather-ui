import { FormModal, ProgressButton, Button } from "lib";
import { React, mount } from "../setup";

describe("FormModal", () => {
  let modal: any;

  const handleSubmitSpy = jest.fn();

  beforeEach(() => {
    modal = mount(
      <FormModal
        title="Foo"
        submitText="Go"
        cancelText="Stop"
        submitHandler={handleSubmitSpy}
        // @ts-expect-error
        show
      >
        <input />
      </FormModal>
    );
  });

  test("has a submit button", () => {
    expect(modal.find(ProgressButton).render().text()).toEqual("Go");
  });

  test("has a cancel button", () => {
    expect(modal.find(Button).first().render().text()).toEqual("Stop");
  });

  test("it renders the child form elements", () => {
    expect(modal.find("input").length).toEqual(1);
  });

  test("shows a progress button with a spinner when formIsSubmitting is true", () => {
    modal.setProps({ formIsSubmitting: true });

    expect(modal.find(ProgressButton).prop("showSpinner")).toEqual(true);
  });
});
