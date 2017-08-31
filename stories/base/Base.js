import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from '../styleguide/StoryItem';
import ColourPalette from './ColourPalette';

const brandColours = [
  { value: '#5FCF80', name: 'Brand Green' },
  { value: '#3D8AEB', name: 'Brand Blue' },
  { value: '#5D6871', name: 'Brand Dark' },
  { value: '#965DE8', name: 'Brand Purple' },
];

const textColours = [
  { value: 'rgb(75, 87, 97)', name: 'Text Base' },
  { value: '#384047', name: 'Text Heading' },
  { value: '#FC5C54', name: 'Text Danger' },
  { value: '#8492A6', name: 'Text Light' },
];

const linkColours = [
  { value: 'rgb(70, 142, 229)', name: 'Link Base' },
  { value: 'rgb(61, 125, 204)', name: 'Link Hover' },
  { value: '#C8C8C8', name: 'Link Quiet' },
];

const backgroundColours = [
  { value: 'rgb(241, 241, 241)', name: 'Background Light' },
  { value: 'rgb(70, 142, 229)', name: 'Background Blue' },
];

const tableColours = [
  { value: '#fbfbfb', name: 'Table Heading BG' },
  { value: '#E8FAFF', name: 'Table Item Selected' },
  { value: '#F1FCFF', name: 'Table Item Hover' },
];

const borderColours = [
  { value: 'rgb(230, 234, 227)', name: 'Border Base' },
];

const componentColours = [
  { value: 'rgb(153, 166, 182)', name: 'Pillbox Background' },
];

const base = storiesOf('Base', module)
  .add('Colours', () => (
    <div>
      <ColourPalette colours={brandColours} />
      <ColourPalette colours={textColours} />
      <ColourPalette colours={linkColours} />
      <ColourPalette colours={backgroundColours} />
      <ColourPalette colours={tableColours} />
      <ColourPalette colours={borderColours} />
      <ColourPalette colours={componentColours} />
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

  .add('Tables', () => (
    <div>
      <StoryItem title="A simple table">
        <table>
          <caption>House Stark</caption>
          <thead>
            <tr>
              <th>Eddard Stark</th>
              <th>Jon Snow</th>
              <th>Arya Stark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Has a sword named Ice</td>
              <td>Has a sword named Longclaw</td>
              <td>Has a sword named Needle</td>
            </tr>
            <tr>
              <td>No direwolf</td>
              <td>Direwolf: Ghost</td>
              <td>Direwolf: Nymeria</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Lord of Winterfell</td>
              <td>Knows nothing</td>
              <td>No one</td>
            </tr>
          </tfoot>
        </table>
      </StoryItem>
    </div>
  ))

  .add('Forms', () => (
    <div>
      <StoryItem title="Form Inputs">
        <form>
          <fieldset>
            <p>
              <label htmlFor="input-text">Text input</label>
              <input type="text" id="input-text" />
            </p>

            <p>
              <label htmlFor="password-input">Password input</label>
              <input type="password" id="password-input" />
            </p>
          </fieldset>

          <fieldset>
            <p>
              <label htmlFor="cbox1">Checkbox 1</label>
              <input type="checkbox" id="cbox1" value="" />
            </p>

            <p>
              <label htmlFor="cbox2">Checkbox 2</label>
              <input type="checkbox" id="cbox2" value="" />
            </p>
          </fieldset>

          <fieldset>
            <p>
              <input type="radio" name="radios-1" id="radio-1" value="1" />
              <label htmlFor="radio-1">Radio 1</label>
            </p>
            <p>
              <input type="radio" name="radios-1" id="radio-2" value="2" />
              <label htmlFor="radio-2">Radio 2</label>
            </p>
            <p>
              <input type="radio" name="radios-1" id="radio-3" value="3" />
              <label htmlFor="radio-3">Radio 3</label>
            </p>
          </fieldset>

          <fieldset>
            <p>
              <input type="submit" value="Submit" />
            </p>
          </fieldset>
        </form>
      </StoryItem>
    </div>
  ));

export default base;
