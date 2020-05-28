import React, { Fragment } from 'react';
import { map } from 'lodash';
import { storiesOf } from '@storybook/react';
import Pill from '../index';
import Icon from '../../Icon';
import StoryItem from '../../../stories/styleguide/StoryItem';

storiesOf('Components', module).add('Pill', () => (
  <Fragment>
    {map(Pill.types, value => (
      <StoryItem title={`Pill ${value}`}>
        <div className="flex flex-row items-center">
          <Pill type={value}>
            <Icon name="item" />{' '}
            <span className="ml-3">
              Name is <b>David</b>
            </span>
          </Pill>

          <Pill type={value} size={Pill.sizes.xs} className="ml-4">
            <span>
              Name is <b>David</b>
            </span>
          </Pill>
        </div>
      </StoryItem>
    ))}
  </Fragment>
));
