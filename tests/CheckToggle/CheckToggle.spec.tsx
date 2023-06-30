import { React, shallow } from "../setup";
import CheckToggle from "../../lib/CheckToggle";

describe("CheckToggle", () => {
  let props: any;

  test("renders a wrapper with an input", () => {
    const Element = shallow(<CheckToggle id="test-id" />);
    const div = Element.find("div");
    const input = div.find("input");

    expect(div).toHaveLength(1);

    expect(input).toHaveLength(1);
  });

  test("changes its state when clicked", () => {
    props = {
      id: "hello",

      clickHandler: jest.fn(),
    };

    const Element = shallow(<CheckToggle {...props} />);
    Element.find("input").simulate("change");

    expect(Element.state().checked).toEqual(true);

    expect(props.clickHandler).toHaveBeenCalled();
  });

  test("receives a matching ID for both input and label", () => {
    props = { id: "hello" };

    const Element = shallow(<CheckToggle {...props} />);
    const label = Element.find("[data-label-id]");

    expect(label.props().htmlFor).toEqual(props.id);
  });

  test("adds a size small modifier", () => {
    const Element = shallow(<CheckToggle {...props} />);

    expect(Element.hasClass("size-small")).toBe(false);
    Element.setProps({ displaySmall: true });

    expect(Element.hasClass("size-small")).toBe(true);
  });

  test("adds a checked modifier", () => {
    const Element = shallow(<CheckToggle {...props} />);

    expect(Element.hasClass("is-checked")).toBe(false);
    Element.setProps({ displayChecked: true });
    Element.setState({ checked: true });

    expect(Element.hasClass("is-checked")).toBe(true);
  });

  test("adds a disabled modifier", () => {
    const Element = shallow(<CheckToggle {...props} />);

    expect(Element.hasClass("disabled")).toBe(false);
    Element.setProps({ disabled: true });

    expect(Element.hasClass("disabled")).toBe(true);
  });

  test("adds margin large modifier", () => {
    const Element = shallow(<CheckToggle {...props} />);

    expect(Element.hasClass("margin-large")).toBe(false);
    Element.setProps({ marginSizeLarge: true });

    expect(Element.hasClass("margin-large")).toBe(true);
  });
});
