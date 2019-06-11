import { React, shallow } from '../setup';
import { UserSearchDropdown, Dropdown, UserSearch, Icon } from '../../lib';

describe('User Search Dropdown', () => {
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

  beforeEach(() => {
    addUserSpy = jest.fn();
    wrapper = shallow(
      <UserSearchDropdown
        addUser={addUserSpy}
        users={users}
        displayEmail={false}
        dropdownAutoPosition
      />
    );
  });

  test('renders a Dropdown and a UserSearch', () => {
    expect(wrapper.find(Dropdown)).toHaveLength(1);
    expect(wrapper.find(Dropdown).prop('onToggle')).toEqual(
      wrapper.instance().focusSearch
    );
    expect(wrapper.find(Dropdown.Trigger)).toHaveLength(1);
    expect(wrapper.find(UserSearch)).toHaveLength(1);
    expect(wrapper.find(UserSearch).prop('users')).toEqual(users);
    expect(wrapper.find(UserSearch).prop('addUser')).toEqual(addUserSpy);
    expect(wrapper.find(UserSearch).prop('displayEmail')).toEqual(false);
  });

  test('uses the addPerson icon by default but uses the at icon if useAtIcon is true', () => {
    expect(wrapper.find(Icon).prop('name')).toEqual('addPerson');
    wrapper.setProps({ useAtIcon: true });
    expect(wrapper.find(Icon).prop('name')).toEqual('at');
  });
});
