import { React, mount } from '../setup';
import OtherUserList from '../../lib/UserList/OtherUserList';
import Avatar from '../../lib/Avatar';

describe('UserList OtherUserList', () => {
  let wrapper;
  let mockAssignees;

  beforeEach(() => {
    mockAssignees = [
      {
        id: 2,
        name: 'Bruce Banner',
        initials: 'BB',
        avatar: 'http://fakeavatar',
        colour: '#3D8AEB',
        isPresent: true
      },
      {
        id: 5,
        name: 'Lynda Carter',
        initials: 'LC',
        colour: '',
        isPresent: false
      }
    ];

    wrapper = mount(
      <OtherUserList
        otherUsers={mockAssignees}
        otherUsersHeading="heading wow"
      />
    );
  });

  test('should render the correct amount of Avatars', () => {
    expect(wrapper.find(Avatar)).toHaveLength(2);
    expect(
      wrapper
        .find(Avatar)
        .first()
        .prop('url')
    ).toEqual(mockAssignees[0].avatar);
    expect(
      wrapper
        .find(Avatar)
        .first()
        .prop('initials')
    ).toEqual(mockAssignees[0].initials);
    expect(
      wrapper
        .find(Avatar)
        .first()
        .prop('isOffline')
    ).toEqual(!mockAssignees[0].isPresent);
  });
});
