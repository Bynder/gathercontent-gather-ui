import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Field } from 'lib';
import { boolean, radios, text, number } from '@storybook/addon-knobs';
import StoryItem from '../../../stories/styleguide/StoryItem';
import { FieldLeft } from '../FieldLeft';
import { RepeatableSettings } from '../RepeatableSettings';
import { FieldValidations } from '../FieldValidations';
import { FieldActions } from '../FieldActions';
import { FieldMiddle } from '../FieldMiddle';
import { FieldInstructions } from '../FieldInstructions';
import { FieldLabel } from '../FieldLabel';

const mockValidations = [
  {
    text: 'Validation failed text',
    hasFailed: true
  },
  {
    text: 'Validation text',
    hasFailed: false
  }
];

const mockActions = [
  {
    text: 'test action',
    clickHandler: action('action clicked')
  },
  {
    text: 'test action 2',
    clickHandler: action('action 2 clicked')
  }
];

storiesOf('Components', module).add('Field', () => {
  const dir = radios(
    'Text direction',
    {
      LTR: 'ltr',
      RTL: 'rtl'
    },
    'ltr'
  );
  const inStructureEditMode = boolean('Is in structure edit mode', false);
  const isRepeatable = boolean('Is repeatable', true);
  const isActive = boolean('Is active', true);
  const label = text('Field label', 'Field label text');
  const instructions = text(
    'Instructions',
    "Instruction text to help inform the user of what they're meant to write in this field. http://gathercontent.com"
  );
  const hasFormatting = boolean('Has formatting', true);
  const disabled = boolean('Disabled', false);
  const repeatPosition = number('Repeat position', 1);
  const isLastRepeat = boolean('Is last repeat', false);
  const fieldId = '123';
  return (
    <StoryItem
      title="Field"
      description="A field component provides supporting UI for gathering content. The child component should be responsible for handling the gathering experience but this component renders labels, actions and validations to support that experience."
    >
      <Field
        fieldId={fieldId}
        hasFormatting={hasFormatting}
        isActive={isActive}
        disabled={disabled}
        inStructureEditMode={inStructureEditMode}
        dir={dir}
      >
        <FieldLeft
          className={isRepeatable && !inStructureEditMode ? '' : 'pt-6'}
        >
          {isRepeatable && !inStructureEditMode && (
            <RepeatableSettings
              isLastRepeat={isLastRepeat}
              repeatPosition={repeatPosition}
            />
          )}
          <FieldLabel label={label} />
          <FieldValidations validations={mockValidations} />
          <FieldActions actions={mockActions} />
        </FieldLeft>
        <FieldMiddle>
          {!inStructureEditMode ? (
            <div>
              <h1>Heading content</h1>
              <p>
                The fossil record indicates that birds evolved from feathered
                ancestors within the theropod group, which are traditionally
                placed within the saurischian dinosaurs, though a 2017 paper[4]
                has put them in a proposed clade Ornithoscelida, along with the
                Ornithischia.
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <strong>Heading 1</strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>Heading 2</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Cell 1</p>
                    </td>
                    <td>
                      <p>Cell 2</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : null}
          <FieldInstructions instructions={instructions} />
        </FieldMiddle>
      </Field>
    </StoryItem>
  );
});
