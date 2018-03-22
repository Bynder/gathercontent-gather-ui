import { React, mount } from '../setup';
import CurrentUserList from '../../lib/UserList/CurrentUserList';
import Avatar from '../../lib/Avatar';

describe('UserList CurrentUserList', () => {
  let wrapper;
  let mockAssignees;
  let removeAssigneeSpy;
  let toggleSearchSpy;

  beforeEach(() => {
    removeAssigneeSpy = jest.fn();
    toggleSearchSpy = jest.fn();

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
      <CurrentUserList
        currentUsers={mockAssignees}
        emptyText="Nuffin here"
        removeUser={removeAssigneeSpy}
        removeUserText="Remove"
        toggleSearch={toggleSearchSpy}
        emptyTextButton="waffles"
        currentUsersHeading="heading wow"
        showUserControls
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

  test('should render the empty text if there are no currentUsers', () => {
    wrapper.setProps({ currentUsers: [] });
    expect(wrapper.find('.userlist__list')).toHaveLength(0);
    expect(wrapper.find('.userlist__empty')).toHaveLength(1);
  });

  test('hides the correct parts of the UI if showUserControls is false', () => {
    expect(
      wrapper
        .find(Avatar)
        .first()
        .prop('additional')
    ).not.toEqual('');
    wrapper.setProps({ currentUsers: [] });
    expect(wrapper.find('.userlist__empty-button')).toHaveLength(1);
    wrapper.setProps({ showUserControls: false });
    expect(wrapper.find('.userlist__empty-button')).toHaveLength(0);
    wrapper.setProps({ currentUsers: mockAssignees });
    expect(
      wrapper
        .find(Avatar)
        .first()
        .prop('additional')
    ).toEqual('');
  });
});
