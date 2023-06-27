import { React, shallow } from '../setup';
import { PureSearchBoundaryListener } from '../../lib/Search/SearchBoundaryListener';
import { BoundaryClickWatcher } from '../../lib';

describe('SearchBoundaryListener', () => {
  let wrapper;
  let hideBodySpy;
  beforeEach(() => {
    hideBodySpy = jest.fn();
    wrapper = shallow(
      <PureSearchBoundaryListener hideBody={hideBodySpy}>
        <div className="child">small child</div>
      </PureSearchBoundaryListener>
    );
  });

  test('renders a BoundaryClickWatcher', () => {
    expect(wrapper.find(BoundaryClickWatcher)).toHaveLength(1);
    expect(
      wrapper.find(BoundaryClickWatcher).prop('outsideClickHandler')
    ).toEqual(hideBodySpy);
  });
});
