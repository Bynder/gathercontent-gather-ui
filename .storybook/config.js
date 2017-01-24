import { configure } from '@kadira/storybook';

require('../styles/bootstrap/bootstrap.less');
require('../styles/main.scss');
require('font-awesome/css/font-awesome.css');

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);
