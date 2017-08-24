import { React, expect, sinon, mount } from '../setup';
import Avatar from '../../lib/Avatar';
import AvatarGroup from '../../lib/AvatarGroup';

describe('AvatarGroup', () => {
  let wrapper;
  let showMoreSpy;

  beforeEach(() => {
    showMoreSpy = sinon.spy(AvatarGroup.prototype, 'showMore');
    wrapper = mount(
      <AvatarGroup maximum={3}>
        <Avatar email="poppycox@gmail.com" onlyInitials isAssigned fadedOut initials="MR" name="Mike Rotch" />
        <Avatar email="hugh@gmail.com" onlyInitials fadedOut initials="HJ" name="Hugh Jass" />
        <Avatar email="la@gmail.com" onlyInitials fadedOut initials="FD" name="Fedra Droid" />
        <Avatar email="la@gmail.com" onlyInitials fadedOut initials="KM" name="Kann Schemll" />
      </AvatarGroup>,
    );
  });

  afterEach(() => {
    showMoreSpy.restore();
  });

  it('renders a single Avatar', () => {
    const mountedWrapper = mount(
      <AvatarGroup maximum={3}>
        <Avatar email="poppycox@gmail.com" onlyInitials isAssigned fadedOut initials="MR" name="Mike Rotch" />
      </AvatarGroup>,
    );

    expect(mountedWrapper.find(Avatar).length).to.equal(1);
  });

  it('renders an AvatarGroup component', () => {
    expect(wrapper.find('[data-component="avatar-group"]')).to.have.length(1);
  });

  it('renders the maximum specified size of individual Avatar components', () => {
    expect(wrapper.find(Avatar).length).to.equal(3);
  });

  it('renders a custom maximum specified size of individual Avatar components', () => {
    const customWrapper = mount(
      <AvatarGroup maximum={1}>
        <Avatar email="poppycox@gmail.com" onlyInitials isAssigned fadedOut initials="MR" name="Mike Rotch" />
        <Avatar email="hugh@gmail.com" onlyInitials fadedOut initials="HJ" name="Hugh Jass" />
        <Avatar email="la@gmail.com" onlyInitials fadedOut initials="FD" name="Fedra Droid" />
        <Avatar email="la@gmail.com" onlyInitials fadedOut initials="KM" name="Kann Schemll" />
      </AvatarGroup>,
    );

    expect(customWrapper.find(Avatar).length).to.equal(1);
  });

  it('renders an extra component displaying the amount of people not shown', () => {
    const showMore = wrapper.find('[data-component="show-more-avatar"]');
    expect(showMore).to.have.length(1);
    expect(showMore.text()).to.equal('+1');
  });

  it('renders the remaining avatars once clicked on "Show more"', () => {
    const showMore = wrapper.find('[data-component="show-more-avatar"]');
    showMore.simulate('click');
    expect(wrapper.state().showExtra).to.equal(true);
    expect(showMoreSpy).to.have.been.called;
  });

  it('renders the initials for an Avatar when the prop is enabled', () => {
    const first = wrapper.find(Avatar).first();
    expect(first.find('.avatar__initials').length).to.equal(1);
    expect(first.find('.avatar__initials').text()).to.equal('MR');
  });

  it('sets the correct zindex style for the first and last item', () => {
    const customWrapper = mount(
      <AvatarGroup maximum={4}>
        <Avatar email="poppycox@gmail.com" onlyInitials isAssigned fadedOut initials="MR" name="Mike Rotch" />
        <Avatar email="hugh@gmail.com" onlyInitials fadedOut initials="HJ" name="Hugh Jass" />
        <Avatar email="la@gmail.com" onlyInitials fadedOut initials="FD" name="Fedra Droid" />
        <Avatar email="la@gmail.com" onlyInitials fadedOut initials="KM" name="Kann Schemll" />
      </AvatarGroup>,
    );

    const first = customWrapper.find('.avatar-group__item').first();
    expect(first.prop('style')).to.deep.equal({ zIndex: 4 });

    const last = customWrapper.find('.avatar-group__item').last();
    expect(last.prop('style')).to.deep.equal({ zIndex: 1 });
  });
});
