import { React, shallow } from '../setup';
import { CollectionsFlex } from '../../lib/index';
import CollectionsFlexCellContent from '../../lib/CollectionsFlex/CollectionsFlexCellContent';

describe('Collections table cell', () => {
  let wrapper;
  const onClick = () => {};

  beforeEach(() => {
    wrapper = shallow(
      <CollectionsFlex.Cell onClick={onClick}>Hello world</CollectionsFlex.Cell>
    );
  });

  test('renders children', () => {
    expect(wrapper.find(CollectionsFlexCellContent).prop('children')).toEqual(
      'Hello world'
    );
  });

  test('sharing props', () => {
    expect(wrapper.prop('onClick')).toEqual(onClick);
  });

  test('rendering a <CollectionsFlexCellContent /> component', () => {
    wrapper.setProps({ allowOverflow: true });
    expect(
      wrapper.find(CollectionsFlexCellContent).prop('allowOverflow')
    ).toEqual(true);
  });
});
