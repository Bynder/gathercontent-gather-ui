import { React, expect, jsDomGlobal, mount } from '../setup';
import StatusIndicator from '../../lib/StatusIndicator';

jsDomGlobal();

describe('StatusIndicator', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<StatusIndicator color="#00ff00" label="Review">
      due <span>Tommorrow at 12:00pm</span>
    </StatusIndicator>);
  });

  it('should have a circle with a backgroundColor of #00ff00', () => {
    expect(wrapper.find('.status-indicator__circle')).to.have.style('backgroundColor', 'rgb(0, 255, 0)');
  });

  it('should have a label of "Review"', () => {
    expect(wrapper.find('.status-indicator__label')).to.have.text('Review');
  });

  it('should have a child', () => {
    expect(wrapper.find('.status-indicator__children')).to.include.text('due Tommorrow at 12:00pm');
  });

  it('can be a current status, with a description', () => {
    expect(wrapper.find('.status-indicator').hasClass('status-indicator--current')).to.equal(false);
    expect(wrapper.find('.status-indicator__description')).to.have.length(0);

    wrapper = mount(<StatusIndicator color="#00ff00" label="Review" current />);

    expect(wrapper.find('.status-indicator').hasClass('status-indicator--current')).to.equal(true);
    expect(wrapper.find('.status-indicator__description')).to.have.length(1);
  });

  it('can be a completed status', () => {
    expect(wrapper.find('.status-indicator').hasClass('status-indicator--completed')).to.equal(false);

    wrapper = mount(<StatusIndicator color="#00ff00" label="Review" completed />);

    expect(wrapper.find('.status-indicator').hasClass('status-indicator--completed')).to.equal(true);
  });

  it('can be the last status', () => {
    expect(wrapper.find('.status-indicator').hasClass('status-indicator--last')).to.equal(false);

    wrapper = mount(<StatusIndicator color="#00ff00" label="Review" last />);

    expect(wrapper.find('.status-indicator').hasClass('status-indicator--last')).to.equal(true);
  });
});
