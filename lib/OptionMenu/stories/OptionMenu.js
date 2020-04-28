import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { OptionMenu } from '../OptionMenu';
import StoryItem from '../../../stories/styleguide/StoryItem';
import Dropdown from '../../Dropdown';
import { ButtonTertiary } from '../../ButtonNew/ButtonTertiary/ButtonTertiary';

function OptionMenuStory() {
  const [selectedOption, setSelectedOption] = useState('paragraph');

  const options = [
    {
      id: 'paragraph',
      text: 'Paragraph',
      iconName: 'paragraph16',
      onClick: id => setSelectedOption(id)
    },
    {
      id: 'h1',
      text: 'Heading 1',
      iconName: 'h116',
      onClick: id => setSelectedOption(id)
    },
    {
      id: 'h2',
      text: 'Heading 2',
      iconName: 'h216',
      onClick: id => setSelectedOption(id)
    },
    {
      id: 'h3',
      text: 'Heading 3',
      iconName: 'h316',
      onClick: id => setSelectedOption(id)
    },
    {
      id: 'h4',
      text: 'Heading 4',
      iconName: 'h416',
      onClick: id => setSelectedOption(id)
    },
    {
      id: 'h5',
      text: 'Heading 5',
      iconName: 'h516',
      onClick: id => setSelectedOption(id)
    },
    {
      id: 'h6',
      text: 'Heading 6',
      iconName: 'h616',
      onClick: id => setSelectedOption(id)
    },
    {
      id: 'quote',
      text: 'Quote',
      iconName: 'blockQuote16',
      onClick: id => setSelectedOption(id)
    }
  ];

  return (
    <StoryItem
      title="OptionMenu"
      description="OptionMenu component with the selected option"
    >
      <Dropdown id="option-menu-controlled-dropdown">
        <Dropdown.Trigger>
          <ButtonTertiary>
            {options.find(({ id }) => selectedOption === id).text}
          </ButtonTertiary>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <OptionMenu>
            {options.map(({ text, onClick, iconName, id }) => (
              <OptionMenu.Item
                key={id}
                text={text}
                onClick={() => onClick(id)}
                iconName={iconName}
                selected={selectedOption === id}
              />
            ))}
          </OptionMenu>
        </Dropdown.Content>
      </Dropdown>
    </StoryItem>
  );
}

storiesOf('Components', module).add('OptionMenu', () => <OptionMenuStory />);
