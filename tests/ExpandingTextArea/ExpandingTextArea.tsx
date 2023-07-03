import { React, mount } from "../setup";
import { ExpandingTextArea } from "../../lib";

describe("ExpandingTextArea", () => {
  jest.useFakeTimers();
  let wrapper: any;
  let handleOnChangeSpy: any;
  let handleOnFocusSpy: any;
  let onRowCountChangeSpy;
  let handleOnBlurSpy: any;
  let style;

  beforeEach(() => {
    style = {
      lineHeight: "20px",
      padding: "10px 0 10px",
    };

    handleOnChangeSpy = jest.fn();

    handleOnFocusSpy = jest.fn();

    onRowCountChangeSpy = jest.fn();

    handleOnBlurSpy = jest.fn();
    wrapper = mount(
      <ExpandingTextArea
        style={style}
        placeholder="Placeholder..."
        handleOnChange={handleOnChangeSpy}
        handleOnFocus={handleOnFocusSpy}
        handleOnBlur={handleOnBlurSpy}
        onRowCountChange={onRowCountChangeSpy}
      />
    );
  });

  test("sets the input value as the value prop", () => {
    wrapper.setProps({ value: "New Value" });

    expect(wrapper.text()).toEqual(wrapper.prop("value"));
  });

  test("calls the handleOnChange prop on change", () => {
    wrapper.simulate("change", { target: { value: "Changed value" } });

    expect(handleOnChangeSpy).toHaveBeenCalled();
  });

  test("calls a prop function when focus and blur", () => {
    wrapper.simulate("focus", {});

    expect(handleOnFocusSpy).toHaveBeenCalledTimes(1);

    wrapper.simulate("blur", {});

    expect(handleOnBlurSpy).toHaveBeenCalledTimes(1);
  });
});
