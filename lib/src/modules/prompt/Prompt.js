import React, { useState } from 'react';
import { Button, Icon, Label, TextForm } from 'lib';

const PROMPT_ID = 'js-prompt-input';

const hasValue = str => typeof str !== 'string' || str.length === 0;

export function Prompt({ defaultValue, onFeedback, onSubmit, isLoading }) {
  const [isPromptEmpty, setIsPromptEmpty] = useState(hasValue(defaultValue));

  const handleChange = evt => {
    const { value } = evt.currentTarget;
    setIsPromptEmpty(hasValue(value));
  };

  const handleSubmit = evt => {
    const form = evt.currentTarget;
    const { value } = form.elements[PROMPT_ID];

    onSubmit(value);
  };

  return (
    <div className="prompt">
      <TextForm className="propmt__wrapper" onSubmit={handleSubmit}>
        <TextForm.Body className="prompt__body">
          <Label htmlFor={PROMPT_ID} className="sr-only">
            Enter a prompt
          </Label>
          <Icon
            name="aiWand"
            defaultFillColor={false}
            className="prompt__input-wand"
          />
          <TextForm.Input
            id={PROMPT_ID}
            className="prompt__input"
            placeholder="How can I assist you?"
            onChange={handleChange}
            disabled={isLoading}
            value={defaultValue}
          />
          <TextForm.SubmitButton
            size="md"
            className="prompt__submit"
            disabled={isPromptEmpty}
            loading={isLoading}
          >
            Submit
          </TextForm.SubmitButton>
          <Button
            types={['icon-only']}
            size="md"
            onClick={onFeedback}
            className="prompt__feedback"
          >
            <Icon name="feedback" />
          </Button>
        </TextForm.Body>
      </TextForm>
    </div>
  );
}
