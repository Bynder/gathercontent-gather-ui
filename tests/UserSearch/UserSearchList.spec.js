import { React, shallow } from '../setup';
import { Dropdown, Avatar, AvatarInformation } from '../../lib';
import UserSearchList from '../../lib/UserSearch/UserSearchList';

describe('User Search List', () => {
  let wrapper;
  let addUserSpy;

  const users = [
    {
      id: 'saul',
      display: 'saulgoodman',
      name: 'Saul Goodman',
      initials: 'SG',
      email: 'hellothere@lol.com'
    },
    {
      id: '456',
      display: 'jessepinkman',
      name: 'Jesse Pinkman',
      email: 'heythere@lol.com',
      initials: 'JP',
      avatar:
        'https://d3iw72m71ie81c.cloudfront.net/2eae47ef-6f37-46fe-a02b-52cff401a8f9-me.jpg'
    }
  ];
  const props = {
    users,
    displayEmail: true,
    selectedUserIds: [users[1].id],
    noUsers: false,
    noUserDisplay: 'oopsie no users',
    hideAfterPerformingAction: false
  };

  beforeEach(() => {
    addUserSpy = jest.fn();
    wrapper = shallow(<UserSearchList addUser={addUserSpy} {...props} />);
  });

  test('renders the correct amount of users', () => {
    expect(wrapper.find(Dropdown.Action)).toHaveLength(2);
    wrapper
      .find(Dropdown.Action)
      .first()
      .prop('action')();
    expect(addUserSpy).toHaveBeenCalledWith(users[0]);
    expect(
      wrapper
        .find(Dropdown.Action)
        .first()
        .prop('selected')
    ).toEqual(false);
    expect(
      wrapper
        .find(Dropdown.Action)
        .last()
        .prop('selected')
    ).toEqual(true);
    expect(wrapper.find(Avatar)).toHaveLength(2);
    expect(
      wrapper
        .find(Avatar)
        .last()
        .prop('url')
    ).toEqual(users[1].avatar);
    expect(wrapper.find(AvatarInformation)).toHaveLength(2);
    expect(
      wrapper
        .find(AvatarInformation)
        .last()
        .prop('email')
    ).toEqual(users[1].email);
  });

  test('renders no results text', () => {
    expect(wrapper.find('.no-results')).toHaveLength(0);
    wrapper.setProps({ users: [] });
    expect(wrapper.find('.no-results')).toHaveLength(1);
    expect(wrapper.find('.no-results').text()).toEqual(
      'Oops! No people found.'
    );
  });

  test('renders no users text', () => {
    expect(wrapper.find('.no-results')).toHaveLength(0);
    wrapper.setProps({ noUsers: true });
    expect(wrapper.find('.no-results')).toHaveLength(1);
    expect(wrapper.find('.no-results').text()).toEqual(props.noUserDisplay);
  });
});
