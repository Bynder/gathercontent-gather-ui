import React from 'react';
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Guide... Remove this comment to see the full error message
import { Guideline as GuidelineComponent } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Legacy/Guideline',
  component: GuidelineComponent
};

export const Guideline = () => (
  <div>
    <StoryItem
      title="GuidelineComponent"
      description="User generated content to help inform a user of how to perform an action or of a requirement."
    >
      <GuidelineComponent title="GuidelineComponent title">
        <span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            suscipit cursus ex at ultricies. Proin nec velit ac elit auctor
            condimentum vitae nec metus. Sed sollicitudin quam nulla, eget
            volutpat augue cursus quis.
          </p>
          <p>
            Sed vitae ligula at turpis vehicula facilisis at a ex. Nulla
            facilisi. Phasellus quis pretium ligula. Donec molestie, justo eu
            mollis laoreet, orci tellus varius neque, a ornare tortor elit id
            metus. Nunc in dui in magna aliquet pellentesque sed ut enim. Donec
            at tincidunt est. Donec justo felis, cursus vel rhoncus ac,
            sollicitudin nec ex.
          </p>
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
        </span>
      </GuidelineComponent>
    </StoryItem>

    <StoryItem title="GuidelineComponent (title only)">
      <GuidelineComponent title="GuidelineComponent title" />
    </StoryItem>
  </div>
);

Guideline.parameters = {
  controls: { hideNoControlsWarning: true }
};
