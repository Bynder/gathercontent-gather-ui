import { React, shallow } from '../setup';
import { Dropdown } from '../../lib';
import { GATHER_UI_DROPDOWN } from '../../lib/Dropdown';
import DropdownAction from '../../lib/Dropdown/DropdownAction';
import DropdownActionGroup from '../../lib/Dropdown/DropdownActionGroup';
import DropdownContent from '../../lib/Dropdown/DropdownContent';
import DropdownTrigger from '../../lib/Dropdown/DropdownTrigger';
import BoundaryClickWatcher from '../../lib/BoundaryClickWatcher';

describe('Dropdown', () => {
  let wrapper;
  const onToggleMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Dropdown onToggle={onToggleMock} id="id-1">
        <Dropdown.Trigger>Trigger 1</Dropdown.Trigger>
      </Dropdown>
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('renders children', () => {
    expect(wrapper.find(Dropdown.Trigger)).toHaveLength(1);
  });

  test('shares context', () => {
    wrapper.setState({ showContent: true });
    expect(wrapper.instance().getChildContext()).toEqual({
      [GATHER_UI_DROPDOWN]: {
        showContent: true,
        toggleShowContent: wrapper.instance().toggleShowContent
      }
    });
  });

  test('sets the compound static props', () => {
    expect(Dropdown.Action).toEqual(DropdownAction);
    expect(Dropdown.ActionGroup).toEqual(DropdownActionGroup);
    expect(Dropdown.Content).toEqual(DropdownContent);
    expect(Dropdown.Trigger).toEqual(DropdownTrigger);
  });

  test('setting the show content state', () => {
    wrapper.instance().setShowContent(true);
    expect(wrapper.state('showContent')).toBe(true);
  });

  test('toggling the show content state', () => {
    expect(wrapper.state('showContent')).toBe(false);
    wrapper.instance().toggleShowContent();
    expect(wrapper.state('showContent')).toBe(true);
    wrapper.instance().toggleShowContent();
    expect(wrapper.state('showContent')).toBe(false);
  });

  test('clicking outside of the dropdown boundary hides the content', () => {
    wrapper.instance().toggleShowContent();
    expect(wrapper.state('showContent')).toBe(true);
    wrapper.find(BoundaryClickWatcher).prop('outsideClickHandler')();
    expect(wrapper.state('showContent')).toBe(false);
  });

  test('rendering an active class', () => {
    expect(wrapper.hasClass('is-active')).toBe(false);
    wrapper.instance().toggleShowContent();
    wrapper.update();
    expect(wrapper.hasClass('is-active')).toBe(true);
  });

  test('firing the onToggle prop when toggling', () => {
    expect(onToggleMock).toHaveBeenCalledTimes(0);

    wrapper.instance().toggleShowContent();
    expect(onToggleMock).toHaveBeenCalledTimes(1);
    expect(onToggleMock).toHaveBeenLastCalledWith({
      type: 'ACTIVE',
      payload: {
        id: 'id-1'
      }
    });

    wrapper.instance().toggleShowContent();
    expect(onToggleMock).toHaveBeenCalledTimes(2);
    expect(onToggleMock).toHaveBeenLastCalledWith({
      type: 'UNACTIVE',
      payload: {
        id: 'id-1'
      }
    });

    wrapper.instance().setShowContent(true);
    expect(onToggleMock).toHaveBeenCalledTimes(3);
    expect(onToggleMock).toHaveBeenLastCalledWith({
      type: 'ACTIVE',
      payload: {
        id: 'id-1'
      }
    });

    wrapper.instance().setShowContent(false);
    expect(onToggleMock).toHaveBeenCalledTimes(4);
    expect(onToggleMock).toHaveBeenLastCalledWith({
      type: 'UNACTIVE',
      payload: {
        id: 'id-1'
      }
    });
  });
});
