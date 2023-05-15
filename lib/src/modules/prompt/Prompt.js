import React from 'react';
import {Icon, Label, TextForm} from "lib";

const PROMPT_ID = "js-prompt-input"

export function Prompt({onSubmit}) {

  const handleSubmit = (evt) => {
    const form = evt.currentTarget
    const {value} = form.elements[PROMPT_ID]

    onSubmit(value)
  }

  return (
    <div className="prompt">
      <TextForm className="pt-4 pr-4" onSubmit={handleSubmit}>
        <TextForm.Body className="prompt__body">
          <Label htmlFor={PROMPT_ID} className="sr-only">
            leave a Note
            <span className="text-neutral-primary">(OPTIONAL)</span>
          </Label>
          <TextForm.Input id={PROMPT_ID} classname="prompt__input" placeholder="🪄 How can I assist you?"/>
          <TextForm.SubmitButton size="sm" className="prompt__submit">
            <Icon name="arrowRight" />
          </TextForm.SubmitButton>
        </TextForm.Body>


      </TextForm>
    </div>
  );
}
