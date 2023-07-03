import React from 'react';
import InputWithButtonComponent from '../../lib/InputWithButton';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Legacy/Form/Inputs/Input With Button',
  component: InputWithButtonComponent
};

export const InputWithButton = () => (
  <div>
    <StoryItem
      title="InputWithButtonComponent"
      description="A component to display some text and a button"
    >
      <div>
        <InputWithButtonComponent
          // @ts-expect-error TS(2769): No overload matches this call.
          value="text"
          onClick={(value: any) => alert(value)}
          buttonText="Click Me"
        />
      </div>
    </StoryItem>
    <StoryItem
      title="InputWithButtonComponent Long Text"
      description="InputWithButtonComponent long text value"
    >
      <div>
        <InputWithButtonComponent
          // @ts-expect-error TS(2769): No overload matches this call.
          value="https://www.google.com/search?safe=off&source=hp&ei=-mfmXMLbCdChkwWAvpnIDg&q=hello&oq=hello"
          onClick={(value: any) => alert(value)}
          buttonText="Click Me"
        />
      </div>
    </StoryItem>
    <StoryItem
      title="InputWithButtonComponent with button text that changes on click"
      description="Button text changes to buttonTextAfterClick prop onClick"
    >
      <div>
        <InputWithButtonComponent
          // @ts-expect-error TS(2769): No overload matches this call.
          value="https://www.google.com/search?safe=off&source=hp&ei=-mfmXMLbCdChkwWAvpnIDg&q=hello&oq=hello"
          onClick={(value: any) => {}}
          buttonText="Click Me"
          buttonTextAfterClick="I've been clicked!"
        />
      </div>
    </StoryItem>
    <StoryItem title="InputWithButtonComponent padding small">
      <div>
        <InputWithButtonComponent
          // @ts-expect-error TS(2769): No overload matches this call.
          value="https://www.google.com/search?safe=off&source=hp&ei=-mfmXMLbCdChkwWAvpnIDg&q=hello&oq=hello"
          onClick={(value: any) => {}}
          buttonText="Click Me"
          buttonTextAfterClick="I've been clicked!"
          paddingSmall
        />
      </div>
    </StoryItem>
  </div>
);

InputWithButton.parameters = {
  controls: { hideNoControlsWarning: true }
};
