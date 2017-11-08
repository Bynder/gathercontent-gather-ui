import { React, expect, shallow } from '../setup';
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

  it('renders its children', () => {
    expect(wrapper.find('.test')).to.have.length(1);
  });

  it('adds a fixed class when fixed prop is there', () => {
    wrapper.setProps({
      fixed: true
    });
    expect(wrapper.find('.top-bar__wrapper--fixed')).to.have.length(1);
  });
});
