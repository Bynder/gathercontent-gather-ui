import { React, shallow } from '../setup';
import { CollectionsTable } from '../../lib/index';

describe('Collections table head', () => {
  let wrapper;
  const onClick = () => {};

  beforeEach(() => {
    wrapper = shallow(
      <CollectionsTable.Head onClick={onClick}>
        Hello world
      </CollectionsTable.Head>
    );
  });

  test('renders children', () => {
    expect(wrapper.text()).toEqual('Hello world');
  });

  test('sharing props', () => {
    expect(wrapper.prop('onClick')).toEqual(onClick);
  });
});
