import { React, shallow } from '../setup';
import { Button, Icon, Dropdown } from '../../lib';
import ConfirmationDropdownContent from '../../lib/ConfirmationDropdown/ConfirmationDropdownContent';
import { GATHER_UI_DROPDOWN } from '../../lib/Dropdown';

describe('Confirmation Dropdown Content', () => {
  let wrapper;
  let onConfirmSpy;
  let setShowContentSpy;

  const dropdownContent = (
    <div className="dropdown-content">Dropdown content!</div>
  );

  const mockConfirmPromise = () =>
    new Promise(resolve => {
      resolve();
      onConfirmSpy();
    });

  beforeEach(() => {
    onConfirmSpy = jest.fn();
    setShowContentSpy = jest.fn();

    wrapper = shallow(
      <ConfirmationDropdownContent onConfirm={mockConfirmPromise}>
        {dropdownContent}
      </ConfirmationDropdownContent>,
      {
        context: {
          [GATHER_UI_DROPDOWN]: {
            setShowContent: setShowContentSpy
          }
        }
      }
    );
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
        .first()
        .prop('types')
    ).toEqual(['slim', 'collapse', 'link']);
    wrapper.setProps({ isDanger: true });

    expect(
      wrapper
        .find(Dropdown.Content)
        .find(Button)
        .first()
        .prop('types')
    ).toEqual(['slim', 'collapse', 'link-danger']);
  });

  test('rendering a confirmation button', () => {
    const { clickHandler, children } = wrapper
      .find(Button)
      .first()
      .props();
    expect(children).toEqual('Confirm');
    return clickHandler().then(() => {
      expect(onConfirmSpy).toHaveBeenCalledTimes(1);
      expect(setShowContentSpy).toHaveBeenCalledWith(false);
    });
  });

  test('rendering a cancel button', () => {
    const { types, clickHandler, children } = wrapper
      .find(Button)
      .last()
      .props();
    expect(types).toEqual(['slim', 'collapse']);
    expect(children).toEqual('Cancel');
    clickHandler();
    expect(setShowContentSpy).toHaveBeenCalledWith(false);
  });

  test('renders a loader whilst the promise is pending', () => {
    expect(wrapper.find(Icon).prop('name')).toEqual('loader');
    wrapper.setProps({ promiseIsPending: true });
    expect(wrapper.find(Icon).prop('name')).toEqual('loader');
  });
});
