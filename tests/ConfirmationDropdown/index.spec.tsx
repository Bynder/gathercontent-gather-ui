import { ConfirmationDropdown, Dropdown } from "lib";
import { React, mount } from "../setup";
import ConfirmationDropdownContent from "../../lib/ConfirmationDropdown/ConfirmationDropdownContent";

describe("Confirmation Dropdown blabla", () => {
  // @ts-expect-error
  let wrapper;

  const onConfirmSpy = jest.fn();

  const onCancelSpy = jest.fn();

  const onHideSpy = jest.fn();

  const onPromiseResolveSpy = jest.fn();

  const onPromiseRejectSpy = jest.fn();

  const dropdownContent = (
    <div className="dropdown-content">Dropdown content!</div>
  );

  const mockPromise = () =>
    new Promise((resolve) => {
      // @ts-expect-error TS(2794): Expected 1 arguments, but got 0. Did you forget to... Remove this comment to see the full error message
      resolve();
      onConfirmSpy();
    });

  beforeEach(() => {
    wrapper = mount(
      <ConfirmationDropdown
        // @ts-expect-error
        id="id"
        confirmationPromise={mockPromise}
        onPromiseResolve={onPromiseResolveSpy}
        onPromiseReject={onPromiseRejectSpy}
        onCancel={onCancelSpy}
        onHide={onHideSpy}
        dropdownContent={dropdownContent}
      >
        <button type="button" className="im-the-trigger">
          confirmation
        </button>
      </ConfirmationDropdown>
    );
  });

  test("renders children", () => {
    // @ts-expect-error
    expect(wrapper.contains("confirmation")).toEqual(true);
  });

  test("rendering a <Dropdown> component", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    const { id, className, persistShow, autoPosition } = wrapper
      .find(Dropdown)
      .props();

    expect(id).toBe("id");

    expect(className).toBe("confirmation-dropdown ");

    expect(persistShow).toBe(false);

    expect(autoPosition).toBe(true);
  });

  test("spreading position props", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    const { autoPosition } = wrapper.find(Dropdown).props();

    expect(autoPosition).toBe(true);

    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.setProps({
      position: {
        right: true,
        top: true,
      },
    });
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    const { top, right } = wrapper.find(ConfirmationDropdownContent).props();
    // @ts-expect-error
    expect(wrapper.find(Dropdown).prop("autoPosition")).toBe(false);

    expect(top).toBe(true);

    expect(right).toBe(true);
  });

  test("rendering dropdown content", () => {
    // @ts-expect-error
    expect(wrapper.find(ConfirmationDropdownContent)).toHaveLength(1);
  });

  test("wraps children with the trigger props", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    const { onClick } = wrapper.find(".im-the-trigger").props();
    // @ts-expect-error
    expect(onClick).toEqual(wrapper.instance().toggleConfirmation);
  });

  test("calls the confirmation promise and sets the correct state whilst pending", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    const promise = wrapper.instance().onConfirm();
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.instance().onConfirm();
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.instance().onConfirm();
    // @ts-expect-error
    expect(wrapper.state("promiseIsPending")).toEqual(true);
    return promise.then(() => {
      expect(onConfirmSpy).toHaveBeenCalledTimes(1);
      // @ts-expect-error
      expect(wrapper.state()).toEqual({ promiseIsPending: false });
    });
  });

  test("adds props to components when promise is pending", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.setState({ promiseIsPending: true });
    // @ts-expect-error
    expect(wrapper.find(Dropdown).prop("persistShow")).toBe(true);
    // @ts-expect-error
    expect(wrapper.find(".is-pending")).toHaveLength(4);
  });

  test("renders a cancel button", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.find(".im-the-trigger").simulate("click");
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper
      .find(".confirmation-dropdown__cancel")
      .hostNodes()
      .simulate("click");

    expect(onHideSpy).toHaveBeenCalled();

    expect(onCancelSpy).toHaveBeenCalled();
  });
});
