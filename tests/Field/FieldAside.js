import { React, shallow } from '../setup';
import { FieldAside, Button } from '../../lib';

describe('Field aside', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FieldAside label="Test label">
        <Button clickHandler={() => {}}>Hello world</Button>
      </FieldAside>
    );
  });

  afterEach(() => {});

  test('shares props with field__aside div', () => {
    expect(wrapper.find('.field__aside').prop('label')).toEqual('Test label');
  });

  test('renders its children', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
