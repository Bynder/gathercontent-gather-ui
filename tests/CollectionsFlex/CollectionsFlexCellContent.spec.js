import { React, shallow } from '../setup';
import { CollectionsFlex } from '../../lib/index';

describe('Collections table cell content', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CollectionsFlex.CellContent>Hello world</CollectionsFlex.CellContent>
    );
  });

  test('renders children', () => {
    expect(wrapper.text()).toEqual('Hello world');
  });

  test('adding a allow overflow modifier', () => {
    wrapper.setProps({ allowOverflow: true });
    expect(
      wrapper.hasClass('collections-flex__cell-content--allow-overflow')
    ).toEqual(true);
  });
});
