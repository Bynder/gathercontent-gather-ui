import { configure } from '@storybook/react';
import { addCSS } from './utils';

import './IBM-Plex/font.css';
require('../styles/bootstrap/_bootstrap.scss');
require('../styles/styleguide/main.scss');
require('../styles/main.scss');
require('font-awesome/css/font-awesome.css');

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);
