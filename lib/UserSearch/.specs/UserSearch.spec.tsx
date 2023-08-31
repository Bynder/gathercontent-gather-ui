import {
    describe,
    expect,
    it,
    vi
  } from 'vitest';
  
  import React from 'react';
  
  import { fireEvent, render, screen } from '@testing-library/react';
  
import UserSearch from '..';

const mockUsers = [
  {
    id: 2,
    name: 'Bruce',
    avatar:
        'https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/208205_yHGd7vA5HRxsnMQpES4UzjJ7Yxgn6Bp54165gqksRXyDJhuOnW88H6djhLJeE2BZ.jpg',
    initials: 'BB',
    display: 'brucebanner',
    email: 'bruce@bruce.com'
    },
  {
    id: 'saul',
    display: 'saulgoodman',
    name: 'Saul Goodman',
    initials: 'SG',
    email: 'heythere@lol.com'
  },
  {
    id: '456',
    display: 'jessepinkman',
    name: 'Jesse Pinkman',
    email: 'heythere@lol.com',
    initials: 'JP',
    url:
      'https://d3iw72m71ie81c.cloudfront.net/2eae47ef-6f37-46fe-a02b-52cff401a8f9-me.jpg'
  }
];

  
  describe('UserSearch', () => {
    it('Renders a list of users', () => {
      render(
          <UserSearch users={mockUsers} />
      );

      expect(screen.getByText(mockUsers[0].name))
      expect(screen.getByText(mockUsers[1].name))
      expect(screen.getByText(mockUsers[2].name))
    });

    it('Lets you search for users', () => {
      render(
          <UserSearch users={mockUsers} />
      );

      fireEvent.change(screen.getByPlaceholderText('Search people...'), {target: {value: 'sau'}})

      expect(screen.queryByText(mockUsers[0].name)).toBeFalsy()
      expect(screen.getByText(mockUsers[1].name))
      expect(screen.queryByText(mockUsers[2].name)).toBeFalsy()

      fireEvent.change(screen.getByPlaceholderText('Search people...'), {target: {value: 'flump flamp'}})

      expect(screen.getByText('Oops! No people found.'))
    });

    it('Tells you if there are no users', () => {
      render(
          <UserSearch users={[]} noUserDisplay="There's no one here!" />
      );

      fireEvent.change(screen.getByPlaceholderText('Search people...'), {target: {value: 'sau'}})

      expect(screen.getByText("There's no one here!"));
    });
    
  });