import { React, mount } from '../setup';
import { TagUserForm, ExpandingTextArea } from '../../lib';
import TagUserFormActions from '../../lib/TagUserForm/TagUserFormActions';
import TagUserFormUsers from '../../lib/TagUserForm/Users/TagUserFormUsers';

describe('Tag User Form', () => {
  let wrapper;
  let onSubmitSpy;
  let onCancelSpy;
  let onInputChangeSpy;

  jest.useFakeTimers();

  beforeEach(() => {
    onSubmitSpy = jest.fn();
    onCancelSpy = jest.fn();
    onInputChangeSpy = jest.fn();
    wrapper = mount(
      <TagUserForm
        placeholder="text"
        onSubmit={onSubmitSpy}
        onCancel={onCancelSpy}
        onInputChange={onInputChangeSpy}
        users={[]}
      />
    );
  });

  test('sets the initial state', () => {
    expect(wrapper.state('inputValue')).toEqual('');
  });

  test('calls props.onSubmit', () => {
    wrapper.find('form').simulate('submit');
    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
  });

  test('calls props.onCancel', () => {
    wrapper.instance().cancelComment();
    expect(onCancelSpy).toHaveBeenCalledTimes(1);
  });

  test('renders TagUserFormUsers (with correct props)', () => {
    wrapper.setProps({ users: [{ name: 'mr waffle', display: 'waffle' }] });
    wrapper.setProps({
      lockedUsers: [{ name: 'mr bagels', display: 'bagels' }]
    });
    wrapper.setState({
      addedUsers: [{ name: 'mr doughnut', display: 'doughnut' }]
    });
    const users = wrapper.find(TagUserFormUsers);
    expect(users).toHaveLength(1);
    expect(users.prop('addUser')).toEqual(wrapper.instance().onAddUser);
    expect(users.prop('removeUser')).toEqual(wrapper.instance().onRemoveUser);
    expect(users.prop('users')).toEqual([
      { name: 'mr waffle', display: 'waffle' }
    ]);
    expect(users.prop('addedUsers')).toEqual([
      { name: 'mr doughnut', display: 'doughnut' }
    ]);
    expect(users.prop('lockedUsers')).toEqual([
      { name: 'mr bagels', display: 'bagels' }
    ]);
  });

  test('renders ExpandingTextArea (with correct props)', () => {
    let input = wrapper.find(ExpandingTextArea);
    expect(input).toHaveLength(1);
    expect(input.prop('handleOnChange')).toEqual(
      wrapper.instance().updateInputValue
    );
    expect(input.prop('focusOnMount')).toEqual(false);
    expect(input.prop('value')).toEqual('');

    wrapper.setState({ inputValue: 'test' });
    wrapper.update();
    input = wrapper.find(ExpandingTextArea);
    expect(input.prop('value')).toEqual('test');
    expect(input.prop('setValue')).toEqual(true);
    expect(input.prop('minRows')).toEqual(3);
  });

  test('renders TagUserFormActions (with correct props)', () => {
    wrapper.setProps({ value: 'test' });
    const actions = wrapper.find(TagUserFormActions);
    expect(actions).toHaveLength(1);
    expect(actions.prop('onSubmit')).toEqual(wrapper.instance().onSubmit);
    expect(actions.prop('onCancel')).toEqual(wrapper.instance().cancelComment);
  });

  test('updates the input value', () => {
    wrapper.instance().updateInputValue({ target: { value: 'test 2' } });
    expect(wrapper.state('inputValue')).toEqual('test 2');
    expect(onInputChangeSpy).toHaveBeenCalledWith('test 2');
  });

  test('disables the submit button until there is a user tagged and the input has value', () => {
    expect(wrapper.find(TagUserFormActions).prop('disableSubmit')).toEqual(
      true
    );
    wrapper.setState({ inputValue: 'test' });
    wrapper.instance().forceUpdate();
    wrapper.update();
    expect(wrapper.find(TagUserFormActions).prop('disableSubmit')).toEqual(
      true
    );
    wrapper.setState({ addedUsers: [{ name: 'hi' }] });
    wrapper.instance().forceUpdate();
    wrapper.update();
    expect(wrapper.find(TagUserFormActions).prop('disableSubmit')).toEqual(
      false
    );
  });

  test('adds a user', () => {
    expect(wrapper.state('addedUsers')).toEqual([]);
    wrapper.instance().onAddUser({ name: 'mr waffle', display: 'waffle' });
    jest.runOnlyPendingTimers();
    expect(wrapper.state('addedUsers')).toEqual([
      { name: 'mr waffle', display: 'waffle' }
    ]);
  });

  test('removes a user', () => {
    wrapper
      .instance()
      .onAddUser({ name: 'mr waffle', display: 'waffle', id: 1 });
    jest.runOnlyPendingTimers();
    expect(wrapper.state('addedUsers')).toEqual([
      { name: 'mr waffle', display: 'waffle', id: 1 }
    ]);
    wrapper
      .instance()
      .onRemoveUser({ name: 'mr waffle', display: 'waffle', id: 1 });

    jest.runOnlyPendingTimers();
    expect(wrapper.state('addedUsers')).toEqual([]);
  });

  test('filters already added users user', () => {
    const users = [
      { name: 'mr waffle', display: 'waffle', id: 1 },
      { name: 'mr doughnut', display: 'doughnut', id: 2 },
      { name: 'mr bagels', display: 'bagels', id: 3 }
    ];
    wrapper.setProps({ users });
    wrapper.setProps({ lockedUsers: [users[0]] });
    let usersComponent = wrapper.find(TagUserFormUsers);
    expect(usersComponent.prop('users')).toEqual([users[1], users[2]]);
    expect(wrapper.state('addedUsers')).toEqual([]);
    wrapper.instance().onAddUser(users[2]);
    jest.runOnlyPendingTimers();
    wrapper.update();
    usersComponent = wrapper.find(TagUserFormUsers);
    expect(usersComponent.prop('users')).toEqual([users[1]]);
  });
});
