import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib/index"' has no exported member ... Remove this comment to see the full error message
import { CollectionsTable } from "../../lib/index";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("Collections table heading", () => {
  let wrapper: any;
  const onClick = () => {};

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <CollectionsTable.Heading onClick={onClick} className="test">
        Hello world
      </CollectionsTable.Heading>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders children", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(CollectionsTable.CellContent).render().text()).toEqual(
      "Hello world"
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adding an additional className", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("test")).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("sharing props", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.prop("onClick")).toEqual(onClick);
  });
});
