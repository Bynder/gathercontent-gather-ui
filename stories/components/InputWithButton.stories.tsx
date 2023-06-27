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
          value="text"
          onClick={value => alert(value)}
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
          value="https://www.google.com/search?safe=off&source=hp&ei=-mfmXMLbCdChkwWAvpnIDg&q=hello&oq=hello"
          onClick={value => alert(value)}
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
          value="https://www.google.com/search?safe=off&source=hp&ei=-mfmXMLbCdChkwWAvpnIDg&q=hello&oq=hello"
          onClick={value => {}}
          buttonText="Click Me"
          buttonTextAfterClick="I've been clicked!"
        />
      </div>
    </StoryItem>
    <StoryItem title="InputWithButtonComponent padding small">
      <div>
        <InputWithButtonComponent
          value="https://www.google.com/search?safe=off&source=hp&ei=-mfmXMLbCdChkwWAvpnIDg&q=hello&oq=hello"
          onClick={value => {}}
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
