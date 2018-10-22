import { React, shallow } from '../setup';
import { CollectionsTable } from '../../lib/index';
import CollectionsTableCellContent from '../../lib/CollectionsTable/CollectionsTableCellContent';

describe('Collections table cell', () => {
  let wrapper;
  const onClick = () => {};

  beforeEach(() => {
    wrapper = shallow(
      <CollectionsTable.Cell onClick={onClick}>
        Hello world
      </CollectionsTable.Cell>
    );
  });

  test('renders children', () => {
    expect(wrapper.find(CollectionsTableCellContent).prop('children')).toEqual(
      'Hello world'
    );
  });

  test('sharing props', () => {
    expect(wrapper.prop('onClick')).toEqual(onClick);
  });

  test('rendering a <CollectionsTableCellContent /> component', () => {
    wrapper.setProps({ allowOverflow: true });
    expect(
      wrapper.find(CollectionsTableCellContent).prop('allowOverflow')
    ).toEqual(true);
  });
});
