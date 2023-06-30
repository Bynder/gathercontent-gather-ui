import React from "react";
import { ButtonIcon, MenuItem } from "lib";
import StoryItem from "../styleguide/StoryItem";
import TopBar from "../../lib/TopBar";
import TopBarContent from "../../lib/TopBar/TopBarContent";
import TopBarCell from "../../lib/TopBar/TopBarCell";
import Button from "../../lib/Button";
import Icon from "../../lib/Icon";
import Avatar from "../../lib/Avatar";
import AvatarWithPopover from "../../lib/Avatar/AvatarWithPopover";
import AvatarGroup from "../../lib/Avatar/AvatarGroup";
import Navigation from "../../lib/Navigation";
import Logo from "../../lib/Logo";
import SectionHeader from "../../lib/SectionHeader";
import Search from "../../lib/Search";
import NotificationBar from "../../lib/Notification/bar";

export default {
  title: "Legacy/Topbar",
  component: TopBar,
};

export const Topbar = () => (
  <div>
    <StoryItem
      title="TopBar site wide"
      description="TopBar is the top bar used throughout the whole site, can add a fixed attribute to fix it to the top."
    >
      <TopBar>
        {/* @ts-expect-error TS(2322): Type '{ children: Element[]; left: true; xs: numbe... Remove this comment to see the full error message */}
        <TopBarContent left xs={10} md={5}>
          <TopBarCell>
            <Icon
              name="backArrow"
              className="top-bar__action top-bar__action--collapse-left"
            />
          </TopBarCell>
          <TopBarCell bordered>
            <Button
              types={["icon-only"]}
              clickHandler={() => {}}
              className="top-bar__action"
            >
              {/* @ts-expect-error TS(2322): Type '{ name: string; size: string; }' is not assi... Remove this comment to see the full error message */}
              <Icon name="menu" size="minor" />
            </Button>
          </TopBarCell>
        </TopBarContent>
        {/* @ts-expect-error TS(2322): Type '{ children: Element[]; right: true; xs: numb... Remove this comment to see the full error message */}
        <TopBarContent right xs={2} md={4}>
          <TopBarCell>
            <AvatarGroup maximum={2}>
              <Avatar
                initials="RS"
                name="Richard Swagshaw"
                colour="rgb(252, 92, 84)"
              />
              <Avatar
                initials="JD"
                name="James Darracott"
                colour="rgb(61, 138, 235)"
              />
            </AvatarGroup>
          </TopBarCell>
          <TopBarCell bordered>
            <ButtonIcon
              name="menuDotted"
              size={ButtonIcon.sizes.md}
              onClick={() => {}}
              className="top-bar__action"
              iconTitle="Open item settings"
            />
          </TopBarCell>
        </TopBarContent>
        {/* @ts-expect-error TS(2322): Type '{ children: string; center: true; xs: number... Remove this comment to see the full error message */}
        <TopBarContent center xs={12} md={3}>
          Centered content
        </TopBarContent>
      </TopBar>
    </StoryItem>
    <StoryItem title="TopBar dark" description="TopBar with the dark theme.">
      <TopBar useDarkTheme>
        {/* @ts-expect-error TS(2322): Type '{ children: Element[]; left: true; xs: numbe... Remove this comment to see the full error message */}
        <TopBarContent left xs={10} md={5}>
          <TopBarCell>
            <Icon
              name="backArrow"
              className="top-bar__action top-bar__action--collapse-left"
            />
          </TopBarCell>
          <TopBarCell bordered>
            <Button
              types={["icon-only"]}
              clickHandler={() => {}}
              className="top-bar__action"
            >
              {/* @ts-expect-error TS(2322): Type '{ name: string; size: string; }' is not assi... Remove this comment to see the full error message */}
              <Icon name="menu" size="minor" />
            </Button>
          </TopBarCell>
        </TopBarContent>
        {/* @ts-expect-error TS(2322): Type '{ children: Element[]; right: true; xs: numb... Remove this comment to see the full error message */}
        <TopBarContent right xs={2} md={4}>
          <TopBarCell>
            <AvatarGroup maximum={2}>
              <Avatar
                initials="RS"
                name="Richard Swagshaw"
                colour="rgb(252, 92, 84)"
              />
              <Avatar
                initials="JD"
                name="James Darracott"
                colour="rgb(61, 138, 235)"
              />
            </AvatarGroup>
          </TopBarCell>
          <TopBarCell bordered>
            <ButtonIcon
              name="menuDotted"
              size={ButtonIcon.sizes.md}
              onClick={() => {}}
              className="top-bar__action"
              iconTitle="Open item settings"
            />
          </TopBarCell>
        </TopBarContent>
        {/* @ts-expect-error TS(2322): Type '{ children: string; center: true; xs: number... Remove this comment to see the full error message */}
        <TopBarContent center xs={12} md={3}>
          Centered content
        </TopBarContent>
      </TopBar>
    </StoryItem>

    <StoryItem
      title="TopBar light grey"
      description="TopBar with the light grey theme."
    >
      <TopBar useLightGreyTheme>
        {/* @ts-expect-error TS(2322): Type '{ children: Element[]; left: true; xs: numbe... Remove this comment to see the full error message */}
        <TopBarContent left xs={10} md={5}>
          <TopBarCell>
            <Icon
              name="backArrow"
              className="top-bar__action top-bar__action--collapse-left"
            />
          </TopBarCell>
          <TopBarCell bordered>
            <Button
              types={["icon-only"]}
              clickHandler={() => {}}
              className="top-bar__action"
            >
              {/* @ts-expect-error TS(2322): Type '{ name: string; size: string; }' is not assi... Remove this comment to see the full error message */}
              <Icon name="menu" size="minor" />
            </Button>
          </TopBarCell>
        </TopBarContent>
        {/* @ts-expect-error TS(2322): Type '{ children: Element; right: true; xs: number... Remove this comment to see the full error message */}
        <TopBarContent right xs={2} md={4}>
          <TopBarCell bordered>
            <ButtonIcon
              name="menuDotted"
              size={ButtonIcon.sizes.md}
              onClick={() => {}}
              className="top-bar__action"
              iconTitle="Open item settings"
            />
          </TopBarCell>
        </TopBarContent>
        {/* @ts-expect-error TS(2322): Type '{ children: string; center: true; xs: number... Remove this comment to see the full error message */}
        <TopBarContent center xs={12} md={3}>
          Centered content
        </TopBarContent>
      </TopBar>
    </StoryItem>

    <StoryItem
      title="TopBar App Example"
      description="Example of the TopBar used on the app."
    >
      <TopBar>
        {/* @ts-expect-error TS(2322): Type '{ children: Element[]; left: true; xs: numbe... Remove this comment to see the full error message */}
        <TopBarContent left xs={10} md={10}>
          <TopBarCell>
            <Logo />
          </TopBarCell>
          <TopBarCell>
            <SectionHeader
              title="Project name"
              id="sh-123432"
              collapse
              noBorder
            >
              <MenuItem href="#test">Personal Settings</MenuItem>
            </SectionHeader>
          </TopBarCell>
          <TopBarCell bordered>
            <Navigation>
              <MenuItem href="#" active>
                Items
              </MenuItem>
              <MenuItem href="#">Archived Items</MenuItem>
            </Navigation>
          </TopBarCell>
        </TopBarContent>
        {/* @ts-expect-error TS(2322): Type '{ children: Element[]; right: true; xs: numb... Remove this comment to see the full error message */}
        <TopBarContent right xs={2} md={2}>
          <TopBarCell>
            {/* @ts-expect-error TS(2769): No overload matches this call. */}
            <Search className="top-bar__search-dropdown">
              <Search.Input onChange={() => {}} />
              <Search.Body>
                <Search.Options>
                  {/* @ts-expect-error TS(2741): Property 'displayChecked' is missing in type '{ la... Remove this comment to see the full error message */}
                  <Search.ToggleFilter
                    label="Search all projects"
                    clickHandler={() => {}}
                  />
                </Search.Options>
                <Search.List heading="Items">
                  <Search.ListItem title="bloop" subText="123 435">
                    hi there <em>waffles</em> hi!
                  </Search.ListItem>
                  <Search.ListItem title="blorp" subText="123 435">
                    hhello!! <em>waffles</em> hi!
                  </Search.ListItem>
                </Search.List>
                <Search.List heading="Content">
                  <Search.ListItem title="bloop" subText="123 435">
                    hi there <em>waffles</em> hi!
                  </Search.ListItem>
                  <Search.ListItem title="blorp" subText="123 435">
                    hhello!! <em>waffles</em> hi!
                  </Search.ListItem>
                </Search.List>
              </Search.Body>
            </Search>
          </TopBarCell>
          <TopBarCell>
            <AvatarWithPopover
              name="Angus Edwardson"
              initials="AE"
              email="example@gmail.com"
              triggerEvent="onClick"
              popoverClass="popover-dropdown"
              caret
            >
              <ul className="dropdown-menu">
                <li className="dropdown__item">
                  <a href="#test" className="dropdown__link">
                    Personal Settings
                  </a>
                </li>
              </ul>
            </AvatarWithPopover>
          </TopBarCell>
        </TopBarContent>
      </TopBar>
    </StoryItem>

    <StoryItem
      title="TopBar with notification"
      description="The topbar can display a notification"
    >
      <TopBar
        notification={
          <NotificationBar level="warning" center>
            Important information here!
          </NotificationBar>
        }
      >
        {/* @ts-expect-error TS(2322): Type '{ children: Element[]; left: true; xs: numbe... Remove this comment to see the full error message */}
        <TopBarContent left xs={10} md={10}>
          <TopBarCell>
            <Logo />
          </TopBarCell>
          <TopBarCell>
            <SectionHeader
              title="Project name"
              id="sh-123432"
              collapse
              noBorder
            >
              <MenuItem href="#test">Personal Settings</MenuItem>
            </SectionHeader>
          </TopBarCell>
          <TopBarCell bordered>
            <Navigation>
              <MenuItem href="#" active>
                Items
              </MenuItem>
              <MenuItem href="#">Archived Items</MenuItem>
            </Navigation>
          </TopBarCell>
        </TopBarContent>
        {/* @ts-expect-error TS(2322): Type '{ children: Element[]; right: true; xs: numb... Remove this comment to see the full error message */}
        <TopBarContent right xs={2} md={2}>
          <TopBarCell>
            {/* @ts-expect-error TS(2769): No overload matches this call. */}
            <Search className="top-bar__search-dropdown">
              <Search.Input onChange={() => {}} />
              <Search.Body>
                <Search.Options>
                  {/* @ts-expect-error TS(2741): Property 'displayChecked' is missing in type '{ la... Remove this comment to see the full error message */}
                  <Search.ToggleFilter
                    label="Search all projects"
                    clickHandler={() => {}}
                  />
                </Search.Options>
                <Search.List heading="Items">
                  <Search.ListItem title="bloop" subText="123 435">
                    hi there <em>waffles</em> hi!
                  </Search.ListItem>
                  <Search.ListItem title="blorp" subText="123 435">
                    hhello!! <em>waffles</em> hi!
                  </Search.ListItem>
                </Search.List>
                <Search.List heading="Content">
                  <Search.ListItem title="bloop" subText="123 435">
                    hi there <em>waffles</em> hi!
                  </Search.ListItem>
                  <Search.ListItem title="blorp" subText="123 435">
                    hhello!! <em>waffles</em> hi!
                  </Search.ListItem>
                </Search.List>
              </Search.Body>
            </Search>
          </TopBarCell>
          <TopBarCell>
            <AvatarWithPopover
              name="Angus Edwardson"
              initials="AE"
              email="example@gmail.com"
              triggerEvent="onClick"
              popoverClass="popover-dropdown"
              caret
            >
              <ul className="dropdown-menu">
                <li className="dropdown__item">
                  <a href="#test" className="dropdown__link">
                    Personal Settings
                  </a>
                </li>
              </ul>
            </AvatarWithPopover>
          </TopBarCell>
        </TopBarContent>
      </TopBar>
    </StoryItem>
  </div>
);

Topbar.parameters = {
  controls: { hideNoControlsWarning: true },
};
