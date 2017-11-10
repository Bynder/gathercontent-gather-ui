import { React, expect, shallow, jsDomGlobal, sinon } from '../setup';
import { BoundaryClickWatcher } from '../../lib';

let sandbox;

describe('BoundaryClickWatcher', () => {
  jsDomGlobal();

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('renders when its child is a node', () => {
    const wrapper = shallow(
      <BoundaryClickWatcher>
        <div className="child" />;
      </BoundaryClickWatcher>
    );
    expect(wrapper.find('div.child')).to.have.length(1);
  });

  const wrapper = shallow(
    <BoundaryClickWatcher>
      {boundaryIsActive => (
        <div className="child" isActive={boundaryIsActive} />
      )}
    </BoundaryClickWatcher>
  );

  it('renders when its child is a function', () => {
    expect(wrapper.find('div.child')).to.have.length(1);
  });

  it('boundaryIsActive is true on click and passes the value onto its child', () => {
    expect(wrapper.state('boundaryIsActive')).to.equal(false);
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
