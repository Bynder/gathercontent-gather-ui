import { React, shallow } from '../setup';
import { UserSearchDropdown, Icon } from '../../lib';

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

  test('uses the addPerson icon by default but uses the at icon if useAtIcon is true', () => {
    expect(wrapper.find(Icon).prop('name')).toEqual('addPerson');
    wrapper.setProps({ useAtIcon: true });
    expect(wrapper.find(Icon).prop('name')).toEqual('at');
  });
});
