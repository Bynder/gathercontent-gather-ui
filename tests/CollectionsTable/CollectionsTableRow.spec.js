import { React, shallow } from '../setup';
import { CollectionsTable } from '../../lib/index';

describe('Collections table row', () => {
  let wrapper;
  const onClick = () => {};

  beforeEach(() => {
    wrapper = shallow(
      <CollectionsTable.Row onClick={onClick}>Hello world</CollectionsTable.Row>
    );
  });

  test('renders children', () => {
    expect(wrapper.text()).toEqual('Hello world');
  });

  test('sharing props', () => {
    expect(wrapper.prop('onClick')).toEqual(onClick);
  });
});
