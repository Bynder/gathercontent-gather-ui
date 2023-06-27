import { React, shallow } from '../setup';
import { CollectionsTable } from '../../lib/index';

describe('Collections table cell content', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CollectionsTable.CellContent>Hello world</CollectionsTable.CellContent>
    );
  });

  test('renders children', () => {
    expect(wrapper.text()).toEqual('Hello world');
  });

  test('adding a allow overflow modifier', () => {
    wrapper.setProps({ allowOverflow: true });
    expect(
      wrapper.hasClass('collections-table__cell-content--allow-overflow')
    ).toEqual(true);
  });
});
