import { configure } from '@kadira/storybook';

require('../styles/main.scss');

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
