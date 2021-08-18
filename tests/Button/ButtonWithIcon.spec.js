import { React, shallow } from '../setup';
import { Button, Icon, ButtonWithIcon, Dropdown } from '../../lib';

describe('ButtonWithIcon', () => {
  let wrapper;
  let mainClickHandlerSpy;
  let iconClickHandlerSpy;

  beforeEach(() => {
    mainClickHandlerSpy = jest.fn();
    iconClickHandlerSpy = jest.fn();

    wrapper = shallow(
      <ButtonWithIcon
        mainClickHandler={mainClickHandlerSpy}
        iconClickHandler={iconClickHandlerSpy}
        iconName="save"
      >
        <span className="child">hi!</span>
      </ButtonWithIcon>
    );
  });

  test('renders 2 buttons', () => {
    expect(wrapper.find(Button)).toHaveLength(2);
    expect(
      wrapper
        .find(Button)
        .first()
        .prop('clickHandler')
    ).toEqual(mainClickHandlerSpy);
    expect(
      wrapper
        .find(Button)
        .last()
        .prop('clickHandler')
    ).toEqual(iconClickHandlerSpy);
  });

  test('renders the child', () => {
    expect(wrapper.find('.child')).toHaveLength(1);
  });

  test('renders an icon', () => {
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper.find(Icon).prop('name')).toEqual('save');
  });

  test('adds a size-sm class', () => {
    wrapper.setProps({ sizeSm: true });
    expect(wrapper.hasClass('button__wrapper--size-sm')).toBe(true);
  });

  test('disables the buttons', () => {
    expect(
      wrapper
        .find(Button)
        .first()
        .prop('disabled')
    ).toEqual(false);
    expect(
      wrapper
        .find(Button)
        .last()
        .prop('disabled')
    ).toEqual(false);
    wrapper.setProps({ disableMain: true });
    expect(
      wrapper
        .find(Button)
        .first()
        .prop('disabled')
    ).toEqual(true);
    wrapper.setProps({ disableMain: false, disableIcon: true });
    expect(
      wrapper
        .find(Button)
        .last()
        .prop('disabled')
    ).toEqual(true);
    wrapper.setProps({ disableMain: false, disableIcon: false });
    expect(
      wrapper
        .find(Button)
        .first()
        .prop('disabled')
    ).toEqual(false);
    expect(
      wrapper
        .find(Button)
        .last()
        .prop('disabled')
    ).toEqual(false);
    wrapper.setProps({ disableBoth: true });
    expect(
      wrapper
        .find(Button)
        .first()
        .prop('disabled')
    ).toEqual(true);
    expect(
      wrapper
        .find(Button)
        .last()
        .prop('disabled')
    ).toEqual(true);
  });

  test('can render a dropdown', () => {
    wrapper.setProps({
      dropdownContent: (
        <Dropdown.Content collapse right>
          <Dropdown.Action action={() => {}}>Do this</Dropdown.Action>
          <Dropdown.Action action={() => {}}>or this!</Dropdown.Action>
        </Dropdown.Content>
      )
    });
    expect(wrapper.find(Dropdown)).toHaveLength(1);
    expect(wrapper.find(Dropdown.Content)).toHaveLength(1);
    expect(wrapper.find(Dropdown.Action)).toHaveLength(2);
  });
});
