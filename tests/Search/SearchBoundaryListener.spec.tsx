import { React, shallow } from "../setup";
import { PureSearchBoundaryListener } from "../../lib/Search/SearchBoundaryListener";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Bound... Remove this comment to see the full error message
import { BoundaryClickWatcher } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("SearchBoundaryListener", () => {
  let wrapper: any;
  let hideBodySpy: any;
  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    hideBodySpy = jest.fn();
    wrapper = shallow(
      <PureSearchBoundaryListener hideBody={hideBodySpy}>
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div className="child">small child</div>
      </PureSearchBoundaryListener>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders a BoundaryClickWatcher", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(BoundaryClickWatcher)).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper.find(BoundaryClickWatcher).prop("outsideClickHandler")
    ).toEqual(hideBodySpy);
  });
});
