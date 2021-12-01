import React from 'react';
import { action } from '@storybook/addon-actions';
import RadioButton from '../../lib/Form/RadioButton';
import RadioButtonOther from '../../lib/Form/RadioButton/Other';
import { RadioButtonGroup } from '../../lib/Form/RadioButton/Group';
import Checkbox from '../../lib/Form/Checkbox';
import { CheckboxGroup } from '../../lib/Form/Checkbox/Group';
import StoryItem from '../styleguide/StoryItem';
import Form from '../../lib/Form';
import Button from '../../lib/Button';
import FormInput from '../../lib/Form/FormInput';
import FormFooter from '../../lib/Form/FormFooter';

export default {
  title: 'Components',
};

export const _Form = () => (
  <StoryItem title="Form" description="Form with a textarea.">
    <Form onSubmit={() => {}} className="form">
      <FormInput type="textarea" placeholder="Enter text here!" />

      <FormFooter>
        <Button types={['link', 'size-sm']} onClick={() => {}}>
          Cancel
        </Button>
        <Button types={['primary', 'size-sm']} isSubmit>
          Submit
        </Button>
      </FormFooter>
    </Form>
  </StoryItem>
);

export const FormCheckboxes = () => (
  <div>
    <StoryItem title="Checkboxes" description="Checkbox input choices">
      <Checkbox
        name="ch1"
        id="id1"
        onChangeHandler={(e) => action(e.target.value)()}
        checked
        label="Ethiopian roast"
      />
      <Checkbox
        name="ch1"
        onChangeHandler={(e) => action(e.target.value)()}
        id="id2"
        checked={false}
        label="Guatemala roast"
      />
      <Checkbox
        name="ch1"
        id="id3"
        onChangeHandler={(e) => action(e.target.value)()}
        checked
        label="Honduras roast"
      />
    </StoryItem>

    <StoryItem
      title="Checkboxes: Disabled"
      description="Checkbox input choices can be disabled. This can be achieved by passing in the disabled property."
    >
      <Checkbox
        name="ch2"
        id="id21"
        disabled
        onChangeHandler={action('hello')}
        checked
        label="Ethiopian roast"
      />
      <Checkbox
        name="ch2"
        disabled
        onChangeHandler={action('hello')}
        id="id22"
        checked={false}
        label="Guatemala roast"
      />
    </StoryItem>

    <StoryItem
      title="Checkboxes: in a CheckboxGroup"
      description="Checkbox input choices can be controlled in a CheckboxGroup"
    >
      <CheckboxGroup
        choices={[
          {
            name: 'ch3',
            id: 'id31',
            checked: true,
            label: 'Ethiopian roast',
          },
          { name: 'ch3', id: 'id32', checked: true, label: 'Guatemala roast' },
        ]}
        onChangeHandler={action('hello')}
      />
    </StoryItem>

    <StoryItem
      title="Checkboxes: input only"
      description="Checkboxes where the label does not trigger onChange"
    >
      <CheckboxGroup
        choices={[
          {
            name: 'ch4',
            id: 'id41',
            checked: true,
            label: 'Ethiopian roast',
          },
          { name: 'ch4', id: 'id42', checked: true, label: 'Guatemala roast' },
        ]}
        onChangeHandler={action('hello')}
        overrideLabelDefault={action('label click wow')}
      />
    </StoryItem>

    <StoryItem title="Checkboxes: highlighted">
      <Checkbox
        name="checkbox-highlight"
        id="checkbox-highlight"
        onChangeHandler={action('hello')}
        label="Ethiopian roast"
        checked
        highlight
      />
    </StoryItem>

    <StoryItem title="Checkboxes in a group: highlighted">
      <CheckboxGroup
        choices={[
          {
            name: 'ch9',
            id: 'id91',
            checked: true,
            label: 'Ethiopian roast',
            highlight: true,
          },
          {
            name: 'ch9',
            id: 'id92',
            checked: true,
            label: 'Guatemala roast',
            highlight: true,
          },
        ]}
        onChangeHandler={action('hello')}
      />
    </StoryItem>

    <StoryItem title="Checkboxes (hinted)">
      <Checkbox
        name="checkbox-hinted"
        id="checkbox-hinted"
        onChangeHandler={action('hello')}
        label="Ethiopian roast"
        checked
        hinted
      />
    </StoryItem>
  </div>
);

FormCheckboxes.story = {
  name: 'Form: Checkboxes',
};

export const FormRadios = () => (
  <div>
    <StoryItem title="Radio Input" description="Base styling for RadioInputs.">
      <RadioButton
        name="ch1"
        id="id1"
        value="value 1"
        checked={false}
        onChangeHandler={(e) => action('onChangeHandler')(e)}
        label="Option label"
      />
    </StoryItem>

    <StoryItem
      title="Radio Input (checked)"
      description="Inputs can have a checked state."
    >
      <RadioButton
        name="ch2"
        id="id2"
        value="value 2"
        onChangeHandler={(e) => action('onChangeHandler')(e)}
        label="Option label"
        checked
      />
    </StoryItem>

    <StoryItem
      title="Radio Input (disabled)"
      description="Inputs can be disabled, which prevents all callbacks from being executed."
    >
      <RadioButton
        name="ch3"
        id="id3"
        value="value 3"
        onChangeHandler={(e) => action('onChangeHandler')(e)}
        label="Option label"
        checked={false}
        disabled
      />
    </StoryItem>

    <StoryItem
      title="Radio Input (label with subtitle)"
      description="A label can have a subtitle."
    >
      <RadioButton
        name="ch4"
        id="id4"
        value="value 1"
        onChangeHandler={(e) => action('onChangeHandler')(e)}
        label="Option label"
        subtitle="label subtext"
        checked
      />
    </StoryItem>

    <StoryItem
      title="Radio Input (other option)"
      description="Inputs can have a user-provided value."
    >
      <RadioButtonOther
        name="ch5"
        id="id5"
        label="Option label"
        value="5"
        checked={false}
        onChangeHandler={(e) => action('onChangeHandler')(e)}
        onTextChangeHandler={(e) => action('onTextChangeHandler')(e)}
        other_option
      />

      <p>The other option when checked shows an input.</p>

      <RadioButtonOther
        name="ch5"
        id="id5"
        label="Option label"
        value="5"
        onChangeHandler={(e) => action('onChangeHandler')(e)}
        onTextChangeHandler={(e) => action('other value')(e)}
        other_option
        checked
      />
    </StoryItem>

    <StoryItem
      title="Radio Input Group"
      description="The group is used to control the checked state and the text value for the other option."
    >
      <RadioButtonGroup
        choices={[
          {
            name: 'ch7',
            id: 'id71',
            value: 'value 1',
            label: 'Ethiopian roast',
            checked: true,
          },
          {
            name: 'ch7',
            id: 'id72',
            value: 'value 2',
            label: 'Guatemala roast',
            checked: false,
          },
        ]}
        onChangeHandler={(selected) => action('onChangeHandler')(selected)}
      />
    </StoryItem>

    <StoryItem
      title="Radio Input Group input only"
      description="A group of radio buttons where the label does not trigger onChange"
    >
      <RadioButtonGroup
        choices={[
          {
            name: 'ch8',
            id: 'id81',
            value: 'value 1',
            label: 'Ethiopian roast',
            checked: true,
          },
          {
            name: 'ch8',
            id: 'id82',
            value: 'value 2',
            label: 'Guatemala roast',
            checked: false,
          },
        ]}
        overrideLabelDefault={action('label click wow')}
        onChangeHandler={(selected) => action('onChangeHandler')(selected)}
      />
    </StoryItem>

    <StoryItem
      title="Radio Input Group with other option"
      description="A group of radio buttons which also has an other option"
    >
      <RadioButtonGroup
        choices={[
          {
            name: 'ch8',
            id: '12434',
            value: 'value 1',
            label: 'Ethiopian roast',
            checked: true,
          },
          {
            name: 'ch8',
            id: '12432',
            value: 'value 2',
            label: 'Guatemala roast',
            checked: false,
            other_option: true,
          },
        ]}
        overrideLabelDefault={action('label click wow')}
        onChangeHandler={(selected) => action('onChangeHandler')(selected)}
      />
    </StoryItem>

    <StoryItem title="Radio Input (highlighted)">
      <RadioButton
        name="highlighted"
        id="id-highlighted"
        value="value 1"
        onChangeHandler={(e) => action('onChangeHandler')(e)}
        label="Option label"
        subtitle="label subtext"
        checked
        highlight
      />
    </StoryItem>

    <StoryItem title="Radio Input (hinted)">
      <RadioButton
        name="hinted"
        id="id-hinted"
        value="value 1"
        onChangeHandler={(e) => action('onChangeHandler')(e)}
        label="Option label 1"
        checked={false}
        hinted
      />
    </StoryItem>
  </div>
);

FormRadios.story = {
  name: 'Form: Radios',
};

export const _FormInput = () => (
  <div>
    <StoryItem title="FormInput">
      <FormInput id="form-input" placeholder="Add some text~" />
    </StoryItem>
    <StoryItem title="FormInput full width">
      <FormInput id="form-input" placeholder="Loooong" fullWidth />
    </StoryItem>
    <StoryItem title="FormInput with error">
      <FormInput
        id="form-input"
        placeholder="Uh oh"
        hasError
        errorMessage="Something went wrong"
      />
    </StoryItem>
  </div>
);

_FormInput.story = {
  name: 'Form: Input',
};
