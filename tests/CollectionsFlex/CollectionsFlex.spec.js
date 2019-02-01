import { React, shallow } from '../setup';
import { CollectionsFlex } from '../../lib/index';
import CollectionsFlexHeading from '../../lib/CollectionsFlex/CollectionsFlexHeading';
import CollectionsFlexRow from '../../lib/CollectionsFlex/CollectionsFlexRow';
import CollectionsFlexCell from '../../lib/CollectionsFlex/CollectionsFlexCell';
import CollectionsFlexCellContent from '../../lib/CollectionsFlex/CollectionsFlexCellContent';

describe('Collections table', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CollectionsFlex>Hello world</CollectionsFlex>);
  });

  test('renders children', () => {
    expect(wrapper.text()).toEqual('Hello world');
  });

  test('values of compounded components', () => {
    expect(CollectionsFlex.Heading).toEqual(CollectionsFlexHeading);
    expect(CollectionsFlex.Row).toEqual(CollectionsFlexRow);
    expect(CollectionsFlex.Cell).toEqual(CollectionsFlexCell);
    expect(CollectionsFlex.CellContent).toEqual(CollectionsFlexCellContent);
  });
});
