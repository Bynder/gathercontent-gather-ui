import { React, shallow } from '../setup';
import { ConfirmationDropdown, Button, Icon, Dropdown } from '../../lib';

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
        id="id"
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

  test('rendering a <Dropdown> component', () => {
    const { id, className, show, autoPosition } = wrapper
      .find(Dropdown)
      .props();
    expect(id).toBe('id');
    expect(className).toBe('confirmation-dropdown ');
    expect(show).toBe(false);
    expect(autoPosition).toBe(true);
  });

  test('rendering dropdown content', () => {
    expect(
      wrapper.find(Dropdown.Content).find('.dropdown-content')
    ).toHaveLength(1);
  });

  test('adds an is-danger type to the confirm button', () => {
    expect(
      wrapper
        .find(Dropdown.Content)
        .find(Button)
        .prop('types')
    ).toEqual(['slim', 'collapse']);
    wrapper.setProps({ isDanger: true });
    expect(
      wrapper
        .find(Dropdown.Content)
        .find(Button)
        .prop('types')
    ).toEqual(['link-danger', 'slim', 'collapse']);
  });

  test('renders a confirmation button', () => {
    const { clickHandler, children } = wrapper.find(Button).props();
    expect(clickHandler).toEqual(wrapper.instance().onConfirm);
    expect(children).toEqual('Confirm');
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
      expect(wrapper.state()).toEqual({
        promiseIsPending: false
      });
    });
  });

  test('renders a loader whilst the promise is pending', () => {
    expect(wrapper.find(Icon).prop('name')).toEqual('loader');
    wrapper.setState({ promiseIsPending: true });
    expect(wrapper.find(Icon).prop('name')).toEqual('loader');
  });

  test('adds props to components when promise is pending', () => {
    wrapper.setState({ promiseIsPending: true });
    expect(wrapper.find(Dropdown).prop('show')).toBe(true);
    expect(wrapper.hasClass('is-pending')).toBe(true);
  });
});
