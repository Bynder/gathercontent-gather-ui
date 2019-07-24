import { configure, addDecorator } from '@storybook/react';
import './IBM-Plex/font.css';
import { withA11y } from '@storybook/addon-a11y';

require('../styles/bootstrap/_bootstrap.scss');
require('../styles/styleguide/main.scss');
require('../styles/main.scss');
require('font-awesome/css/font-awesome.css');

function loadStories() {
  require('../stories/index.js');
}

addDecorator(withA11y);

configure(loadStories, module);