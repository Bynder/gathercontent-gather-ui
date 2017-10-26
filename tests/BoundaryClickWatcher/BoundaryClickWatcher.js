import { React, expect, shallow, jsDomGlobal } from '../setup';
import BoundaryClickWatcher from '../../lib/BoundaryClickWatcher';

let wrapper;

describe('BoundaryClickWatcher', () => {
  jsDomGlobal();

  beforeEach(() => {
    wrapper = shallow(
      <BoundaryClickWatcher>
        {(boundaryIsActive) => {
          return <div isActive={boundaryIsActive} />;
        }}
      </BoundaryClickWatcher>
    );
  });

  it('boundaryIsActive is true on click', () => {
    expect(wrapper.state('boundaryIsActive')).to.equal(false);
    wrapper.simulate('click');
    expect(wrapper.state('boundaryIsActive')).to.equal(true);
  });

  it('passes boundaryIsActive to child', () => {
    expect(wrapper.state('boundaryIsActive')).to.equal(
      wrapper.prop('children').props.isActive
    );
    wrapper.simulate('click');
    expect(wrapper.state('boundaryIsActive')).to.equal(true);
    expect(wrapper.state('boundaryIsActive')).to.equal(
      wrapper.prop('children').props.isActive
    );
  });
});
