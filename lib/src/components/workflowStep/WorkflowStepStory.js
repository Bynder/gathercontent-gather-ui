import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from 'stories/styleguide/StoryItem';
import { ButtonPrimary, Label, TextForm } from 'lib';
import { WorkflowStep } from './workflowStep';

const WorkflowStepStory = () => {
  const [showBody, setShowBody] = useState(false);

  return (
    <>
      <WorkflowStep
        className="w-full h-full border border-solid border-neutral-90"
        showBody={showBody}
        isActive={false}
        onClick={() => setShowBody(!showBody)}
      >
        <WorkflowStep.Header>
          <WorkflowStep.Title statusColour="red">Draft</WorkflowStep.Title>
          <WorkflowStep.Meta
            actions={
              <WorkflowStep.Actions>
                {onActionToggle => 'Actions'}
              </WorkflowStep.Actions>
            }
          >
            Meta
          </WorkflowStep.Meta>
        </WorkflowStep.Header>
        <WorkflowStep.CollapsibleBody>
          <p className="text-neutral-primary text-base pt-2">
            Creating the initial draft of content following the project style
            guide and requirements for this item.
          </p>
          <TextForm className="pt-4 pr-4">
            <TextForm.Body>
              <Label htmlFor="test">
                leave a Note
                <span className="text-neutral-primary">(OPTIONAL)</span>
              </Label>
              <TextForm.Input id="test" />
            </TextForm.Body>
            <TextForm.Submission>
              <TextForm.SubmitButton size="sm">
                Set Status
              </TextForm.SubmitButton>
            </TextForm.Submission>
          </TextForm>
        </WorkflowStep.CollapsibleBody>
      </WorkflowStep>
      <ButtonPrimary className="mt-4" onClick={() => setShowBody(false)}>
        Close Step
      </ButtonPrimary>
    </>
  );
};

const modalStory = storiesOf('Components', module).add('Workflow Step', () => {
  return (
    <>
      <StoryItem title="Workflow Step">
        <div
          style={{
            width: '680px'
          }}
        >
          <WorkflowStepStory />
        </div>
      </StoryItem>
      <StoryItem title="Active Step">
        <div
          style={{
            width: '680px'
          }}
        >
          <WorkflowStep className="w-full h-full" showBody isActive>
            <WorkflowStep.Header>
              <WorkflowStep.Title>Draft</WorkflowStep.Title>
            </WorkflowStep.Header>
            <WorkflowStep.Body>
              <p className="text-neutral-primary text-base leading-5 m-0 pt-2">
                Creating the initial draft of content following the project
                style guide and requirements for this item.
              </p>
            </WorkflowStep.Body>
          </WorkflowStep>
        </div>
      </StoryItem>
    </>
  );
});

export default modalStory;
