import { React, shallow } from '../setup';
import { ItemRow } from '../../lib';

describe('Item Row', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ItemRow>Hello world</ItemRow>);
  });

  afterEach(() => {});

  test('renders children', () => {
    expect(wrapper.text()).toEqual('Hello world');
  });
});
