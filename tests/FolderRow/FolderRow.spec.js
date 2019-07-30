import { React, shallow } from '../setup';
import { FolderRow } from '../../lib/FolderRow';

describe('FolderRow', () => {
  test('rendering folder name', () => {
    const wrapper = shallow(<FolderRow>folder name</FolderRow>);

    expect(wrapper.text()).toEqual('folder name');
  });

  test('rendering meta', () => {
    const wrapper = shallow(
      <FolderRow metaText={<p>meta</p>}>folder name</FolderRow>
    );

    expect(wrapper.find('p').text()).toEqual('meta');
  });

  test('rendering actions', () => {
    const wrapper = shallow(
      <FolderRow actions={<p>actions</p>}>folder name</FolderRow>
    );

    expect(wrapper.find('p').text()).toEqual('actions');
  });
});
