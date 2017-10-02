import { React, expect, shallow } from '../setup';
import { List, ListItem } from '../../lib';
import ListHead from '../../lib/List/ListHead';

describe('List', () => {
  let wrapper;

  const mockAction = <button>test button</button>;

  beforeEach(() => {
    wrapper = shallow(
      <List title="Project name" action={mockAction}>
        <ListItem title="row title" />
        <ListItem title="row title" />
      </List>
    );
  });

  afterEach(() => {});

  it('renders a ListHead component', () => {
    const component = wrapper.find(ListHead);
    expect(component).to.have.length(1);
    expect(component.prop('title')).to.equal('Project name');
    expect(component.prop('action')).to.deep.equal(mockAction);
  });

  it('renders 2 children and surrounds them with a list__row div', () => {
    expect(wrapper.find('.list__row')).to.have.length(2);
  });

  it('renders a modifier class of "--bordered-right"', () => {
    wrapper.setProps({ borderedRight: true });
    expect(wrapper.hasClass('list--bordered-right')).to.equal(true);
  });
});
