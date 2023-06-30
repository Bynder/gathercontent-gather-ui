import { React, shallow } from "../setup";
import { CollectionsTable } from "lib";

describe("Collections table heading", () => {
  let wrapper: any;
  const onClick = () => {};

  beforeEach(() => {
    wrapper = shallow(
      // @ts-expect-error
      <CollectionsTable.Heading onClick={onClick} className="test">
        Hello world
      </CollectionsTable.Heading>
    );
  });

  test("renders children", () => {
    expect(wrapper.find(CollectionsTable.CellContent).render().text()).toEqual(
      "Hello world"
    );
  });

  test("adding an additional className", () => {
    expect(wrapper.hasClass("test")).toEqual(true);
  });

  test("sharing props", () => {
    expect(wrapper.prop("onClick")).toEqual(onClick);
  });
});
