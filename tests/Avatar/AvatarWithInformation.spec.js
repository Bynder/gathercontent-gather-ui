import { React, shallow } from '../setup';
import { Avatar, AvatarWithInformation } from '../../lib';

describe('AvatarGroup', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <AvatarWithInformation
        initials="WW"
        name="Waffle McWaffleson"
        email="waffles@waffletown.com"
        className="custom-class"
        colour="#000000"
        url="url/to/avatar"
        isHighlighted
        isOffline
        smallSize
      />
    );
  });

  afterEach(() => {});

  test('renders the className prop', () => {
    expect(wrapper.hasClass('custom-class')).toBe(true);
  });

  test('adds an offline BEM modifier', () => {
    expect(wrapper.hasClass('avatar--offline')).toBe(true);
  });

  test('adds an small BEM modifier', () => {
    expect(wrapper.hasClass('avatar__with-text--size-sm')).toBe(true);
  });

  test('renders an Avatar', () => {
    expect(wrapper.find(Avatar)).toHaveLength(1);
    expect(wrapper.find(Avatar).prop('colour')).toEqual('#000000');
    expect(wrapper.find(Avatar).prop('name')).toEqual('Waffle McWaffleson');
    expect(wrapper.find(Avatar).prop('url')).toEqual('url/to/avatar');
    expect(wrapper.find(Avatar).prop('initials')).toEqual('WW');
    expect(wrapper.find(Avatar).prop('isHighlighted')).toEqual(true);
    expect(wrapper.find(Avatar).prop('isOffline')).toEqual(true);
    expect(wrapper.find(Avatar).prop('email')).toEqual(
      'waffles@waffletown.com'
    );
  });

  test('renders the users name', () => {
    expect(wrapper.find('.avatar__name').text()).toEqual('Waffle McWaffleson');
  });

  test('renders the users email', () => {
    expect(wrapper.find('.avatar__email').text()).toEqual(
      'waffles@waffletown.com'
    );
  });
});
