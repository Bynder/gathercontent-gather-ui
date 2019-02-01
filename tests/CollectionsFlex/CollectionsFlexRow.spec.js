import { React, shallow } from '../setup';
import { CollectionsFlex } from '../../lib/index';

describe('Collections table row', () => {
  let wrapper;
  const onClick = () => {};

  beforeEach(() => {
    wrapper = shallow(
      <CollectionsFlex.Row onClick={onClick}>Hello world</CollectionsFlex.Row>
    );
  });

  test('renders children', () => {
    expect(wrapper.text()).toEqual('Hello world');
  });

  test('sharing props', () => {
    expect(wrapper.prop('onClick')).toEqual(onClick);
  });

  test('adds selected modifier', () => {
    wrapper.setProps({ selected: true });
    expect(wrapper.hasClass('collections-flex__row--selected')).toBe(true);
  });

  test('adds disabled modifier', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.hasClass('collections-flex__row--disabled')).toBe(true);
  });
});
