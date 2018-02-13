import { React, shallow } from '../setup';
import MessageBarContent from '../../lib/MessageBar/MessageBarContent';

describe('MessageBarContent', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <MessageBarContent>
        <div className="child">i am a small child</div>
      </MessageBarContent>
    );
  });

  afterEach(() => {});

  test('renders its children', () => {
    expect(wrapper.find('.child')).toHaveLength(1);
  });

  test('adds a left class when left prop is there', () => {
    expect(wrapper.find('.message-bar__content--left')).toHaveLength(0);
    wrapper.setProps({
      left: true
    });
    expect(wrapper.find('.message-bar__content--left')).toHaveLength(1);
  });

  test('adds a center class when center prop is there', () => {
    expect(wrapper.find('.message-bar__content--center')).toHaveLength(0);
    wrapper.setProps({
      center: true
    });
    expect(wrapper.find('.message-bar__content--center')).toHaveLength(1);
  });

  test('adds a right class when right prop is there', () => {
    expect(wrapper.find('.message-bar__content--right')).toHaveLength(0);
    wrapper.setProps({
      right: true
    });
    expect(wrapper.find('.message-bar__content--right')).toHaveLength(1);
  });
});
