import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Bread... Remove this comment to see the full error message
import { Breadcrumb } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("Breadcrumb", () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <Breadcrumb className="test">
        // @ts-expect-error TS(2304): Cannot find name 'a'.
        <a href="/">Test 1</a>
        // @ts-expect-error TS(2304): Cannot find name 'a'.
        <a href="/">Test 2</a>
        // @ts-expect-error TS(2304): Cannot find name 'a'.
        <a href="/">Test 3</a>
      </Breadcrumb>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders 3 links", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find("a")).toHaveLength(3);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adding a className to container", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("test")).toBe(true);
  });
});
