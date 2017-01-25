import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import * as assets from '../assets/data';
import Button from '../lib/Button/';
import CheckToggle from '../lib/CheckToggle';
import NotificationAlert from '../lib/NotificationAlert';
import DropdownMenu from '../lib/DropdownMenu';
import FontAwesomeIcon from '../lib/FontAwesomeIcon';
import ProgressButton from '../lib/ProgressButton';
import NavLink from '../lib/NavLink';
import Progress from '../lib/Progress';
import SearchInput from '../lib/SearchInput';

// Button
storiesOf('Button', module)
  .add('Primary', () => (
    <Button type="primary" value="Primary button" clickHandler={action('clicked')}></Button>
  ))
  .add('Secondary', () => (
    <Button type="secondary" value="Secondary button" clickHandler={action('clicked')}></Button>
  ))
  .add('Link', () => (
    <Button type="link" value="Link type" clickHandler={action('clicked')}></Button>
  ))
  .add('Danger', () => (
    <Button type="danger" value="Danger button" clickHandler={action('clicked')}></Button>
  ))
  .add('Side by side', () => {
    return (
      <div>
        <Button type="danger" value="Delete Items" clickHandler={action('clicked confirm')}></Button>
        <Button type="link" value="Cancel" clickHandler={action('clicked cancel')}></Button>
      </div>
    );
  });

storiesOf('Progressive Button', module)
  .add('Loading', () => (
    <ProgressButton clickHandler={action('clicked submit')} value="Submit"/>
  ))

// Radio buttons
storiesOf('Radio Button', module)
  .add('Custom toggle', () => (
    <CheckToggle />
  ))
  .add('Custom toggle with labels', () => (
    <CheckToggle labelLeft="Label left" labelRight="Label right" />
));

// Alerts
storiesOf('Notification Alert', module)
  .add('Warning', () => (
    <NotificationAlert level="warning" text="Warning, I am too sexy for this notification." />
  ))
  .add('Danger', () => (
    <NotificationAlert level="danger" text="You're about to delete your whole life." />
  ))
  .add('Info', () => (
    <NotificationAlert level="info" text="Did you know Nirvana started in Aberdeen?" />
));

// NavLink
storiesOf('Navigation', module)
  .add('Link', () => (
    <NavLink url="/" target="_blank" className="link">Go to dashboard</NavLink>
  ));

// Dropdowns
storiesOf('Dropdowns', module)
  .add('Dropdown Menu', () => (
    <DropdownMenu value="Actions" caret shouldDisplay items={assets.getDropdownItems()} />
  ));

// Icons
storiesOf('Icons', module)
  .add('FontAwesome', () => (
    <div>
      <FontAwesomeIcon name="fa-cog" style={{ marginRight: '10px' }} />
      <FontAwesomeIcon name="fa-file" style={{ color: 'red' }} />
    </div>
  )).add('FontAwesome with text', () => (
  <FontAwesomeIcon name="fa-cog">
    <span style={{ marginRight: '10px' }}>Settings</span>
  </FontAwesomeIcon>
));

storiesOf('Progress', module)
  .add('Bar and Unit', () =>
    <Progress.Bar>
      <Progress.Unit
        className='progress-unit--test'
        percent={50}
        color="red"
        name='Unit 1'
        filterLink="#test"
      />
      <Progress.Unit
        className='progress-unit--test'
        percent={50}
        name='Unit 2'
        filterLink="#test"
      />
    </Progress.Bar>
  );

storiesOf('SearchInput', module)
  .add('Search input with clear button', () =>
    <SearchInput onChangeHandler={ action('change') } />
  )
