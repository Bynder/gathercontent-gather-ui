import React, { useState } from "react";
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from "stories/styleguide/StoryItem";
import { ButtonPrimary, Label, TextForm } from "lib";
import { WorkflowStep as WorkflowStepComponent } from "./workflowStep";

export default {
  title: "GUI/Workflow Step",
  component: WorkflowStepComponent,
};

export const WorkflowStep = () => {
  const [showBody, setShowBody] = useState(false);

  return (
    <>
      <StoryItem title="Workflow Step">
        <div
          style={{
            width: "680px",
          }}
        >
          <>
            <WorkflowStepComponent
              className="w-full h-full border border-solid border-neutral-90"
              showBody={showBody}
              isActive={false}
              onClick={() => setShowBody(!showBody)}
            >
              <WorkflowStepComponent.Header>
                <WorkflowStepComponent.Title statusColour="red">
                  Draft
                </WorkflowStepComponent.Title>
                <WorkflowStepComponent.Meta
                  actions={
                    <WorkflowStepComponent.Actions>
                      {() => "Actions"}
                    </WorkflowStepComponent.Actions>
                  }
                >
                  Meta
                </WorkflowStepComponent.Meta>
              </WorkflowStepComponent.Header>
              <WorkflowStepComponent.CollapsibleBody>
                <p className="text-neutral-primary text-base pt-2">
                  Creating the initial draft of content following the project
                  style guide and requirements for this item.
                </p>
                {/* @ts-expect-error */}
                <TextForm className="pt-4 pr-4">
                  <TextForm.Body>
                    {/* @ts-expect-error */}
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
              </WorkflowStepComponent.CollapsibleBody>
            </WorkflowStepComponent>
            <ButtonPrimary className="mt-4" onClick={() => setShowBody(false)}>
              Close Step
            </ButtonPrimary>
          </>
        </div>
      </StoryItem>
      <StoryItem title="Active Step">
        <div
          style={{
            width: "680px",
          }}
        >
          <WorkflowStepComponent className="w-full h-full" showBody isActive>
            <WorkflowStepComponent.Header>
              <WorkflowStepComponent.Title>Draft</WorkflowStepComponent.Title>
            </WorkflowStepComponent.Header>
            <WorkflowStepComponent.Body>
              <p className="text-neutral-primary text-base leading-5 m-0 pt-2">
                Creating the initial draft of content following the project
                style guide and requirements for this item.
              </p>
            </WorkflowStepComponent.Body>
          </WorkflowStepComponent>
        </div>
      </StoryItem>
    </>
  );
};

WorkflowStep.parameters = {
  controls: { hideNoControlsWarning: true },
};
