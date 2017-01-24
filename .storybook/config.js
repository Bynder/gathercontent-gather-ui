import { configure } from '@kadira/storybook';

require('../styles/bootstrap/bootstrap.less');
require('../styles/main.scss');

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);
