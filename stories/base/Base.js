import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from '../styleguide/StoryItem';
import ColourPalette from './ColourPalette';

const neutralColours = [
  {
    rgbValue: 'rgb(75, 87, 97)',
    hexValue: '#4B5761',
    name: '$neutral-dark'
  },
  {
    rgbValue: 'rgb(132, 146, 166)',
    hexValue: '#8492A6',
    name: '$neutral-base'
  },
  {
    rgbValue: 'rgb(230, 234, 237)',
    hexValue: '#e6eaed',
    name: '$neutral-light'
  },
  {
    rgbValue: 'rgb(247, 249, 250)',
    hexValue: '#F7F9FA',
    name: '$neutral-lightest'
  }
];

const primaryColours = [
  {
    rgbValue: 'rgb(61, 138, 235)',
    hexValue: '#3D8AEB',
    name: '$primary-blue'
  },
  {
    rgbValue: 'rgb(252, 92, 84)',
    hexValue: '#FC5C54',
    name: '$primary-red'
  },
  {
    rgbValue: 'rgb(95, 207, 128)',
    hexValue: '#5FCF80',
    name: '$primary-green'
  },
  {
    rgbValue: 'rgb(249, 223, 110)',
    hexValue: '#F9DF6E',
    name: '$primary-yellow'
  },
  {
    rgbValue: 'rgb(150, 93, 232)',
    hexValue: '#965DE8',
    name: '$primary-purple'
  },
  {
    rgbValue: 'rgb(147, 114, 79)',
    hexValue: '#93724F',
    name: '$primary-brown'
  }
];

const tints = [
  {
    rgbValue: 'rgb(247, 250, 253)',
    hexValue: '#F7F9FA',
    name: '$neutral-base-lighter'
  },
  {
    rgbValue: 'rgb(253, 253, 253)',
    hexValue: '#FDFDFD',
    name: '$neutral-base-lightest'
  },
  {
    rgbValue: 'rgb(38, 46, 51)',
    hexValue: '#262E33',
    name: '$primary-blue-darkest'
  },
  {
    rgbValue: 'rgba(249, 223, 110, 0.7)',
    name: '$primary-yellow-lighter'
  },
  {
    rgbValue: 'rgb(79, 158, 255)',
    name: '$primary-blue-lighter'
  },
  {
    rgbValue: 'rgb(54, 124, 209)',
    name: '$primary-blue-darker'
  },
  {
    rgbValue: 'rgb(255, 117, 110)',
    name: '$primary-red-lighter'
  },
  {
    rgbValue: 'rgb(227, 82, 75)',
    name: '$primary-red-darker'
  },
  {
    rgbValue: 'rgb(235, 245, 253)',
    name: '$primary-blue-lightest'

  }
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
      <p className="description">
        Lorem ipsum dolor sit amet, <a href="/">consectetur adipisicing</a> elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. <mark>Some marked <a href="/">text</a>.</mark> Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non <strong>proident</strong>, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <blockquote>
        A blockquote. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </blockquote>
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
  ));

export default base;
