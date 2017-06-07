import { configure } from '@storybook/react';
import { addCSS } from './utils';

const FONTS_CSS = 'https://cloud.typography.com/6854674/6820952/css/fonts.css';

require('../styles/bootstrap/bootstrap.less');
require('../styles/styleguide/main.scss');
require('../styles/main.scss');
// require('../styles/bootstrap/_bootstrap.scss');
require('font-awesome/css/font-awesome.css');

addCSS(FONTS_CSS);

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);
