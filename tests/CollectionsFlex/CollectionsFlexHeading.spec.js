import { React, shallow } from '../setup';
import { CollectionsFlex } from '../../lib/index';

describe('Collections table heading', () => {
  let wrapper;
  const onClick = () => {};

  beforeEach(() => {
    wrapper = shallow(
      <CollectionsFlex.Heading onClick={onClick} className="test">
        Hello world
      </CollectionsFlex.Heading>
    );
  });

  test('renders children', () => {
    expect(
      wrapper
        .find(CollectionsFlex.CellContent)
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
