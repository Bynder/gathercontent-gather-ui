import { React, mount } from '../setup';
import { Avatar, AvatarGroup } from '../../lib';

describe('AvatarGroup', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <AvatarGroup maximum={3}>
        <Avatar
          email="poppycox@gmail.com"
          onlyInitials
          isAssigned
          fadedOut
          initials="MR"
          name="Mike Rotch"
        />
        <Avatar
          email="hugh@gmail.com"
          onlyInitials
          fadedOut
          initials="HJ"
          name="Hugh Jass"
        />
        <Avatar
          email="la@gmail.com"
          onlyInitials
          fadedOut
          initials="FD"
          name="Fedra Droid"
        />
        <Avatar
          email="la@gmail.com"
          onlyInitials
          fadedOut
          initials="KM"
          name="Kann Schemll"
        />
      </AvatarGroup>
    );
  });

  test('renders a single Avatar', () => {
    const mountedWrapper = mount(
      <AvatarGroup maximum={3}>
        <Avatar
          email="poppycox@gmail.com"
          onlyInitials
          isAssigned
          fadedOut
          initials="MR"
          name="Mike Rotch"
        />
      </AvatarGroup>
    );

    expect(mountedWrapper.find(Avatar).length).toEqual(1);
  });

  test('renders an AvatarGroup component', () => {
    expect(wrapper.find('[data-component="avatar-group"]')).toHaveLength(1);
  });

  test('renders the maximum specified size of individual Avatar components', () => {
    expect(wrapper.find(Avatar).length).toEqual(3);
  });

  test('renders a custom maximum specified size of individual Avatar components', () => {
    const customWrapper = mount(
      <AvatarGroup maximum={1}>
        <Avatar
          email="poppycox@gmail.com"
          onlyInitials
          isAssigned
          fadedOut
          initials="MR"
          name="Mike Rotch"
        />
        <Avatar
          email="hugh@gmail.com"
          onlyInitials
          fadedOut
          initials="HJ"
          name="Hugh Jass"
        />
        <Avatar
          email="la@gmail.com"
          onlyInitials
          fadedOut
          initials="FD"
          name="Fedra Droid"
        />
        <Avatar
          email="la@gmail.com"
          onlyInitials
          fadedOut
          initials="KM"
          name="Kann Schemll"
        />
      </AvatarGroup>
    );

    expect(customWrapper.find(Avatar).length).toEqual(1);
  });

  test('renders an extra component displaying the amount of people not shown', () => {
    const showMore = wrapper.find('[data-component="show-more-avatar"]');
    expect(showMore).toHaveLength(1);
    expect(showMore.text()).toEqual('+1');
    expect(showMore.hasClass('avatar--with-toggle')).toBe(true);
  });

  test('renders the remaining avatars once clicked on "Show more"', () => {
    const showMore = wrapper.find('[data-component="show-more-avatar"]');
    showMore.simulate('click');
    expect(wrapper.state().showExtra).toBe(true);
  });

  test('renders the initials for an Avatar when the prop is enabled', () => {
    const first = wrapper.find(Avatar).first();
    expect(first.find('.avatar__initials').length).toEqual(1);
    expect(first.find('.avatar__initials').text()).toEqual('MR');
  });

  test('sets the correct zindex style for the first and last item', () => {
    const customWrapper = mount(
      <AvatarGroup maximum={4}>
        <Avatar
          email="poppycox@gmail.com"
          onlyInitials
          isAssigned
          fadedOut
          initials="MR"
          name="Mike Rotch"
        />
        <Avatar
          email="hugh@gmail.com"
          onlyInitials
          fadedOut
          initials="HJ"
          name="Hugh Jass"
        />
        <Avatar
          email="la@gmail.com"
          onlyInitials
          fadedOut
          initials="FD"
          name="Fedra Droid"
        />
        <Avatar
          email="la@gmail.com"
          onlyInitials
          fadedOut
          initials="KM"
          name="Kann Schemll"
        />
      </AvatarGroup>
    );

    const first = customWrapper.find('.avatar-group__item').first();
    expect(first.prop('style')).toEqual({ zIndex: 4 });

    const last = customWrapper.find('.avatar-group__item').last();
    expect(last.prop('style')).toEqual({ zIndex: 1 });
  });

  test('adds a small modifier', () => {
    expect(wrapper.find('.avatar-group').hasClass('avatar-group--small')).toBe(
      false
    );
    wrapper.setProps({ small: true });
    wrapper.update();
    expect(wrapper.find('.avatar-group').hasClass('avatar-group--small')).toBe(
      true
    );
  });
});
