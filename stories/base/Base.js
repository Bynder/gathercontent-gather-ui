import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

const button = storiesOf('Base', module)
  .add('Colours', () => (
    <div className="sg__base">
      <div className="sg__colour">
        <div style={{backgroundColor: '#00ABBD'}} className="sg__colour-block"></div>
        <p>Brand colour: #00ABBD</p>
      </div>

      <div className="sg__colour">
        <div style={{backgroundColor: '#2f2f2f'}} className="sg__colour-block"></div>
        <p>Background colour: #2f2f2f</p>
      </div>

    </div>

  ))

  export default button;
