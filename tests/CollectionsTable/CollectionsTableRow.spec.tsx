import { CollectionsTable } from "lib";
import { React, shallow } from "../setup";

describe("Collections table row", () => {
  let wrapper: any;
  const onClick = () => {};

  beforeEach(() => {
    wrapper = shallow(
      // @ts-expect-error
      <CollectionsTable.Row onClick={onClick}>Hello world</CollectionsTable.Row>
    );
  });

  test("renders children", () => {
    expect(wrapper.text()).toEqual("Hello world");
  });

  test("sharing props", () => {
    expect(wrapper.prop("onClick")).toEqual(onClick);
  });

  test("adds selected modifier", () => {
    wrapper.setProps({ selected: true });

    expect(wrapper.hasClass("collections-table__row--selected")).toBe(true);
  });

  test("adds disabled modifier", () => {
    wrapper.setProps({ disabled: true });

    expect(wrapper.hasClass("collections-table__row--disabled")).toBe(true);
  });
});
