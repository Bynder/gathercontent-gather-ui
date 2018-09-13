import { React, shallow } from '../setup';
import { Icon, Button, TooltipWrapper } from '../../lib';
import TagUserFormUser from '../../lib/TagUserForm/Users/TagUserFormUser';

describe('Tag User Form Users', () => {
  let wrapper;
  let removeUserSpy;

  const user = { name: 'mr doughnut', display: 'doughnut', id: 2 };

  beforeEach(() => {
    removeUserSpy = jest.fn();
    wrapper = shallow(
      <TagUserFormUser
        user={user}
        removeUser={removeUserSpy}
        isLocked={false}
        lockedUserTooltip="Locked!"
      />
    );
  });

  test('renders a user', () => {
    expect(wrapper.find(TooltipWrapper)).toHaveLength(0);
    expect(wrapper.find(Icon).prop('name')).toEqual('cross');
    expect(wrapper.find('.taguser-form__user')).toHaveLength(1);
    expect(wrapper.find('.taguser-form__user').text()).toEqual(
      'mr doughnut<Button />'
    );
    wrapper.find(Button).prop('clickHandler')();
    expect(removeUserSpy).toHaveBeenCalledWith(user);
  });

  test('renders a locked user', () => {
    wrapper.setProps({ isLocked: true });
    expect(wrapper.find(TooltipWrapper).prop('tooltipText')).toEqual('Locked!');
    expect(wrapper.find(Button)).toHaveLength(0);
    expect(wrapper.find(Icon).prop('name')).toEqual('lock');
    expect(wrapper.find('.taguser-form__user.is-locked')).toHaveLength(1);
    expect(wrapper.find('.taguser-form__user.is-locked').text()).toEqual(
      'mr doughnut <Icon />'
    );
  });
});
