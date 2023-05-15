import React, { useState } from 'react';
import { Button, Icon, Label, TextForm } from 'lib';

const PROMPT_ID = 'js-prompt-input';

export function Prompt({ onFeedback, onSubmit }) {
  const [isPromptEmpty, setIsPromptEmpty] = useState(true);

  const handleChange = evt => {
    const { value } = evt.currentTarget;
    setIsPromptEmpty(typeof value !== 'string' || value.length === 0);
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
          />
          <TextForm.SubmitButton
            size="md"
            className="prompt__submit"
            disabled={isPromptEmpty}
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
