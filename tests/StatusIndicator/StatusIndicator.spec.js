import { React, mount } from '../setup';
import StatusIndicator from '../../lib/StatusIndicator';
import Icon from '../../lib/Icon';
import TooltipWrapper from '../../lib/TooltipWrapper';

describe('StatusIndicator', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <StatusIndicator
        className="test"
        color="#00ff00"
        label="Review"
        actions={<div>Test Actions</div>}
      >
        due <span>Tommorrow at 12:00pm</span>
      </StatusIndicator>
    );
  });

  test('should have a circle with a backgroundColor of #00ff00', () => {
    expect(wrapper.find('.status-indicator__circle').prop('style')).toEqual({
      backgroundColor: '#00ff00'
    });
  });

  test('should have a label of "Review"', () => {
    expect(wrapper.find('.status-indicator__label').text()).toBe('Review');
  });

  test('should have actions area', () => {
    expect(wrapper.find('.status-indicator__actions').text()).toBe(
      'Test Actions'
    );
  });

  test('should have a child', () => {
    expect(wrapper.find('.status-indicator__children').text()).toBe(
      'due Tommorrow at 12:00pm'
    );
  });

  test('can be a completed status', () => {
    expect(
      wrapper.find('.status-indicator').hasClass('status-indicator--completed')
    ).toEqual(false);

    wrapper.setProps({ completed: true });

    expect(
      wrapper.find('.status-indicator').hasClass('status-indicator--completed')
    ).toEqual(true);
  });

  test('can be bordered', () => {
    expect(
      wrapper.find('.status-indicator').hasClass('status-indicator--bordered')
    ).toEqual(false);

    wrapper.setProps({ bordered: true });

    expect(
      wrapper.find('.status-indicator').hasClass('status-indicator--bordered')
    ).toEqual(true);
  });

  test('can be rowed', () => {
    expect(
      wrapper.find('.status-indicator').hasClass('status-indicator--row')
    ).toEqual(false);

    wrapper.setProps({ row: true });

    expect(
      wrapper.find('.status-indicator').hasClass('status-indicator--row')
    ).toEqual(true);
  });

  test('adding a custom className', () => {
    expect(wrapper.hasClass('test')).toBe(true);
  });

  test('adding the soft label modifier', () => {
    wrapper.setProps({ softLabel: true });
    wrapper.update();
    expect(wrapper.render().hasClass('status-indicator--soft-label')).toBe(
      true
    );
  });

  test('adding the small modifier', () => {
    wrapper.setProps({ small: true });
    wrapper.update();
    expect(wrapper.render().hasClass('status-indicator--small')).toBe(true);
  });

  test('displays information if read only and adds a modifier', () => {
    wrapper.setProps({ readOnly: true });
    wrapper.update();
    expect(wrapper.find(TooltipWrapper)).toHaveLength(1);
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper.render().hasClass('status-indicator--read-only')).toBe(true);
  });
});
