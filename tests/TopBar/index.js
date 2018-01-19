import { React, shallow } from '../setup';
import { TopBar } from '../../lib';

describe('TopBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TopBar>
        <div className="test">Test child</div>
      </TopBar>
    );
  });

  afterEach(() => {});

  test('renders its children', () => {
    expect(wrapper.find('.test')).toHaveLength(1);
  });

  test('adds a fixed class when fixed prop is there', () => {
    wrapper.setProps({
      fixed: true
    });
    expect(wrapper.find('.top-bar__wrapper--fixed')).toHaveLength(1);
  });
});
