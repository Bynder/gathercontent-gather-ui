import { MenuItem, SectionHeader } from "lib";
import { React, shallow } from "../setup";

describe("SectionHeader", () => {
  // @ts-expect-error
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SectionHeader title="Test Title" />);
  });

  afterEach(() => {});

  test("renders a dropdown when a menu is supplied", () => {
    const menu = (
      <>
        <MenuItem href="#" eventKey="1">
          'items'? Items
        </MenuItem>
        type.
        <MenuItem divider />
        <MenuItem disabled eventKey="2">
          Items
        </MenuItem>
      </>
    );

    // @ts-expect-error TS(2532): Object is possibly 'undefined'.
    wrapper.setProps({
      children: menu,
    });
    // @ts-expect-error
    expect(wrapper.find(MenuItem)).toHaveLength(3);
  });
});
