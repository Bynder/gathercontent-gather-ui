import { React, expect, shallow } from '../setup';
import { ListItem } from '../../lib';
import Button from '../../lib/Button';

describe('List Item', () => {
  let wrapper;

  const mockAction = (
    <button>test button</button>
  );

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
      </ListItem>,
    );
  });

  afterEach(() => {});

  it('adds classes per prop', () => {
    expect(wrapper.hasClass('has-indicator')).to.equal(true);
    expect(wrapper.hasClass('has-label')).to.equal(true);
    expect(wrapper.hasClass('has-action')).to.equal(true);
    expect(wrapper.hasClass('has-children')).to.equal(true);
    expect(wrapper.hasClass('is-current')).to.equal(true);
  });

  it('adds a is-active class to the toggle children button', () => {
    expect(wrapper.find(Button).hasClass('is-active')).to.equal(false);
    wrapper.setState({ showChildren: true });
    expect(wrapper.find(Button).hasClass('is-active')).to.equal(true);
  });

  it('toggles state.shouldChildren from false to true', () => {
    expect(wrapper.find(Button)).to.have.length(1);

    wrapper.find(Button).prop('clickHandler')();
    expect(wrapper.state('showChildren')).to.equal(true);
    wrapper.find(Button).prop('clickHandler')();
    expect(wrapper.state('showChildren')).to.equal(false);

    wrapper.setProps({ children: null });
    expect(wrapper.find(Button)).to.have.length(0);
  });

  it('renders the title', () => {
    expect(wrapper.find('.list__item-title').contains('title text')).to.equal(true);
  });

  it('renders an indicator', () => {
    expect(wrapper.find('.list__item-indicator').contains('indicator')).to.equal(true);
  });

  it('renders an label', () => {
    expect(wrapper.find('.list__item-label').contains('label text')).to.equal(true);
  });

  it('renders an action', () => {
    expect(wrapper.find('.list__action').first().contains('test button')).to.equal(true);
  });
});
