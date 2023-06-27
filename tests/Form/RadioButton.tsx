import { React, shallow } from '../setup';
import Label from '../../lib/Form/Label';
import Input from '../../lib/Form/RadioButton/Input';
import RadioButton from '../../lib/Form/RadioButton';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('RadioButton', () => {
  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('has a label and an input', () => {
    const wrapper = shallow(
      // @ts-expect-error TS(2709): Cannot use namespace 'RadioButton' as a type.
      <RadioButton id="123" label="Click me" name="input name" />
    );

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Label)).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Input)).toHaveLength(1);
  });
});
