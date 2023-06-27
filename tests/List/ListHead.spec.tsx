import { React, shallow } from "../setup";
import ListHead from "../../lib/List/ListHead";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("List Head", () => {
  let wrapper: any;

  const mockAction = <button type="button">test button</button>;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(<ListHead title="Project name" action={mockAction} />);
  });

  // @ts-expect-error TS(2304): Cannot find name 'afterEach'.
  afterEach(() => {});

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders the title", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.contains("Project name")).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders the action", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.contains(mockAction)).toEqual(true);
  });
});
