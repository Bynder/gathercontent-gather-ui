import React from 'react';
import InputWithButton from '../../lib/InputWithButton';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Components',
};

export const _InputWithButton = () => (
  <div>
    <StoryItem
      title="InputWithButton"
      description="A component to display some text and a button"
    >
      <div>
        <InputWithButton
          value="text"
          onClick={(value) => alert(value)}
          buttonText="Click Me"
        />
      </div>
    </StoryItem>
    <StoryItem
      title="InputWithButton Long Text"
      description="InputWithButton long text value"
    >
      <div>
        <InputWithButton
          value="https://www.google.com/search?safe=off&source=hp&ei=-mfmXMLbCdChkwWAvpnIDg&q=hello&oq=hello"
          onClick={(value) => alert(value)}
          buttonText="Click Me"
        />
      </div>
    </StoryItem>
    <StoryItem
      title="InputWithButton with button text that changes on click"
      description="Button text changes to buttonTextAfterClick prop onClick"
    >
      <div>
        <InputWithButton
          value="https://www.google.com/search?safe=off&source=hp&ei=-mfmXMLbCdChkwWAvpnIDg&q=hello&oq=hello"
          onClick={(value) => {}}
          buttonText="Click Me"
          buttonTextAfterClick="I've been clicked!"
        />
      </div>
    </StoryItem>
    <StoryItem title="InputWithButton padding small">
      <div>
        <InputWithButton
          value="https://www.google.com/search?safe=off&source=hp&ei=-mfmXMLbCdChkwWAvpnIDg&q=hello&oq=hello"
          onClick={(value) => {}}
          buttonText="Click Me"
          buttonTextAfterClick="I've been clicked!"
          paddingSmall
        />
      </div>
    </StoryItem>
  </div>
);

_InputWithButton.story = {
  name: 'InputWithButton',
};
