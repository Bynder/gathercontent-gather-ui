import { React, shallow } from '../setup';
import { Field } from '../../lib';
import Button from '../../lib/Button';

describe('Field', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Field fieldId="123">
        <Button clickHandler={() => {}}>Hello world</Button>
      </Field>
    );
  });

  afterEach(() => {});

  test('renders its children', () => {
    const children = wrapper.children();
    expect(children.find(Button)).toHaveLength(1);
  });

  test('adds conditional classes for formatting', () => {
    wrapper.setProps({
      hasFormatting: true,
      disabled: true
    });
    expect(wrapper.find('div').hasClass('has-formatting')).toEqual(true);
    expect(wrapper.find('div').hasClass('is-visually-disabled')).toEqual(true);
  });
});
