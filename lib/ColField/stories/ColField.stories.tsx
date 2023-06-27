import React from 'react';
import ColFieldComponent from 'lib/ColField/ColField';
import { Col, Row } from 'lib';
import StoryItem from '../../../stories/styleguide/StoryItem';
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

export const ColField = ({ visible, editable, selected, hovered }) => {
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
