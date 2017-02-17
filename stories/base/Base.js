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
  .add('Typography', () => (
    <div>
      <h1 className="heading-one">Heading level one</h1>
      <h2 className="heading-two">Heading level two</h2>
      <h3 className="heading-three">Heading level three</h3>
      <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  ))

  .add('Section content', () => (
    <div>
      <h3 className="heading-three">Importing content from a spreadsheet</h3>
      <p className="description">Importing content from a spreadsheet (CSV, XLSX, XLS or ODS) file will create a new structured Item in this project for every row in your spreadsheet. You can read this support article to learn more or download a spreadsheet template.</p>
    </div>
  ))

  export default button;
