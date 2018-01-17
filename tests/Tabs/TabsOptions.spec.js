import { React, expect, shallow } from '../setup';
import { Tabs, Icon, DropdownMenu } from '../../lib';

describe('Tabs Options', () => {
  const mockOptions = [{
    name: 'Edit',
    action: () => {},
  }];
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Tabs.Options options={mockOptions} />);
  });

  it('renders a DropdownMenu component', () => {
    expect(wrapper.prop('type')).to.deep.equal(['icon-only']);
    expect(wrapper.prop('items')).to.deep.equal(mockOptions);
  });

  it('renders an Icon and a container span component', () => {
    expect(wrapper.find('.tabs__options')).to.have.length(1);
    expect(wrapper.find(Icon)).to.have.length(1);
  });
});
