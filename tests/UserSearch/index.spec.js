import { React, shallow } from '../setup';
import { PureUserSearch } from '../../lib/UserSearch';
import UserSearchHead from '../../lib/UserSearch/UserSearchHead';
import UserSearchList from '../../lib/UserSearch/UserSearchList';

describe('User Search', () => {
  let wrapper;
  let addUserSpy;
  let onToggleSpy;

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
    searchHeading: 'Search me!',
    subheading: 'please search i have kids to feed',
    useDisplayToggle: true
  };

  beforeEach(() => {
    addUserSpy = jest.fn();
    onToggleSpy = jest.fn();
    const ref = React.createRef();
    wrapper = shallow(
      <PureUserSearch
        addUser={addUserSpy}
        ref={ref}
        onToggle={onToggleSpy}
        {...props}
      />
    );
  });

  test('renders a UserSearchHead', () => {
    expect(wrapper.find(UserSearchHead)).toHaveLength(1);
    expect(wrapper.find(UserSearchHead).prop('searchHeading')).toEqual(
      props.searchHeading
    );
    expect(wrapper.find(UserSearchHead).prop('subheading')).toEqual(
      props.subheading
    );
    expect(wrapper.find(UserSearchHead).prop('useDisplayToggle')).toEqual(
      props.useDisplayToggle
    );
    expect(wrapper.find(UserSearchHead).prop('toggleListDisplay')).toEqual(
      wrapper.instance().toggleListDisplay
    );
    expect(wrapper.find(UserSearchHead).prop('toggleActive')).toEqual(
      wrapper.state('displayList')
    );
  });

  test('renders an input to search', () => {
    expect(wrapper.find('.user-search__search-input')).toHaveLength(1);
    expect(wrapper.find('.user-search__search-input').prop('onChange')).toEqual(
      wrapper.instance().searchForUsers
    );
  });

  test('returns the correct filtered users', () => {
    wrapper.instance().searchForUsers({ target: { value: 'saul' } });
    expect(wrapper.state('users')).toEqual([users[0]]);
    wrapper.instance().searchForUsers({ target: { value: 'gOo' } });
    expect(wrapper.state('users')).toEqual([users[0]]);
    wrapper.instance().searchForUsers({ target: { value: 'jessepi' } });
    expect(wrapper.state('users')).toEqual([users[1]]);
    wrapper.instance().searchForUsers({ target: { value: ' ' } });
    expect(wrapper.state('users')).toEqual(users);
    wrapper.instance().searchForUsers({ target: { value: 'Jesse' } });
    expect(wrapper.state('users')).toEqual([users[1]]);
    wrapper.instance().searchForUsers({ target: { value: 'Jesse Pin' } });
    expect(wrapper.state('users')).toEqual([users[1]]);
    wrapper.instance().searchForUsers({ target: { value: 'floop' } });
    expect(wrapper.state('users')).toEqual([]);
    wrapper.setProps({ displayEmail: true });
    wrapper.instance().searchForUsers({ target: { value: 'he' } });
    expect(wrapper.state('users')).toEqual(users);
    wrapper.instance().searchForUsers({ target: { value: 'HEythere@l' } });
    expect(wrapper.state('users')).toEqual([users[1]]);
  });

  test('renders a UserSearchList', () => {
    expect(wrapper.find(UserSearchList)).toHaveLength(1);
    expect(wrapper.find(UserSearchList).prop('users')).toEqual(
      wrapper.state('users')
    );
    expect(wrapper.find(UserSearchList).prop('noUsers')).toEqual(false);
    expect(wrapper.find(UserSearchList).prop('addUser')).toEqual(addUserSpy);
  });

  test('hides the input and UserSearchList', () => {
    wrapper.instance().toggleListDisplay();
    expect(wrapper.find(UserSearchList)).toHaveLength(0);
    expect(wrapper.find('.user-search__search-input')).toHaveLength(0);
    expect(onToggleSpy).toHaveBeenCalled();
  });
});
