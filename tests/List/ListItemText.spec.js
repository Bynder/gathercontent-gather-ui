import { React, shallow } from '../setup';
import { ListItemText } from '../../lib';

describe('List Item Text', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ListItemText>Hello world</ListItemText>);
  });

  afterEach(() => {});

  test('renders children', () => {
    expect(wrapper.contains('Hello world')).toEqual(true);
  });
});
