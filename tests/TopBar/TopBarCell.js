import { React, shallow } from '../setup';
import { TopBarCell } from '../../lib';

describe('TopBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TopBarCell>
        <div className="test">Test child</div>
      </TopBarCell>
    );
  });

  afterEach(() => {});

  test('renders its children', () => {
    expect(wrapper.find('.test')).toHaveLength(1);
  });

  test('adds a bordered class when bordered prop is there', () => {
    wrapper.setProps({
      bordered: true
    });
    expect(wrapper.find('.top-bar__cell--bordered')).toHaveLength(1);
  });

  test('adds a collapse class when collapse is passed', () => {
    wrapper.setProps({
      collapse: true
    });
    expect(wrapper.find('.top-bar__cell--collapse')).toHaveLength(1);
  });
});
