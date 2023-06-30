import { React, mount } from "../setup";
import { BoundaryClickWatcher } from "lib";

describe("BoundaryClickWatcher", () => {
  const childSpy = jest.fn();

  afterEach(() => {
    childSpy.mockReset();
  });

  test("renders when its child is a node", () => {
    const wrapper = mount(
      <BoundaryClickWatcher>
        <div className="child" />;
      </BoundaryClickWatcher>
    );

    expect(wrapper.find("div.child")).toHaveLength(1);
  });

  const wrapper = mount(
    <BoundaryClickWatcher className="test">
      {(boundaryIsActive) => childSpy(boundaryIsActive)}
    </BoundaryClickWatcher>
  );

  test("boundaryIsActive is true on click and passes the value onto its child", () => {
    wrapper.simulate("click");

    expect(childSpy).toBeCalledWith(true);
  });

  test("boundaryMouseEnter and boundaryMouseLeave prop functions are called on mouseEnter and mouseLeave", () => {
    const boundaryMouseEnterSpy = jest.fn();

    const boundaryMouseLeaveSpy = jest.fn();
    wrapper.setProps({
      onMouseEnter: boundaryMouseEnterSpy,
      onMouseLeave: boundaryMouseLeaveSpy,
    });
    wrapper.simulate("mouseEnter");

    expect(boundaryMouseEnterSpy).toHaveBeenCalled();
    wrapper.simulate("mouseLeave");

    expect(boundaryMouseLeaveSpy).toHaveBeenCalled();
  });

  test("adds the className prop", () => {
    expect(wrapper.hasClass("test")).toBe(true);
  });

  test("changes the element type", () => {
    expect(wrapper.find("div.boundary-click-watcher")).toHaveLength(1);
    wrapper.setProps({ BoundaryElement: "tr" });

    expect(wrapper.find("tr.boundary-click-watcher")).toHaveLength(1);
  });
});
