import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib/ColField/ColField' or its ... Remove this comment to see the full error message
import ColFieldComponent from 'lib/ColField/ColField';
import { Col, Row } from 'lib';
import StoryItem from '../../../stories/styleguide/StoryItem';
// @ts-expect-error TS(2307): Cannot find module '../../../assets/text-preview.s... Remove this comment to see the full error message
import TextPreviewSVG from '../../../assets/text-preview.svg';

export default {
  title: 'Legacy/Col Field',
  component: ColFieldComponent,
  args: {
    visible: true,
    editable: true,
    selected: false,
    hovered: false
  }
};

export const ColField = ({
  visible,
  editable,
  selected,
  hovered
}: any) => {
  return (
    <>
      <StoryItem title="ColFieldComponent">
        <Row>
          <Col xs={12} sm={8} smOffset={2}>
            <ColFieldComponent
              visible={visible}
              isSelected={selected}
              isHovered={hovered}
            >
              <ColFieldComponent.Header>
                <ColFieldComponent.Label
                  editable={editable}
                  onChange={() => {}}
                  label="Howdy"
                />
              </ColFieldComponent.Header>
              <ColFieldComponent.Body>
                <div className="py-5 px-6 text-center">
                  <TextPreviewSVG />
                </div>
              </ColFieldComponent.Body>
              <ColFieldComponent.Footer>
                <ColFieldComponent.Instructions
                  editable
                  onChange={() => {}}
                  instructions="Lots of instructions here how fun blabla."
                />
              </ColFieldComponent.Footer>
            </ColFieldComponent>
          </Col>
        </Row>
      </StoryItem>
    </>
  );
};
