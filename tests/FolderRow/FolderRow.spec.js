import { React, shallow } from '../setup';
import { FolderRow, Button } from '../../lib';

describe('FolderRow', () => {
  const props = {
    name: 'folder name'
  };

  test('rendering folder name', () => {
    const wrapper = shallow(<FolderRow {...props} />);

    expect(wrapper.text()).toEqual('folder name');
  });

  test('rendering meta', () => {
    const wrapper = shallow(<FolderRow {...props} metaText={<p>meta</p>} />);

    expect(wrapper.find('p').text()).toEqual('meta');
  });

  test('rendering actions', () => {
    const wrapper = shallow(<FolderRow {...props} actions={<p>actions</p>} />);

    expect(wrapper.find('p').text()).toEqual('actions');
  });

  test('showing the toggle action', () => {
    const wrapper = shallow(<FolderRow {...props} />);

    expect(wrapper.find(Button)).toHaveLength(0);
    wrapper.setProps({ showToggle: true });
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  test('rendering the folder contents', () => {
    const wrapper = shallow(
      <FolderRow {...props} showToggle>
        <p>Hello world</p>
      </FolderRow>
    );
    expect(wrapper.find('p')).toHaveLength(0);
    wrapper.find(Button).simulate('click');
    expect(wrapper.find('p')).toHaveLength(1);
  });
});
