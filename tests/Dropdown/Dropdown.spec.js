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
  const onHideMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Dropdown onToggle={onToggleMock} onHide={onHideMock} id="id-1">
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
        toggleShowContent: wrapper.instance().toggleShowContent,
        setShowContent: wrapper.instance().setShowContent,
        bounds: { top: -9999 },
        autoPosition: false
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
    wrapper.instance().toggleShowContent({ top: 240 });
    expect(wrapper.state('showContent')).toBe(true);
    expect(wrapper.state('bounds')).toEqual({ top: 240 });
  });

  test('clicking outside of the dropdown boundary hides the content', () => {
    wrapper.instance().toggleShowContent();
    expect(wrapper.state('showContent')).toBe(true);
    wrapper.find(BoundaryClickWatcher).prop('outsideClickHandler')();
    expect(wrapper.state('showContent')).toBe(false);
    expect(onHideMock).toHaveBeenCalledTimes(1);
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

  test('persists the active state when the external show prop is true', () => {
    wrapper.setProps({ persistShow: true });
    wrapper.instance().setShowContent(false);

    expect(onToggleMock).toHaveBeenLastCalledWith({
      type: 'ACTIVE',
      payload: {
        id: 'id-1'
      }
    });
  });

  test('passing a function as a child shares the ability to set the showing state', () => {
    const newWrapper = shallow(
      <Dropdown id="render-prop-test">
        {({ setShowContent }) => (
          <Dropdown.Content>
            <input onChange={() => setShowContent(true)} />
            <input onChange={() => setShowContent(false)} />
          </Dropdown.Content>
        )}
      </Dropdown>
    );

    newWrapper
      .find('input')
      .first()
      .simulate('change');
    expect(newWrapper.find('.is-active')).toHaveLength(1);
    newWrapper
      .find('input')
      .last()
      .simulate('change');
    expect(newWrapper.find('.is-active')).toHaveLength(0);
  });
});
