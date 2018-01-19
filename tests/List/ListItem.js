import { React, shallow } from '../setup';
import { ListItem } from '../../lib';
import Button from '../../lib/Button';

describe('List Item', () => {
  let wrapper;

  const mockAction = <button>test button</button>;

  beforeEach(() => {
    wrapper = shallow(
      <ListItem
        title="title text"
        indicator="indicator"
        label="label text"
        action={mockAction}
        isCurrent
      >
        <ListItem title="title" />
      </ListItem>
    );
  });

  afterEach(() => {});

  test('adds classes per prop', () => {
    expect(wrapper.hasClass('has-indicator')).toEqual(true);
    expect(wrapper.hasClass('has-label')).toEqual(true);
    expect(wrapper.hasClass('has-action')).toEqual(true);
    expect(wrapper.hasClass('has-children')).toEqual(true);
    expect(wrapper.hasClass('is-current')).toEqual(true);
  });

  test('adds a is-active class to the toggle children button', () => {
    expect(wrapper.find(Button).hasClass('is-active')).toEqual(false);
    wrapper.setState({ showChildren: true });
    expect(wrapper.find(Button).hasClass('is-active')).toEqual(true);
  });

  test('toggles state.shouldChildren from false to true', () => {
    expect(wrapper.find(Button)).toHaveLength(1);

    wrapper.find(Button).prop('clickHandler')();
    expect(wrapper.state('showChildren')).toEqual(true);
    wrapper.find(Button).prop('clickHandler')();
    expect(wrapper.state('showChildren')).toEqual(false);

    wrapper.setProps({ children: null });
    expect(wrapper.find(Button)).toHaveLength(0);
  });

  test('renders the title', () => {
    expect(wrapper.find('.list__item-title').contains('title text')).toEqual(
      true
    );
  });

  test('renders an indicator', () => {
    expect(wrapper.find('.list__item-indicator').contains('indicator')).toEqual(
      true
    );
  });

  test('renders an label', () => {
    expect(wrapper.find('.list__item-label').contains('label text')).toEqual(
      true
    );
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
