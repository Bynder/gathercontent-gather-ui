import { React, shallow } from '../setup';
import { UserSearch, Dropdown, Avatar, AvatarInformation } from '../../lib';

describe('User Search', () => {
  let wrapper;
  let addUserSpy;

  const users = [
    {
      id: 'saul',
      display: 'saulgoodman',
      name: 'Saul Goodman',
      initials: 'SG',
      email: 'heythere@lol.com'
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

  beforeEach(() => {
    addUserSpy = jest.fn();
    wrapper = shallow(
      <UserSearch addUser={addUserSpy} users={users} displayEmail={false} />
    );
  });

  test('renders a Dropdown and a the correct amount of users', () => {
    expect(wrapper.find(Dropdown)).toHaveLength(1);
    expect(wrapper.find(Dropdown).prop('onToggle')).toEqual(
      wrapper.instance().focusSearch
    );
    expect(wrapper.find(Dropdown.Trigger)).toHaveLength(1);
    expect(wrapper.find(Dropdown.ActionGroup)).toHaveLength(3);
    expect(wrapper.find('.user-search__search-input')).toHaveLength(1);
    expect(wrapper.find('.user-search__search-input').prop('onChange')).toEqual(
      wrapper.instance().searchForUsers
    );
    expect(wrapper.find(Dropdown.Action)).toHaveLength(2);
    wrapper
      .find(Dropdown.Action)
      .first()
      .prop('action')();
    expect(addUserSpy).toHaveBeenCalledWith(users[0]);
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
    ).toEqual(`@${users[1].display}`);
    expect(
      wrapper
        .find(AvatarInformation)
        .last()
        .prop('name')
    ).toEqual(users[1].name);
  });

  test('displays the email instead of the users display if displayEmail is true', () => {
    wrapper.setProps({ displayEmail: true });
    expect(
      wrapper
        .find(AvatarInformation)
        .last()
        .prop('email')
    ).toEqual(users[1].email);
  });

  test('returns the correct filtered users', () => {
    wrapper.instance().searchForUsers({ target: { value: 'saul' } });
    expect(wrapper.state('users')).toEqual([users[0]]);
    wrapper.instance().searchForUsers({ target: { value: 'jesse' } });
    expect(wrapper.state('users')).toEqual([users[1]]);
    wrapper.instance().searchForUsers({ target: { value: ' ' } });
    expect(wrapper.state('users')).toEqual(users);
  });

  test('renders a no results message', () => {
    wrapper.setState({ users: [] });
    expect(wrapper.find('.no-results')).toHaveLength(1);
  });
});
