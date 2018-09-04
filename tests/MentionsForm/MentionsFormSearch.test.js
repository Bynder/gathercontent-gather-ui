import { React, shallow } from '../setup';
import MentionsFormSearch from '../../lib/MentionsForm/MentionsFormSearch';
import Dropdown from '../../lib/Dropdown';
import Avatar from '../../lib/Avatar';
import AvatarInformation from '../../lib/Avatar/AvatarInformation';

describe('Mentions Form Input', () => {
  let wrapper;
  let addMentionSpy;

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
    addMentionSpy = jest.fn();
    wrapper = shallow(
      <MentionsFormSearch addMention={addMentionSpy} users={users} />
    );
  });

  test('renders a Dropdown and a the correct amount of users', () => {
    expect(wrapper.find(Dropdown.ActionGroup)).toHaveLength(3);
    expect(wrapper.find('.mention-form__search-input')).toHaveLength(1);
    expect(
      wrapper.find('.mention-form__search-input').prop('onChange')
    ).toEqual(wrapper.instance().searchForUsers);
    expect(wrapper.find(Dropdown.Action)).toHaveLength(2);
    wrapper
      .find(Dropdown.Action)
      .first()
      .prop('action')();
    expect(addMentionSpy).toHaveBeenCalledWith('saul', 'saulgoodman');
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
    expect(
      wrapper
        .find(AvatarInformation)
        .last()
        .prop('name')
    ).toEqual(users[1].name);
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
