import { React, mount } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Confi... Remove this comment to see the full error message
import { ConfirmationDropdown, Dropdown } from "../../lib";
import ConfirmationDropdownContent from "../../lib/ConfirmationDropdown/ConfirmationDropdownContent";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("Confirmation Dropdown blabla", () => {
  // @ts-expect-error
  let wrapper;
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const onConfirmSpy = jest.fn();
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const onCancelSpy = jest.fn();
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const onHideSpy = jest.fn();
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const onPromiseResolveSpy = jest.fn();
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
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

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = mount(
      <ConfirmationDropdown
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

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders children", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.contains("confirmation")).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("rendering a <Dropdown> component", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    const { id, className, persistShow, autoPosition } = wrapper
      .find(Dropdown)
      .props();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(id).toBe("id");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(className).toBe("confirmation-dropdown ");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(persistShow).toBe(false);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(autoPosition).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("spreading position props", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    const { autoPosition } = wrapper.find(Dropdown).props();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
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
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Dropdown).prop("autoPosition")).toBe(false);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(top).toBe(true);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(right).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("rendering dropdown content", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(ConfirmationDropdownContent)).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("wraps children with the trigger props", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    const { onClick } = wrapper.find(".im-the-trigger").props();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onClick).toEqual(wrapper.instance().toggleConfirmation);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("calls the confirmation promise and sets the correct state whilst pending", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    const promise = wrapper.instance().onConfirm();
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.instance().onConfirm();
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.instance().onConfirm();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("promiseIsPending")).toEqual(true);
    return promise.then(() => {
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(onConfirmSpy).toHaveBeenCalledTimes(1);
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(wrapper.state()).toEqual({ promiseIsPending: false });
    });
  });
  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds props to components when promise is pending", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.setState({ promiseIsPending: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Dropdown).prop("persistShow")).toBe(true);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".is-pending")).toHaveLength(4);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders a cancel button", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.find(".im-the-trigger").simulate("click");
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper
      .find(".confirmation-dropdown__cancel")
      .hostNodes()
      .simulate("click");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onHideSpy).toHaveBeenCalled();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onCancelSpy).toHaveBeenCalled();
  });
});
