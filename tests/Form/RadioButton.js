import { React, shallow } from '../setup';
import Label from '../../lib/Form/Label';
import Input from '../../lib/Form/RadioButton/Input';
import RadioButton from '../../lib/Form/RadioButton';

describe('RadioButton', () => {
  test('has a label and an input', () => {
    const wrapper = shallow(
      <RadioButton id="123" label="Click me" name="input name" />
    );

    expect(wrapper.find(Label)).toHaveLength(1);
    expect(wrapper.find(Input)).toHaveLength(1);
  });
});
