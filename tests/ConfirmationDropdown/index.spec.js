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
  beforeEach(() => {
    onConfirmSpy = jest.fn();
    onCancelSpy = jest.fn();
    wrapper = shallow(
      <ConfirmationDropdown
        iconName="trash"
        onConfirm={onConfirmSpy}
        onCancel={onCancelSpy}
      >
        <div className="child" />
      </ConfirmationDropdown>
    );
  });

  test('renders children', () => {
    expect(wrapper.find('.child')).toHaveLength(1);
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

  test('renders a cancel button', () => {
    expect(
      wrapper
        .find(Button)
        .first()
        .prop('types')
    ).toEqual(['link-default', 'slim']);
    expect(
      wrapper
        .find(Button)
        .first()
        .prop('clickHandler')
    ).toEqual(wrapper.instance().onCancel);
  });

  test('renders a confirmation button', () => {
    expect(
      wrapper
        .find(Button)
        .at(1)
        .prop('types')
    ).toEqual(['link-danger', 'slim']);
    expect(
      wrapper
        .find(Button)
        .at(1)
        .prop('clickHandler')
    ).toEqual(wrapper.instance().onConfirm);
  });

  test('renders a trigger button', () => {
    expect(
      wrapper
        .find(Button)
        .last()
        .prop('types')
    ).toEqual(['icon-only']);
    expect(
      wrapper
        .find(Button)
        .last()
        .prop('clickHandler')
    ).toEqual(wrapper.instance().toggleConfirmation);
  });

  test('renders the correct Icon', () => {
    expect(wrapper.find(Icon).prop('name')).toEqual('trash');
  });

  test('calls the onConfirm prop', () => {
    wrapper.instance().onConfirm();
    expect(onConfirmSpy).toHaveBeenCalledTimes(1);
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
