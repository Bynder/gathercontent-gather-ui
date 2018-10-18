import { React, shallow } from '../setup';
import { CollectionsTable } from '../../lib/index';

describe('Collections table body', () => {
  let wrapper;
  const onClick = () => {};

  beforeEach(() => {
    wrapper = shallow(
      <CollectionsTable.Body onClick={onClick}>
        Hello world
      </CollectionsTable.Body>
    );
  });

  test('renders children', () => {
    expect(wrapper.text()).toEqual('Hello world');
  });

  test('sharing props', () => {
    expect(wrapper.prop('onClick')).toEqual(onClick);
  });
});
