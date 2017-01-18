import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../lib/Button';

storiesOf('Button', module)
  .add('Primary', () => (
    <Button type="primary" value="Primary button" onClickHandler={action('clicked')}></Button>
  ))
  .add('Secondary', () => (
    <Button type="secondary" value="Secondary button" onClickHandler={action('clicked')}></Button>
  ));
