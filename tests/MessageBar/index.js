import { React, shallow } from '../setup';
import MessageBar from '../../lib/MessageBar';

describe('MessageBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <MessageBar>
        <div className="child">i am a small child</div>
      </MessageBar>
    );
  });

  afterEach(() => {});

  test('renders its children', () => {
    expect(wrapper.find('.child')).toHaveLength(1);
  });

  test('adds a fixed class when fixed prop is passed', () => {
    expect(wrapper.find('.message-bar__fixed')).toHaveLength(0);
    wrapper.setProps({
      fixed: true
    });
    expect(wrapper.find('.message-bar__fixed')).toHaveLength(1);
  });

  test('adds a type class when a type prop is passed', () => {
    expect(wrapper.find('.message-bar__purple')).toHaveLength(0);
    wrapper.setProps({
      type: 'purple'
    });
    expect(wrapper.find('.message-bar__purple')).toHaveLength(1);
  });
});
