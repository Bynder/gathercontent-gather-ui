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

  beforeEach(() => {
    wrapper = shallow(
      <Dropdown>
        <Dropdown.Trigger>Trigger 1</Dropdown.Trigger>
      </Dropdown>
    );
  });

  test('renders children', () => {
    expect(wrapper.find(Dropdown.Trigger)).toHaveLength(1);
  });

  test('shares context', () => {
    wrapper.setState({ showContent: true });
    expect(wrapper.instance().getChildContext()).toEqual({
      [GATHER_UI_DROPDOWN]: {
        showContent: true,
        toggleShowContent: wrapper.instance().toggleShowContent,
        setShowContent: wrapper.instance().setShowContent
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
    expect(wrapper.hasClass('is-active')).toBe(true);
  });
});
