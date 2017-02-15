import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { MenuItem, Dropdown } from 'react-bootstrap/lib';
import * as assets from '../assets/data';
import CheckToggle from '../lib/CheckToggle';
import NotificationAlert from '../lib/NotificationAlert';
import DropdownMenu from '../lib/DropdownMenu';
import FontAwesomeIcon from '../lib/FontAwesomeIcon';
import ProgressButton from '../lib/ProgressButton';
import NavLink from '../lib/NavLink';
import Progress from '../lib/Progress';
import PlanBox from '../lib/PlanBox';
import PlanBoxPricing from '../lib/PlanBox/Pricing';
import PlanBoxAllowanceDetails from '../lib/PlanBox/AllowanceDetails';
import Table from '../lib/Table';
import SearchInput from '../lib/SearchInput';
import Carousel from '../lib/Carousel';
import Modal from '../lib/Modal/';
import RadioButtonGroup from '../lib/Form/RadioButtonGroup';
import DropdownSwitcher from '../lib/DropdownSwitcher';

import Base from './base/Base';
import Button from './components/Button';

storiesOf('Components', module)
  .add('Loading button', () => (
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

// Progress Units
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

// Pricing
storiesOf('Pricing', module)
  .add('PlanBox', () =>
    <PlanBox
      recommended={true}
      disabled={false}
      name="Plan name"
      description="Plan description"
      upgradeUrl="#upgrade"
      buttonText="Button text"
    >
      <PlanBoxPricing
        price={100}
        priceIn="/mo"
        priceType="priceMonthly"
      />
      <PlanBoxAllowanceDetails
        plan={{ items: "100", projects: "10" }}
      />
    </PlanBox>
  );

// Tables
storiesOf('Table', module)
  .add('Column', () =>
    <Table.Column className="table-column--test">
      <p>Table column text</p>
    </Table.Column>
  )
  .add('Heading', () =>
    <Table.Heading
      sortHandler={ action('sortHandler') }
      columns={['Name', 'Archived by', 'On']}
      toggleHandler={ action('toggleHandler') }
      activeSortingProp="Name"
      sortingOrder={1}
      columnNameSanitiser={ action('columnNameSanitiser') }
    />
  );

// Inputs
storiesOf('Inputs', module)
  .add('Search input with clear button', () =>
    <SearchInput onChangeHandler={ action('change') } />
);

// Modals
storiesOf('Modal', module)
  .add('2-column', () =>
      <Modal.Modal show contentOnly>
        <Modal.ModalHeader>Hello</Modal.ModalHeader>
        <Modal.ModalContent>
          <Modal.ModalColumn>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
          </Modal.ModalColumn>
          <Modal.ModalColumn>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
          </Modal.ModalColumn>
        </Modal.ModalContent>
        <Modal.ModalFooter>
          <Button value="Confirm"></Button>
        </Modal.ModalFooter>
      </Modal.Modal>
  );

// Carousel
storiesOf('Carousel', module)
  .add('Base', () =>
    <Carousel
      showIndicators
      selected={1}
      className="gc-carousel"
    >
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
    </Carousel>
  );

storiesOf('Form', module)
  .add('RadioButtonGroup', () =>
    <div>
      <RadioButtonGroup
        onChange={() => action('onChange')}
        title="Title 1"
        id="group-1"
        name="group-choice-1"
        subtitle="Subtitle"
      />
      <RadioButtonGroup
        onChange={() => action('onChange')}
        title="Title 2"
        id="group-2"
        name="group-choice-2"
        subtitle="Subtitle"
      />
      <RadioButtonGroup
        onChange={() => action('onChange')}
        title="Title 3"
        id="group-3"
        name="group-choice-3"
        subtitle="Subtitle"
      />
    </div>
  );

// Dropdown Switcher
storiesOf('Dropdown Switcher', module)
  .add('Base', () => {
    const menu = (
      <Dropdown.Menu className="dropdown__menu dropdown-menu--arrowed">
        <MenuItem href="#" eventKey="1">
          <FontAwesomeIcon name="fa-folder-o" /> Items
        </MenuItem>
        <MenuItem divider />
        <MenuItem disabled eventKey="2">
          <FontAwesomeIcon name="fa-archive" /> Archived Items
        </MenuItem>
      </Dropdown.Menu>);

    return (<DropdownSwitcher
      title="Archived Items"
      id="ai"
      menu={ menu }
    />);
  }
)
