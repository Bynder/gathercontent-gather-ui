import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from '../styleguide/StoryItem';
import ColourPalette from './ColourPalette';

const neutralColours = [
  {
    rgbValue: 'rgb(75, 87, 97)',
    hexValue: '#4B5761',
    name: '$neutral-dark',
  },
  {
    rgbValue: 'rgb(132, 146, 166)',
    hexValue: '#8492A6',
    name: '$neutral-base',
  },
  {
    rgbValue: 'rgb(230, 234, 237)',
    hexValue: '#e6eaed',
    name: '$neutral-light',
  },
  {
    rgbValue: 'rgb(247, 249, 250)',
    hexValue: '#F7F9FA',
    name: '$neutral-lightest',
  },
];

const primaryColours = [
  {
    rgbValue: 'rgb(61, 138, 235)',
    hexValue: '#3D8AEB',
    name: '$primary-blue',
  },
  {
    rgbValue: 'rgb(252, 92, 84)',
    hexValue: '#FC5C54',
    name: '$primary-red',
  },
  {
    rgbValue: 'rgb(95, 207, 128)',
    hexValue: '#5FCF80',
    name: '$primary-green',
  },
  {
    rgbValue: 'rgb(249, 223, 110)',
    hexValue: '#F9DF6E',
    name: '$primary-yellow',
  },
  {
    rgbValue: 'rgb(150, 93, 232)',
    hexValue: '#965DE8',
    name: '$primary-purple',
  },
  {
    rgbValue: 'rgb(147, 114, 79)',
    hexValue: '#93724F',
    name: '$primary-brown',
  },
];

const tints = [
  {
    rgbValue: 'rgb(247, 250, 253)',
    hexValue: '#F7F9FA',
    name: '$neutral-base-lighter',
  },
];

const base = storiesOf('Base', module)
  .add('Colours', () => (
    <div>
      <StoryItem
        title="Neutral Colours"
        description="The use of the neutral palette throughout the app coupled with bursts of colour help catch the user's eye and draw attention to important actionables."
      >
        <ColourPalette colours={neutralColours} />
      </StoryItem>

      <StoryItem
        title="Primary Colours"
        description="Our primary palette is used for alerts, actions, and for anywhere across the app we may need to draw the user's attention to something doable, such as a button."
      >
        <ColourPalette colours={primaryColours} />
      </StoryItem>

      <StoryItem
        title="Tint Colours"
        description="Our tint palette is used for light and dark variations of colours."
      >
        <ColourPalette colours={tints} />
      </StoryItem>
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
