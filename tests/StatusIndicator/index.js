import { React, mount } from '../setup';
import StatusIndicator from '../../lib/StatusIndicator';

describe('StatusIndicator', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <StatusIndicator color="#00ff00" label="Review" actions={(<div>Test Actions</div>)}>
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

  test('can be a current status, with a description', () => {
    expect(
      wrapper.find('.status-indicator').hasClass('status-indicator--current')
    ).toEqual(false);
    expect(wrapper.find('.status-indicator__description')).toHaveLength(0);

    wrapper.setProps({ current: true });

    expect(
      wrapper.find('.status-indicator').hasClass('status-indicator--current')
    ).toEqual(true);
    expect(wrapper.find('.status-indicator__description')).toHaveLength(1);
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
});
