import React, { useState, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { OptionMenu } from '../OptionMenu';
import StoryItem from '../../../stories/styleguide/StoryItem';
import Dropdown from '../../Dropdown';
import { ButtonTertiary } from '../../src/modules/Button/ButtonTertiary/ButtonTertiary';

function OptionMenuStory() {
  const [selectedOption, setSelectedOption] = useState('paragraph');

  const options = [
    {
      id: 'paragraph',
      text: 'Paragraph',
      iconName: 'paragraph16'
    },
    {
      id: 'h1',
      text: 'Heading 1',
      iconName: 'h116'
    },
    {
      id: 'h2',
      text: 'Heading 2',
      iconName: 'h216'
    },
    {
      id: 'h3',
      text: 'Heading 3',
      iconName: 'h316'
    },
    {
      id: 'h4',
      text: 'Heading 4',
      iconName: 'h416'
    },
    {
      id: 'h5',
      text: 'Heading 5',
      iconName: 'h516'
    },
    {
      id: 'h6',
      text: 'Heading 6',
      iconName: 'h616'
    },
    {
      id: 'quote',
      text: 'Quote',
      iconName: 'blockQuote16'
    }
  ];

  return (
    <StoryItem
      title="OptionMenu"
      description="OptionMenu component with the selected option"
    >
      <Dropdown id="option-menu-controlled-dropdown">
        {({ showContent, setShowContent }) => (
          <Fragment>
            <Dropdown.Trigger>
              <ButtonTertiary>
                {options.find(({ id }) => selectedOption === id).text}
              </ButtonTertiary>
            </Dropdown.Trigger>
            <Dropdown.Content>
              {showContent && (
                <OptionMenu>
                  {options.map(({ text, iconName, id }) => (
                    <OptionMenu.MenuItem
                      key={id}
                      text={text}
                      onClick={() => {
                        setSelectedOption(id);
                        setShowContent(false);
                      }}
                      iconName={iconName}
                      selected={selectedOption === id}
                    />
                  ))}
                </OptionMenu>
              )}
            </Dropdown.Content>
          </Fragment>
        )}
      </Dropdown>
    </StoryItem>
  );
}

storiesOf('Components', module).add('OptionMenu', () => <OptionMenuStory />);
