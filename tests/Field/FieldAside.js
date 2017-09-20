import { React, expect, shallow } from '../setup';
import { FieldAside, Button } from '../../lib';

describe('Field aside', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FieldAside label="Test label">
        <Button clickHandler={() => {}}>Hello world</Button>
      </FieldAside>,
    );
  });

  afterEach(() => {});

  it('shares props with field__aside div', () => {
    expect(wrapper.find('.field__aside').prop('label')).to.equal('Test label');
  });

  it('renders its children', () => {
    expect(wrapper.find(Button)).to.have.length(1);
  });
});
