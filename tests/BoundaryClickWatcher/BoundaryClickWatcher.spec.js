import { React, shallow } from '../setup';
import { BoundaryClickWatcher } from '../../lib';

describe('BoundaryClickWatcher', () => {
  test('renders when its child is a node', () => {
    const wrapper = shallow(
      <BoundaryClickWatcher>
        <div className="child" />;
      </BoundaryClickWatcher>
    );
    expect(wrapper.find('div.child')).toHaveLength(1);
  });

  const wrapper = shallow(
    <BoundaryClickWatcher className="test">
      {boundaryIsActive => (
        <div className="child" isActive={boundaryIsActive} />
      )}
    </BoundaryClickWatcher>
  );

  test('renders when its child is a function', () => {
    expect(wrapper.find('div.child')).toHaveLength(1);
  });

  test('boundaryIsActive is true on click and passes the value onto its child', () => {
    expect(wrapper.state('boundaryIsActive')).toEqual(false);
    expect(wrapper.state('boundaryIsActive')).toEqual(
      wrapper.prop('children').props.isActive
    );
    wrapper.simulate('click');
    expect(wrapper.state('boundaryIsActive')).toEqual(true);
    expect(wrapper.state('boundaryIsActive')).toEqual(
      wrapper.prop('children').props.isActive
    );
  });

  test('adds the className prop', () => {
    expect(wrapper.hasClass('test')).toBe(true);
  });
});
