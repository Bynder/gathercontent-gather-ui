import { React, shallow } from '../setup';
import { Tabs, Icon } from '../../lib';

describe('Tabs Options', () => {
  const mockOptions = [
    {
      name: 'Edit',
      action: () => {}
    }
  ];
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Tabs.Options options={mockOptions} />);
  });

  test('renders a DropdownMenu component', () => {
    expect(wrapper.prop('type')).toEqual('icon-only');
    expect(wrapper.prop('items')).toEqual(mockOptions);
  });

  test('renders an Icon and a container span component', () => {
    expect(wrapper.find('.tabs__options')).toHaveLength(1);
    expect(wrapper.find(Icon)).toHaveLength(1);
  });
});
