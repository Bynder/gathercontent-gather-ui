import { React, shallow } from '../setup';
import { Avatar } from '../../lib';

describe('AvatarGroup', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Avatar
        initials="AE"
        name="Angus Edwardson"
        className="avatar--has-toggle"
        isHighlighted
        isOffline
      />
    );
  });

  afterEach(() => {});

  test('renders the className prop', () => {
    expect(wrapper.hasClass('avatar--has-toggle')).toBe(true);
  });

  test('adds a highlighted BEM modifier', () => {
    expect(wrapper.hasClass('avatar--highlighted')).toBe(true);
  });

  test('adds an offline BEM modifier', () => {
    expect(wrapper.hasClass('avatar--offline')).toBe(true);
  });

  test('renders an avatar image', () => {
    expect(wrapper.find('img')).toHaveLength(0);
    wrapper.setProps({ url: 'url/to/avatar' });
    expect(wrapper.find('img')).toHaveLength(1);
  });

  test('renders the users initials', () => {
    expect(wrapper.text()).toEqual('AE');
  });

  test('adds a box shadow based on the colour prop', () => {
    expect(wrapper.prop('style')).toEqual({});
    wrapper.setProps({ colour: 'red' });
    expect(wrapper.prop('style')).toEqual({
      boxShadow: `0 0 0 2px white, 0 0 0 3px red, 0 0 0 5px white`
    });
  });
});
