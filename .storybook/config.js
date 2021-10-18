import { configure, addDecorator } from '@storybook/react';
import './IBM-Plex/font.css';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from "@storybook/addon-knobs";

require('../styles/bootstrap/_bootstrap.scss');
require('../styles/styleguide/main.scss');
require('../styles/dev.scss');
require('../styles/dev-tailwind-utilities.css');

function loadStories() {
  require('../stories/index.js');
}

addDecorator(withA11y);
addDecorator(withKnobs);

configure(loadStories, module);