import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../../lib/Button/';

const button = storiesOf('Components', module)
  .add('Buttons', () => (
    <div>
      <h3>Primary button</h3>
      <Button type="primary" value="Primary button" clickHandler={action('clicked')}></Button>

      <h3>Secondary button</h3>
      <Button type="secondary" value="Secondary button" clickHandler={action('clicked')}></Button>
    </div>

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

  export default button;
