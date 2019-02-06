import { React, shallow } from '../setup';
import { CollectionsTable } from '../../lib/index';

describe('Collections table heading', () => {
  let wrapper;
  const onClick = () => {};

  beforeEach(() => {
    wrapper = shallow(
      <CollectionsTable.Heading onClick={onClick} className="test">
        Hello world
      </CollectionsTable.Heading>
    );
  });

  test('renders children', () => {
    expect(
      wrapper
        .find(CollectionsTable.CellContent)
        .render()
        .text()
    ).toEqual('Hello world');
  });

  test('adding an additional className', () => {
    expect(wrapper.hasClass('test')).toEqual(true);
  });

  test('sharing props', () => {
    expect(wrapper.prop('onClick')).toEqual(onClick);
  });
});
