import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../lib/Button/';

storiesOf('Button', module)
  .add('Primary', () => (
    <Button type="primary" value="Primary button" clickHandler={action('clicked')}></Button>
  ))
  .add('Secondary', () => (
    <Button type="secondary" value="Secondary button" clickHandler={action('clicked')}></Button>
  ))
  .add('Link', () => (
    <Button type="link" value="Link type" clickHandler={action('clicked')}></Button>
  ))
  .add('Danger', () => (
    <Button type="danger" value="Danger button" clickHandler={action('clicked')}></Button>
  ))
  .add('Side by side', () => {
    return (
      <div>
        <Button type="danger" value="Delete Items" clickHandler={action('clicked confirm')}></Button>
        <Button type="link" value="Cancel" clickHandler={action('clicked cancel')}></Button>
      </div>
    );
  });
