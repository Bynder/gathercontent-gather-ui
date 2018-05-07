import { React, shallow } from '../setup';
import { List, ListItem } from '../../lib';
import Button from '../../lib/Button';

describe.only('List Item', () => {
  let wrapper;

  const mockAction = <button>test button</button>;

  beforeEach(() => {
    wrapper = shallow(
      <ListItem action={mockAction} isCurrent>
        <List>
          <ListItem>Hello world</ListItem>
        </List>
      </ListItem>
    );
  });

  afterEach(() => {});

  test('adds classes per prop', () => {
    expect(wrapper.hasClass('has-action')).toEqual(true);
    expect(wrapper.hasClass('has-actions')).toEqual(true);
    expect(wrapper.hasClass('is-current')).toEqual(true);
  });

  test('adds a is-active class to the toggle children button', () => {
    expect(wrapper.find(Button).hasClass('is-active')).toEqual(false);
    wrapper.setState({ showSubList: true });
    expect(wrapper.find(Button).hasClass('is-active')).toEqual(true);
  });

  test('toggles state.shouldChildren from false to true', () => {
    expect(wrapper.find(Button)).toHaveLength(1);

    wrapper.find(Button).prop('clickHandler')();
    expect(wrapper.state('showSubList')).toEqual(true);
    wrapper.find(Button).prop('clickHandler')();
    expect(wrapper.state('showSubList')).toEqual(false);

    wrapper.setProps({ children: null });
    expect(wrapper.find(Button)).toHaveLength(0);
  });

  test('renders children', () => {
    expect(wrapper.contains('Hello world')).toEqual(true);
  });

  test('renders an action', () => {
    expect(
      wrapper
        .find('.list__action')
        .first()
        .contains('test button')
    ).toEqual(true);
  });
});
