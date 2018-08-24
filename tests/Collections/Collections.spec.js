import { React, shallow } from '../setup';
import { Collections } from '../../lib/';

describe('Collections', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Collections>Hello world</Collections>);
  });

  test('renders a wrapper with an input', () => {
    expect(wrapper.text()).toEqual('Hello world');
  });
});
