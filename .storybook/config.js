import { configure } from '@kadira/storybook';

const CSS = require('../styles/main.scss');

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);
