import { React, shallow } from '../setup';
import SelectionBarDivider from '../../lib/SelectionBar/SelectionBarDivider';

describe('SelectionBarDivider', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SelectionBarDivider />);
  });

  test('renders a div with the correct classname', () => {
    expect(wrapper.find('div.selection-bar__divider')).toHaveLength(1);
  });
});
