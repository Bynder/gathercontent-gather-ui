import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { ButtonIcon } from 'lib';
import { Counter } from '../index';
import StoryItem from '../../../stories/styleguide/StoryItem';

const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);

stories.add('Counter', () => {
  const count = number('Value', 9);

  return (
    <Fragment>
      <StoryItem title="Counter on it's own">
        <Counter>{count}</Counter>
      </StoryItem>
      <StoryItem title="Counter on ButtonIcon">
        <ButtonIcon
          className="relative"
          name="commentsMulti16"
          size={ButtonIcon.sizes.md}
        >
          <Counter className="absolute top-0 right-0 mt mr">{count}</Counter>
        </ButtonIcon>
      </StoryItem>
    </Fragment>
  );
});
