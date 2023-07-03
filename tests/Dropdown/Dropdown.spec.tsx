import { React, mount } from "../setup";
import { Dropdown } from "lib";
import BoundaryClickWatcher from "../../lib/BoundaryClickWatcher";

describe("Dropdown", () => {
  let wrapper: any;

  const onToggleMock = jest.fn();

  const onHideMock = jest.fn();

  const actionMock = jest.fn();

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

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("displays the dropdown content", () => {
    expect(wrapper.find(Dropdown.Trigger)).toHaveLength(1);

    expect(wrapper.find(".dropdown__content").hasClass("is-active")).toEqual(
      false
    );
    wrapper.find(Dropdown.Trigger).simulate("click");

    expect(onToggleMock).toHaveBeenCalled();

    expect(onToggleMock).toHaveBeenLastCalledWith({
      type: "ACTIVE",
      payload: {
        id: "id-1",
      },
    });

    expect(wrapper.find(".dropdown__content").hasClass("is-active")).toEqual(
      true
    );
    wrapper.find(BoundaryClickWatcher).prop("outsideClickHandler")();
    wrapper.update();

    expect(onHideMock).toHaveBeenCalled();

    expect(onToggleMock).toHaveBeenCalledTimes(2);

    expect(onToggleMock).toHaveBeenLastCalledWith({
      type: "UNACTIVE",
      payload: {
        id: "id-1",
      },
    });

    expect(wrapper.find(".dropdown__content").hasClass("is-active")).toEqual(
      false
    );
  });

  test("persists the active state when the external show prop is true", () => {
    wrapper.setProps({ persistShow: true });
    wrapper.find(Dropdown.Trigger).simulate("click");

    expect(wrapper.find(".dropdown__content").hasClass("is-active")).toEqual(
      true
    );
    wrapper.find(BoundaryClickWatcher).prop("outsideClickHandler")();
    wrapper.update();

    expect(wrapper.find(".dropdown__content").hasClass("is-active")).toEqual(
      true
    );
  });

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

    expect(newWrapper.find(".dropdown__content").hasClass("is-active")).toEqual(
      true
    );
    newWrapper.find("input").last().simulate("change");

    expect(newWrapper.find(".dropdown__content").hasClass("is-active")).toEqual(
      false
    );
  });

  test("fires the dropdown action", () => {
    wrapper.find(Dropdown.Trigger).simulate("click");
    wrapper.find(Dropdown.Action).simulate("click");

    expect(actionMock).toHaveBeenCalled();
  });
});
