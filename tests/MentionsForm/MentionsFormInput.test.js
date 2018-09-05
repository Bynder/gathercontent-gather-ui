import { MentionsInput } from 'react-mentions';
import { React, mount } from '../setup';
import MentionFormInput from '../../lib/MentionsForm/MentionsFormInput';
import MentionsFormSearch from '../../lib/MentionsForm/MentionsFormSearch';

describe('Mentions Form Input', () => {
  let wrapper;
  let handleOnFocusSpy;

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
    wrapper = mount(
      <MentionFormInput
        inputValue="waffles"
        placeholder="wafflet"
        handleOnChange={() => {}}
        handleOnFocus={handleOnFocusSpy}
        focusOnMount={false}
        onRowCountChange={() => {}}
        users={users}
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

  test('renders a MentionsFormSearch', () => {
    expect(wrapper.find(MentionsFormSearch)).toHaveLength(1);
    expect(wrapper.find(MentionsFormSearch).prop('users')).toEqual(users);
    expect(wrapper.find(MentionsFormSearch).prop('addMention')).toEqual(
      wrapper.instance().addMention
    );
  });
});
