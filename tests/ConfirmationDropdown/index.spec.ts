import { React, mount } from '../setup';
import { ConfirmationDropdown, Dropdown } from '../../lib';
import ConfirmationDropdownContent from '../../lib/ConfirmationDropdown/ConfirmationDropdownContent';

describe('Confirmation Dropdown blabla', () => {
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
    new Promise(resolve => {
      resolve();
      onConfirmSpy();
    });

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
          open confirmation
        </button>
      </ConfirmationDropdown>
    );
  });

  test('renders children', () => {
    expect(wrapper.contains('open confirmation')).toEqual(true);
  });

  test('rendering a <Dropdown> component', () => {
    const { id, className, persistShow, autoPosition } = wrapper
      .find(Dropdown)
      .props();
    expect(id).toBe('id');
    expect(className).toBe('confirmation-dropdown ');
    expect(persistShow).toBe(false);
    expect(autoPosition).toBe(true);
  });

  test('spreading position props', () => {
    const { autoPosition } = wrapper.find(Dropdown).props();
    expect(autoPosition).toBe(true);

    wrapper.setProps({
      position: {
        right: true,
        top: true
      }
    });
    const { top, right } = wrapper.find(ConfirmationDropdownContent).props();
    expect(wrapper.find(Dropdown).prop('autoPosition')).toBe(false);
    expect(top).toBe(true);
    expect(right).toBe(true);
  });

  test('rendering dropdown content', () => {
    expect(wrapper.find(ConfirmationDropdownContent)).toHaveLength(1);
  });

  test('wraps children with the trigger props', () => {
    const { onClick } = wrapper.find('.im-the-trigger').props();
    expect(onClick).toEqual(wrapper.instance().toggleConfirmation);
  });

  test('calls the confirmation promise and sets the correct state whilst pending', () => {
    const promise = wrapper.instance().onConfirm();
    wrapper.instance().onConfirm();
    wrapper.instance().onConfirm();
    expect(wrapper.state('promiseIsPending')).toEqual(true);
    return promise.then(() => {
      expect(onConfirmSpy).toHaveBeenCalledTimes(1);
      expect(wrapper.state()).toEqual({ promiseIsPending: false });
    });
  });
  test('adds props to components when promise is pending', () => {
    wrapper.setState({ promiseIsPending: true });
    expect(wrapper.find(Dropdown).prop('persistShow')).toBe(true);
    expect(wrapper.find('.is-pending')).toHaveLength(4);
  });

  test('renders a cancel button', () => {
    wrapper.find('.im-the-trigger').simulate('click');
    wrapper
      .find('.confirmation-dropdown__cancel')
      .hostNodes()
      .simulate('click');
    expect(onHideSpy).toHaveBeenCalled();
    expect(onCancelSpy).toHaveBeenCalled();
  });
});
