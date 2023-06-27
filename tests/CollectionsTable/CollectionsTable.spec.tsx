import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib/index"' has no exported member ... Remove this comment to see the full error message
import { CollectionsTable } from "../../lib/index";
import CollectionsTableHeading from "../../lib/CollectionsTable/CollectionsTableHeading";
import CollectionsTableRow from "../../lib/CollectionsTable/CollectionsTableRow";
import CollectionsTableCell from "../../lib/CollectionsTable/CollectionsTableCell";
import CollectionsTableCellContent from "../../lib/CollectionsTable/CollectionsTableCellContent";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("Collections table", () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(<CollectionsTable>Hello world</CollectionsTable>);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders children", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.text()).toEqual("Hello world");
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("values of compounded components", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(CollectionsTable.Heading).toEqual(CollectionsTableHeading);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(CollectionsTable.Row).toEqual(CollectionsTableRow);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(CollectionsTable.Cell).toEqual(CollectionsTableCell);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(CollectionsTable.CellContent).toEqual(CollectionsTableCellContent);
  });
});
