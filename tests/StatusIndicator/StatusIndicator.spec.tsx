import { React, mount } from "../setup";
import StatusIndicator from "../../lib/StatusIndicator";
import Icon from "../../lib/Icon";
import TooltipWrapper from "../../lib/TooltipWrapper";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("StatusIndicator", () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = mount(
      <StatusIndicator
        className="test"
        color="#00ff00"
        label="Review"
        actions={<div>Test Actions</div>}
      >
        <span>Tommorrow at 12:00pm</span>
      </StatusIndicator>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("should have a circle with a backgroundColor of #00ff00", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".status-indicator__circle").prop("style")).toEqual({
      backgroundColor: "#00ff00",
    });
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should have a label of "Review"', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".status-indicator__label").text()).toBe("Review");
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("should have actions area", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".status-indicator__actions").text()).toBe(
      "Test Actions"
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("should have a child", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".status-indicator__children").text()).toBe(
      "Tommorrow at 12:00pm"
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("can be a completed status", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper.find(".status-indicator").hasClass("status-indicator--completed")
    ).toEqual(false);

    wrapper.setProps({ completed: true });

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper.find(".status-indicator").hasClass("status-indicator--completed")
    ).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("can be bordered", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper.find(".status-indicator").hasClass("status-indicator--bordered")
    ).toEqual(false);

    wrapper.setProps({ bordered: true });

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper.find(".status-indicator").hasClass("status-indicator--bordered")
    ).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("can be rowed", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper.find(".status-indicator").hasClass("status-indicator--row")
    ).toEqual(false);

    wrapper.setProps({ row: true });

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper.find(".status-indicator").hasClass("status-indicator--row")
    ).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adding a custom className", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("test")).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adding the soft label modifier", () => {
    wrapper.setProps({ softLabel: true });
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.render().hasClass("status-indicator--soft-label")).toBe(
      true
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adding the small modifier", () => {
    wrapper.setProps({ small: true });
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.render().hasClass("status-indicator--small")).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("displays information if read only and adds a modifier", () => {
    wrapper.setProps({ readOnly: true });
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(TooltipWrapper)).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Icon)).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.render().hasClass("status-indicator--read-only")).toBe(true);
  });
});
