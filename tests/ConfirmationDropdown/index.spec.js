import { React, shallow } from '../setup';
import {
  ConfirmationDropdown,
  Button,
  Icon,
  BoundaryClickWatcher
} from '../../lib';

describe('Confirmation Dropdown', () => {
  let wrapper;
  let onConfirmSpy;
  let onCancelSpy;

  const dropdownContent = (
    <div className="dropdown-content">Dropdown content!</div>
  );

  const mockPromise = () =>
    new Promise(resolve => {
      resolve();
      onConfirmSpy();
    });

  beforeEach(() => {
    onConfirmSpy = jest.fn();
    onCancelSpy = jest.fn();

    wrapper = shallow(
      <ConfirmationDropdown
        confirmationPromise={mockPromise}
        onCancel={onCancelSpy}
        dropdownContent={dropdownContent}
      >
        <button>open confirmation</button>
      </ConfirmationDropdown>
    );
  });

  test('renders children', () => {
    expect(wrapper.contains('open confirmation')).toEqual(true);
  });

  test('rendering dropdown content', () => {
    expect(wrapper.find('.confirmation-dropdown__content-child').find('.dropdown-content')).toHaveLength(1);
  });

  test('adds an is-danger class', () => {
    expect(wrapper.hasClass('is-danger')).toBe(false);
    wrapper.setProps({ isDanger: true });
    expect(wrapper.hasClass('is-danger')).toBe(true);
  });

  test('renders a BoundaryClickWatcher', () => {
    expect(wrapper.find(BoundaryClickWatcher)).toHaveLength(1);
    expect(
      wrapper.find(BoundaryClickWatcher).prop('outsideClickHandler')
    ).toEqual(wrapper.instance().onCancel);
  });

  test('renders a confirmation button', () => {
    expect(
      wrapper
        .find(Button)
        .prop('types')
    ).toEqual(['link-danger', 'slim']);

    expect(
      wrapper
        .find(Button)
        .prop('clickHandler')
    ).toEqual(wrapper.instance().onConfirm);
  });

  test('wraps children with the trigger props', () => {
    expect(
      wrapper
        .find('button')
        .last()
        .prop('onClick')
    ).toEqual(wrapper.instance().toggleConfirmation);
  });

  test('calls the confirmation promise and sets the correct state whilst pending', () => {
    const promise = wrapper.instance().onConfirm();
    expect(wrapper.state('promiseIsPending')).toEqual(true);
    return promise.then(() => {
      expect(onConfirmSpy).toHaveBeenCalledTimes(1);
      expect(wrapper.state()).toEqual({
        showConfirmation: false,
        promiseIsPending: false
      });
    });
  });

  test('renders a loader whilst the promise is pending', () => {
    expect(wrapper.find(Icon)).toHaveLength(0);
    wrapper.setState({ promiseIsPending: true });
    expect(wrapper.find(Icon).prop('name')).toEqual('loader');
  });

  test('calls the onCancel prop', () => {
    wrapper.instance().onCancel();
    expect(onCancelSpy).toHaveBeenCalledTimes(1);
  });

  test('toggles the confirmation', () => {
    expect(wrapper.state('showConfirmation')).toEqual(false);
    expect(wrapper.hasClass('is-active')).toBe(false);
    wrapper.instance().toggleConfirmation();
    expect(wrapper.state('showConfirmation')).toEqual(true);
    expect(wrapper.hasClass('is-active')).toBe(true);
  });
});
