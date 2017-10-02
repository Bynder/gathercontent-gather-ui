import { React, expect, shallow } from '../setup';
import Label from '../../lib/Form/Label';
import Input from '../../lib/Form/RadioButton/Input';
import RadioButton from '../../lib/Form/RadioButton';

describe('RadioButton', () => {
  it('has a label and an input', () => {
    const wrapper = shallow(
      <RadioButton id="123" label="Click me" name="input name" />
    );

    expect(wrapper.find(Label)).to.have.length(1);
    expect(wrapper.find(Input)).to.have.length(1);
  });
});
