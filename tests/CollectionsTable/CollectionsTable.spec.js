import { React, shallow } from '../setup';
import { CollectionsTable } from '../../lib/index';
import CollectionsTableHeading from '../../lib/CollectionsTable/CollectionsTableHeading';
import CollectionsTableRow from '../../lib/CollectionsTable/CollectionsTableRow';
import CollectionsTableCell from '../../lib/CollectionsTable/CollectionsTableCell';
import CollectionsTableCellContent from '../../lib/CollectionsTable/CollectionsTableCellContent';

describe('Collections table', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CollectionsTable>Hello world</CollectionsTable>);
  });

  test('renders children', () => {
    expect(wrapper.text()).toEqual('Hello world');
  });

  test('values of compounded components', () => {
    expect(CollectionsTable.Heading).toEqual(CollectionsTableHeading);
    expect(CollectionsTable.Row).toEqual(CollectionsTableRow);
    expect(CollectionsTable.Cell).toEqual(CollectionsTableCell);
    expect(CollectionsTable.CellContent).toEqual(CollectionsTableCellContent);
  });
});
