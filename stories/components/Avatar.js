import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Avatar,
  AvatarGroup,
  AvatarWithPopover,
  ParticipantInfo,
  AvatarWithInformation
} from '../../lib';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('Avatar', () => (
  <div>
    <StoryItem
      title="Avatar – base"
      description="A base avatar will fall back to initials if no url prop is passed."
    >
      <Avatar name="Angus Edwardson" initials="AE" />
    </StoryItem>

    <StoryItem
      title="Avatar – highlighted"
      description="An avatar can be highlighted."
    >
      <Avatar name="Angus Edwardson" initials="AE" isHighlighted />
    </StoryItem>

    <StoryItem
      title="Avatar – with image"
      description="An avatar can display an image."
    >
      <Avatar url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg" />
    </StoryItem>

    <StoryItem
      title="Avatar - offline"
      description="An avatar can show a user as offline."
    >
      <Avatar
        url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg"
        name="Angus Edwardson"
        initials="AE"
        isOffline
      />
      <Avatar name="Angus Edwardson" initials="AE" isOffline />
    </StoryItem>

    <StoryItem
      title="Avatar - with popover using a dropdown menu"
      description="An avatar can show a popover on focus or hover."
    >
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
    </StoryItem>

    <StoryItem
      title="Avatar - with popover"
      description="An avatar can show a popover on focus or hover."
    >
      <AvatarWithPopover
        name="Angus Edwardson"
        initials="AE"
        email="example@gmail.com"
      >
        <ParticipantInfo
          name="Angus Edwardson"
          email="example@gmail.com"
          pillboxText="Assigned"
        />
      </AvatarWithPopover>
    </StoryItem>

    <StoryItem
      title="Avatar - custom border colour"
      description="An avatar can have a custom border colour."
    >
      <Avatar
        url="https://d3iw72m71ie81c.cloudfront.net/2eae47ef-6f37-46fe-a02b-52cff401a8f9-me.jpg"
        colour="red"
      />
    </StoryItem>

    <StoryItem
      title="Avatar – with name"
      description="An avatar can display the users name."
    >
      <AvatarWithInformation
        url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg"
        name="Mr Ben"
      />
    </StoryItem>

    <StoryItem
      title="Avatar – with email"
      description="An avatar can display the users email."
    >
      <AvatarWithInformation
        url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg"
        email="heythere@lol.com"
      />
    </StoryItem>

    <StoryItem
      title="Avatar – with name and email"
      description="An avatar can display the users email."
    >
      <AvatarWithInformation
        url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg"
        email="heythere@lol.com"
        name="Mr Ben"
      />
    </StoryItem>

    <StoryItem
      title="Avatar Group"
      description="An avatar group has a toggle to show extra users."
    >
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
        <Avatar initials="JD" name="James Deer" colour="rgb(95, 207, 128)" />
        <Avatar initials="AD" name="Alice Deer" colour="rgb(249, 223, 110)" />
        <Avatar initials="M" name="Mat" colour="rgb(150, 93, 232)" />
        <Avatar initials="PR" name="Pickle Rik" colour="rgb(147, 114, 79)" />
      </AvatarGroup>
    </StoryItem>

    <StoryItem
      title="Avatar Group - with popover"
      description="An avatar can show a popover on focus or hover."
    >
      <AvatarGroup maximum={2}>
        <AvatarWithPopover
          name="Angus Edwardson"
          initials="AE"
          colour="rgb(95, 207, 128)"
        >
          <ParticipantInfo
            name="Angus Edwardson"
            email="example@gmail.com"
            pillboxText="Assigned"
          />
        </AvatarWithPopover>
        <AvatarWithPopover
          name="James Darracott"
          initials="JD"
          colour="rgb(61, 138, 235)"
        >
          <ParticipantInfo name="James Darracott" email="example@gmail.com" />
        </AvatarWithPopover>
        <AvatarWithPopover
          name="Richard Swagshaw"
          initials="RS"
          colour="rgb(252, 92, 84)"
        >
          <ParticipantInfo name="Richard Swagshaw" email="example@gmail.com" />
        </AvatarWithPopover>
      </AvatarGroup>
    </StoryItem>
  </div>
));
