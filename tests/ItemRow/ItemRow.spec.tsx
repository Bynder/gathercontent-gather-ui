import { React, shallow } from "../setup";
import { ItemRow } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("Item Row", () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(<ItemRow>Hello world</ItemRow>);
  });

  // @ts-expect-error TS(2304): Cannot find name 'afterEach'.
  afterEach(() => {});

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders children", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.text()).toEqual("Hello world");
  });
});
