import { React, expect, jsDomGlobal, mount, shallow } from '../setup';
import StatusIndicator from '../../lib/StatusIndicator';
jsDomGlobal();

describe('StatusIndicator', () => {
  let wrapper, status;

  beforeEach(() => {
    wrapper = mount(<StatusIndicator color="#00ff00" label="Review">
      due <span>Tommorrow at 12:00pm</span>
      </StatusIndicator>
    );
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
});
