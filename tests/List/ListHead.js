import { React, expect, shallow } from '../setup';
import ListHead from '../../lib/List/ListHead';

describe('List Head', () => {
  let wrapper;

  const mockAction = <button>test button</button>;

  beforeEach(() => {
    wrapper = shallow(<ListHead title="Project name" action={mockAction} />);
  });

  afterEach(() => {});

  it('renders the title', () => {
    expect(wrapper.contains('Project name')).to.equal(true);
  });

  it('renders the action', () => {
    expect(wrapper.contains(mockAction)).to.equal(true);
  });
});
