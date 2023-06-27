import { React, mount } from '../setup';
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Avata... Remove this comment to see the full error message
import { Avatar, AvatarGroup } from '../../lib';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('AvatarGroup', () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = mount(
      // @ts-expect-error TS(2304): Cannot find name 'maximum'.
      <AvatarGroup maximum={3}>
        <Avatar
          // @ts-expect-error TS(2304): Cannot find name 'email'.
          email="poppycox@gmail.com"
          // @ts-expect-error TS(2304): Cannot find name 'onlyInitials'.
          onlyInitials
          // @ts-expect-error TS(2304): Cannot find name 'isAssigned'.
          isAssigned
          // @ts-expect-error TS(2304): Cannot find name 'fadedOut'.
          fadedOut
          // @ts-expect-error TS(2304): Cannot find name 'initials'.
          initials="MR"
          // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
          name="Mike Rotch"
        />
        <Avatar
          // @ts-expect-error TS(2304): Cannot find name 'email'.
          email="hugh@gmail.com"
          // @ts-expect-error TS(2304): Cannot find name 'onlyInitials'.
          onlyInitials
          // @ts-expect-error TS(2304): Cannot find name 'fadedOut'.
          fadedOut
          // @ts-expect-error TS(2304): Cannot find name 'initials'.
          initials="HJ"
          // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
          name="Hugh Jass"
        />
        <Avatar
          // @ts-expect-error TS(2304): Cannot find name 'email'.
          email="la@gmail.com"
          // @ts-expect-error TS(2304): Cannot find name 'onlyInitials'.
          onlyInitials
          // @ts-expect-error TS(2304): Cannot find name 'fadedOut'.
          fadedOut
          // @ts-expect-error TS(2304): Cannot find name 'initials'.
          initials="FD"
          // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
          name="Fedra Droid"
        />
        <Avatar
          // @ts-expect-error TS(2304): Cannot find name 'email'.
          email="la@gmail.com"
          // @ts-expect-error TS(2304): Cannot find name 'onlyInitials'.
          onlyInitials
          // @ts-expect-error TS(2304): Cannot find name 'fadedOut'.
          fadedOut
          // @ts-expect-error TS(2304): Cannot find name 'initials'.
          initials="KM"
          // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
          name="Kann Schemll"
        />
      </AvatarGroup>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders a single Avatar', () => {
    const mountedWrapper = mount(
      // @ts-expect-error TS(2304): Cannot find name 'maximum'.
      <AvatarGroup maximum={3}>
        <Avatar
          // @ts-expect-error TS(2304): Cannot find name 'email'.
          email="poppycox@gmail.com"
          // @ts-expect-error TS(2304): Cannot find name 'onlyInitials'.
          onlyInitials
          // @ts-expect-error TS(2304): Cannot find name 'isAssigned'.
          isAssigned
          // @ts-expect-error TS(2304): Cannot find name 'fadedOut'.
          fadedOut
          // @ts-expect-error TS(2304): Cannot find name 'initials'.
          initials="MR"
          // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
          name="Mike Rotch"
        />
      </AvatarGroup>
    );

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(mountedWrapper.find(Avatar).length).toEqual(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders an AvatarGroup component', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('[data-component="avatar-group"]')).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders an additional avatar for toggling', () => {
    const customWrapper = mount(
      // @ts-expect-error TS(2304): Cannot find name 'maximum'.
      <AvatarGroup maximum={1}>
        <Avatar
          // @ts-expect-error TS(2304): Cannot find name 'email'.
          email="poppycox@gmail.com"
          // @ts-expect-error TS(2304): Cannot find name 'onlyInitials'.
          onlyInitials
          // @ts-expect-error TS(2304): Cannot find name 'isAssigned'.
          isAssigned
          // @ts-expect-error TS(2304): Cannot find name 'fadedOut'.
          fadedOut
          // @ts-expect-error TS(2304): Cannot find name 'initials'.
          initials="MR"
          // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
          name="Mike Rotch"
        />
        <Avatar
          // @ts-expect-error TS(2304): Cannot find name 'email'.
          email="hugh@gmail.com"
          // @ts-expect-error TS(2304): Cannot find name 'onlyInitials'.
          onlyInitials
          // @ts-expect-error TS(2304): Cannot find name 'fadedOut'.
          fadedOut
          // @ts-expect-error TS(2304): Cannot find name 'initials'.
          initials="HJ"
          // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
          name="Hugh Jass"
        />
        <Avatar
          // @ts-expect-error TS(2304): Cannot find name 'email'.
          email="la@gmail.com"
          // @ts-expect-error TS(2304): Cannot find name 'onlyInitials'.
          onlyInitials
          // @ts-expect-error TS(2304): Cannot find name 'fadedOut'.
          fadedOut
          // @ts-expect-error TS(2304): Cannot find name 'initials'.
          initials="FD"
          // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
          name="Fedra Droid"
        />
        <Avatar
          // @ts-expect-error TS(2304): Cannot find name 'email'.
          email="la@gmail.com"
          // @ts-expect-error TS(2304): Cannot find name 'onlyInitials'.
          onlyInitials
          // @ts-expect-error TS(2304): Cannot find name 'fadedOut'.
          fadedOut
          // @ts-expect-error TS(2304): Cannot find name 'initials'.
          initials="KM"
          // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
          name="Kann Schemll"
        />
      </AvatarGroup>
    );

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(customWrapper.find(Avatar).length).toEqual(5);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders the initials for an Avatar when the prop is enabled', () => {
    const first = wrapper.find(Avatar).first();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(first.find('.avatar__initials').length).toEqual(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(first.find('.avatar__initials').text()).toEqual('MR');
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('sets the correct zindex style for the first and last item', () => {
    const customWrapper = mount(
      // @ts-expect-error TS(2304): Cannot find name 'maximum'.
      <AvatarGroup maximum={4}>
        <Avatar
          // @ts-expect-error TS(2304): Cannot find name 'email'.
          email="poppycox@gmail.com"
          // @ts-expect-error TS(2304): Cannot find name 'onlyInitials'.
          onlyInitials
          // @ts-expect-error TS(2304): Cannot find name 'isAssigned'.
          isAssigned
          // @ts-expect-error TS(2304): Cannot find name 'fadedOut'.
          fadedOut
          // @ts-expect-error TS(2304): Cannot find name 'initials'.
          initials="MR"
          // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
          name="Mike Rotch"
        />
        <Avatar
          // @ts-expect-error TS(2304): Cannot find name 'email'.
          email="hugh@gmail.com"
          // @ts-expect-error TS(2304): Cannot find name 'onlyInitials'.
          onlyInitials
          // @ts-expect-error TS(2304): Cannot find name 'fadedOut'.
          fadedOut
          // @ts-expect-error TS(2304): Cannot find name 'initials'.
          initials="HJ"
          // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
          name="Hugh Jass"
        />
        <Avatar
          // @ts-expect-error TS(2304): Cannot find name 'email'.
          email="la@gmail.com"
          // @ts-expect-error TS(2304): Cannot find name 'onlyInitials'.
          onlyInitials
          // @ts-expect-error TS(2304): Cannot find name 'fadedOut'.
          fadedOut
          // @ts-expect-error TS(2304): Cannot find name 'initials'.
          initials="FD"
          // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
          name="Fedra Droid"
        />
        <Avatar
          // @ts-expect-error TS(2304): Cannot find name 'email'.
          email="la@gmail.com"
          // @ts-expect-error TS(2304): Cannot find name 'onlyInitials'.
          onlyInitials
          // @ts-expect-error TS(2304): Cannot find name 'fadedOut'.
          fadedOut
          // @ts-expect-error TS(2304): Cannot find name 'initials'.
          initials="KM"
          // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
          name="Kann Schemll"
        />
      </AvatarGroup>
    );

    const first = customWrapper.find('.avatar-group__item').first();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(first.prop('style')).toEqual({ zIndex: 4 });

    const last = customWrapper.find('.avatar-group__item').last();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(last.prop('style')).toEqual({ zIndex: 1 });
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('adds a small modifier', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('.avatar-group').hasClass('avatar-group--small')).toBe(
      false
    );
    wrapper.setProps({ small: true });
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('.avatar-group').hasClass('avatar-group--small')).toBe(
      true
    );
  });
});
