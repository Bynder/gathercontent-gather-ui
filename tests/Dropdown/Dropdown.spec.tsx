import { React, mount } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Dropd... Remove this comment to see the full error message
import { Dropdown } from "../../lib";
import BoundaryClickWatcher from "../../lib/BoundaryClickWatcher";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("Dropdown", () => {
  let wrapper: any;
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const onToggleMock = jest.fn();
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const onHideMock = jest.fn();
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const actionMock = jest.fn();

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = mount(
      <Dropdown onToggle={onToggleMock} onHide={onHideMock} id="id-1">
        <Dropdown.Trigger>Trigger 1</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.ActionGroup>
            <Dropdown.Action action={actionMock}>Howdy</Dropdown.Action>
          </Dropdown.ActionGroup>
        </Dropdown.Content>
      </Dropdown>
    );
  });

  // @ts-expect-error TS(2304): Cannot find name 'afterEach'.
  afterEach(() => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    jest.resetAllMocks();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("displays the dropdown content", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Dropdown.Trigger)).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropdown__content").hasClass("is-active")).toEqual(
      false
    );
    wrapper.find(Dropdown.Trigger).simulate("click");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onToggleMock).toHaveBeenCalled();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onToggleMock).toHaveBeenLastCalledWith({
      type: "ACTIVE",
      payload: {
        id: "id-1",
      },
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropdown__content").hasClass("is-active")).toEqual(
      true
    );
    wrapper.find(BoundaryClickWatcher).prop("outsideClickHandler")();
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onHideMock).toHaveBeenCalled();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onToggleMock).toHaveBeenCalledTimes(2);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onToggleMock).toHaveBeenLastCalledWith({
      type: "UNACTIVE",
      payload: {
        id: "id-1",
      },
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropdown__content").hasClass("is-active")).toEqual(
      false
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("persists the active state when the external show prop is true", () => {
    wrapper.setProps({ persistShow: true });
    wrapper.find(Dropdown.Trigger).simulate("click");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropdown__content").hasClass("is-active")).toEqual(
      true
    );
    wrapper.find(BoundaryClickWatcher).prop("outsideClickHandler")();
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".dropdown__content").hasClass("is-active")).toEqual(
      true
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("passing a function as a child shares the ability to set the showing state", () => {
    const newWrapper = mount(
      <Dropdown id="render-prop-test">
        {({ setShowContent, showContent }: any) => (
          <Dropdown.Content>
            <input onChange={() => setShowContent(!showContent)} />
            <input onChange={() => setShowContent(!showContent)} />
          </Dropdown.Content>
        )}
      </Dropdown>
    );

    newWrapper.find("input").first().simulate("change");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(newWrapper.find(".dropdown__content").hasClass("is-active")).toEqual(
      true
    );
    newWrapper.find("input").last().simulate("change");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(newWrapper.find(".dropdown__content").hasClass("is-active")).toEqual(
      false
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("fires the dropdown action", () => {
    wrapper.find(Dropdown.Trigger).simulate("click");
    wrapper.find(Dropdown.Action).simulate("click");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(actionMock).toHaveBeenCalled();
  });
});
