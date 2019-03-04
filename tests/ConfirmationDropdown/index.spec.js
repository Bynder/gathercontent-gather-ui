import { React, shallow } from '../setup';
import { ConfirmationDropdown, Dropdown } from '../../lib';
import ConfirmationDropdownContent from '../../lib/ConfirmationDropdown/ConfirmationDropdownContent';

describe('Confirmation Dropdown', () => {
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
    wrapper = shallow(
      <ConfirmationDropdown
        id="id"
        confirmationPromise={mockPromise}
        onPromiseResolve={onPromiseResolveSpy}
        onPromiseReject={onPromiseRejectSpy}
        onCancel={onCancelSpy}
        onHide={onHideSpy}
        dropdownContent={dropdownContent}
      >
        <button>open confirmation</button>
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

  test('rendering dropdown content', () => {
    expect(wrapper.find(ConfirmationDropdownContent)).toHaveLength(1);
  });

  test('wraps children with the trigger props', () => {
    const { onClick } = wrapper.find('button').props();
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
      expect(onPromiseResolveSpy).toHaveBeenCalledTimes(1);
    });
  });

  test('adds props to components when promise is pending', () => {
    wrapper.setState({ promiseIsPending: true });
    expect(wrapper.find(Dropdown).prop('persistShow')).toBe(true);
    expect(wrapper.hasClass('is-pending')).toBe(true);
  });

  test('calling onPromiseReject when the confirmation promise has resolved', () => {
    const rejectedPromise = () =>
      new Promise((resolve, reject) => {
        reject();
      });

    wrapper.setProps({
      confirmationPromise: rejectedPromise
    });

    wrapper
      .instance()
      .onConfirm()
      .then(() => {
        expect(onConfirmSpy).toHaveBeenCalledTimes(1);
        expect(wrapper.state()).toEqual({ promiseIsPending: false });
        expect(onPromiseRejectSpy).toHaveBeenCalledTimes(1);
      });
  });
});
