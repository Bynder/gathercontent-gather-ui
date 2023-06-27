import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib/index"' has no exported member ... Remove this comment to see the full error message
import { CollectionsTable } from "../../lib/index";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("Collections table cell content", () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <CollectionsTable.CellContent>Hello world</CollectionsTable.CellContent>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders children", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.text()).toEqual("Hello world");
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adding a allow overflow modifier", () => {
    wrapper.setProps({ allowOverflow: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper.hasClass("collections-table__cell-content--allow-overflow")
    ).toEqual(true);
  });
});
