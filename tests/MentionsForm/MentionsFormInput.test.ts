import { MentionsInput } from 'react-mentions';
import { React, mount } from '../setup';
import MentionFormInput from '../../lib/MentionsForm/MentionsFormInput';
import { UserSearchDropdown } from '../../lib';

describe('Mentions Form Input', () => {
  jest.useFakeTimers();
  let wrapper;
  let handleOnFocusSpy;
  let handleOnChangeSpy;

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
      url:
        'https://d3iw72m71ie81c.cloudfront.net/2eae47ef-6f37-46fe-a02b-52cff401a8f9-me.jpg'
    }
  ];

  beforeEach(() => {
    handleOnFocusSpy = jest.fn();
    handleOnChangeSpy = jest.fn();
    wrapper = mount(
      <MentionFormInput
        inputValue="waffles"
        placeholder="wafflet"
        handleOnChange={handleOnChangeSpy}
        handleOnFocus={handleOnFocusSpy}
        focusOnMount={false}
        onRowCountChange={() => {}}
        users={users}
        dropdownAutoTopPosition={false}
      />
    );
  });

  test('renders MentionsInput (with correct props)', () => {
    const input = wrapper.find(MentionsInput);
    expect(input).toHaveLength(1);
    expect(input.prop('onChange')).toEqual(wrapper.instance().handleChange);
    expect(input.prop('autoFocus')).toEqual(false);
    expect(input.prop('value')).toEqual('waffles');
    expect(input.prop('placeholder')).toEqual('wafflet');
    expect(input.prop('onFocus')).toEqual(handleOnFocusSpy);
    expect(input.prop('onBlur')).toEqual(handleOnFocusSpy);
    expect(input.prop('suggestionsPortalHost')).toEqual(null);
  });

  test('returns the correct filtered users', () => {
    let results = wrapper.instance().searchForUsers('saul');
    expect(results).toEqual([users[0]]);
    results = wrapper.instance().searchForUsers('pink');
    expect(results).toEqual([users[1]]);
    results = wrapper.instance().searchForUsers('waffle');
    expect(results).toEqual([]);
    results = wrapper.instance().searchForUsers('ood');
    expect(results).toEqual([]);
  });

  test('renders a UserSearchDropdown', () => {
    expect(wrapper.find(UserSearchDropdown)).toHaveLength(1);
    expect(wrapper.find(UserSearchDropdown).prop('users')).toEqual(users);
    expect(wrapper.find(UserSearchDropdown).prop('addUser')).toEqual(
      wrapper.instance().addMention
    );
  });

  test('adds default users', () => {
    wrapper.setProps({ defaultUsers: users, inputValue: '' });
    wrapper.instance().addDefaultUsers();
    jest.runAllTimers();
    expect(handleOnChangeSpy).toHaveBeenCalledTimes(2);
    expect(handleOnChangeSpy.mock.calls).toEqual([
      [{ target: { value: '@[saulgoodman] ' } }],
      [{ target: { value: '@[jessepinkman] ' } }]
    ]);
  });
});
