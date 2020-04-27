import React from 'react';
import { storiesOf } from '@storybook/react';
import { OptionMenu } from '../OptionMenu';
import StoryItem from '../../../stories/styleguide/StoryItem';
import Dropdown from '../../Dropdown';
import { ButtonTertiary } from '../../ButtonNew/ButtonTertiary/ButtonTertiary';

storiesOf('Components', module).add('OptionMenu', () => {
  let selectedOption = 'paragraph';

  const options = [
    {
      id: 'paragraph',
      text: 'Paragraph',
      iconName: 'paragraph16',
      onClick: id => {
        selectedOption = id;
      }
    },
    {
      id: 'h1',
      text: 'Heading 1',
      iconName: 'h116',
      onClick: id => {
        selectedOption = id;
      }
    },
    {
      id: 'h2',
      text: 'Heading 2',
      iconName: 'h216',
      onClick: id => {
        selectedOption = id;
      }
    },
    {
      id: 'h3',
      text: 'Heading 3',
      iconName: 'h316',
      onClick: id => {
        selectedOption = id;
      }
    },
    {
      id: 'h4',
      text: 'Heading 4',
      iconName: 'h416',
      onClick: id => {
        selectedOption = id;
      }
    },
    {
      id: 'h5',
      text: 'Heading 5',
      iconName: 'h516',
      onClick: id => {
        selectedOption = id;
      }
    },
    {
      id: 'h6',
      text: 'Heading 6',
      iconName: 'h616',
      onClick: id => {
        selectedOption = id;
      }
    },
    {
      id: 'quote',
      text: 'Quote',
      iconName: 'blockQuote16',
      onClick: id => {
        selectedOption = id;
      }
    }
  ];

  return (
    <StoryItem
      title="OptionMenu (Controlled Input)"
      description="OptionMenu component with the selected option controlled via external state"
    >
      <Dropdown.Trigger>
        <ButtonTertiary />
      </Dropdown.Trigger>
      <OptionMenu options={options} displaySelected selected={selectedOption} />
    </StoryItem>
  );
});
