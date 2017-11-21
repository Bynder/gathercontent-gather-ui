import { React, expect, shallow } from '../setup';
import { TopBarContent } from '../../lib';

describe('TopBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TopBarContent>
        <div className="test">Test child</div>
      </TopBarContent>
    );
  });

  afterEach(() => {});

  it('renders its children', () => {
    expect(wrapper.find('.test')).to.have.length(1);
  });

  it('adds a left class when left prop is there', () => {
    wrapper.setProps({
      left: true
    });
    expect(wrapper.find('.top-bar__content--left')).to.have.length(1);
  });

  it('adds a center class when center prop is there', () => {
    wrapper.setProps({
      center: true
    });
    expect(wrapper.find('.top-bar__content--center')).to.have.length(1);
  });

  it('adds a right class when right prop is there', () => {
    wrapper.setProps({
      right: true
    });
    expect(wrapper.find('.top-bar__content--right')).to.have.length(1);
  });
});
