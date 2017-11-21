import { React, expect, shallow } from '../setup';
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

  it('renders its children', () => {
    expect(wrapper.find('.test')).to.have.length(1);
  });

  it('adds a bordered class when bordered prop is there', () => {
    wrapper.setProps({
      bordered: true
    });
    expect(wrapper.find('.top-bar__cell--bordered')).to.have.length(1);
  });
});
