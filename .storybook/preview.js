import { addDecorator } from '@storybook/react';
import './IBM-Plex/font.css';
import { withA11y } from '@storybook/addon-a11y';
import '../styles/bootstrap/_bootstrap.scss';
import '../styles/styleguide/main.scss';
import '../styles/dev.scss';
import '../styles/dev-tailwind-utilities.css';

addDecorator(withA11y);
