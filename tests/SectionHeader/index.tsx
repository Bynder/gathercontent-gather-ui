import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Secti... Remove this comment to see the full error message
import { MenuItem, SectionHeader } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("SectionHeader", () => {
  // @ts-expect-error
  let wrapper;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(<SectionHeader title="Test Title" />);
  });

  // @ts-expect-error TS(2304): Cannot find name 'afterEach'.
  afterEach(() => {});

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders a dropdown when a menu is supplied", () => {
    const menu = (
      <>
        // @ts-expect-error TS(2709): Cannot use namespace 'MenuItem' as a type.
        <MenuItem href="#" eventKey="1">
          // @ts-expect-error TS(2552): Cannot find name 'Items'. Did you mean
          'items'? Items
        </MenuItem>
        // @ts-expect-error TS(7005): Variable 'divider' implicitly has an 'any'
        type.
        <MenuItem divider />
        // @ts-expect-error TS(2304): Cannot find name 'disabled'.
        <MenuItem disabled eventKey="2">
          // @ts-expect-error TS(2304): Cannot find name 'Archived'. Archived
          Items
        </MenuItem>
      </>
    );

    // @ts-expect-error TS(2532): Object is possibly 'undefined'.
    wrapper.setProps({
      children: menu,
    });

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(MenuItem)).toHaveLength(3);
  });
});
