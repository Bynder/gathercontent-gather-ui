import { React, mount } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Bound... Remove this comment to see the full error message
import { BoundaryClickWatcher } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("BoundaryClickWatcher", () => {
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const childSpy = jest.fn();

  // @ts-expect-error TS(2304): Cannot find name 'afterEach'.
  afterEach(() => {
    childSpy.mockReset();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders when its child is a node", () => {
    const wrapper = mount(
      <BoundaryClickWatcher>
        <div className="child" />;
      </BoundaryClickWatcher>
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find("div.child")).toHaveLength(1);
  });

  const wrapper = mount(
    <BoundaryClickWatcher className="test">
      {/* @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message */}
      {(boundaryIsActive) => childSpy(boundaryIsActive)}
    </BoundaryClickWatcher>
  );

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("boundaryIsActive is true on click and passes the value onto its child", () => {
    wrapper.simulate("click");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(childSpy).toBeCalledWith(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("boundaryMouseEnter and boundaryMouseLeave prop functions are called on mouseEnter and mouseLeave", () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const boundaryMouseEnterSpy = jest.fn();
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const boundaryMouseLeaveSpy = jest.fn();
    wrapper.setProps({
      onMouseEnter: boundaryMouseEnterSpy,
      onMouseLeave: boundaryMouseLeaveSpy,
    });
    wrapper.simulate("mouseEnter");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(boundaryMouseEnterSpy).toHaveBeenCalled();
    wrapper.simulate("mouseLeave");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(boundaryMouseLeaveSpy).toHaveBeenCalled();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds the className prop", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("test")).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("changes the element type", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find("div.boundary-click-watcher")).toHaveLength(1);
    wrapper.setProps({ BoundaryElement: "tr" });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find("tr.boundary-click-watcher")).toHaveLength(1);
  });
});
