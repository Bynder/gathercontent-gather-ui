import React from 'react';
import { storiesOf } from '@storybook/react';
import { FinderNavigation, Icon } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('FinderNavigation', () => (
  <div>
    <StoryItem
      title="FinderNavigation Components"
      description="A nested list of 'folders'"
    >
      <FinderNavigation className="bg-neutral-95">
        <FinderNavigation.Group>
          <FinderNavigation.Item>
            <FinderNavigation.ItemContent>
              <a className="finder__item-link" href="google.com">
                <Icon name="item" className="finder__item-link-icon" />
                <span className="finder__item-link-text">All items</span>
              </a>
            </FinderNavigation.ItemContent>
          </FinderNavigation.Item>

          <FinderNavigation.Item>
            <FinderNavigation.ItemContent>
              <a className="finder__item-link" href="google.com">
                <Icon name="user" className="finder__item-link-icon" />
                <span className="finder__item-link-text">Assigned items</span>
              </a>
            </FinderNavigation.ItemContent>
          </FinderNavigation.Item>
        </FinderNavigation.Group>
        <FinderNavigation.Group title="folder">

          <FinderNavigation.Item>
            <FinderNavigation.ItemContent isFolder>
              <a className="finder__item-link" href="google.com">
                <Icon name="folder" className="finder__item-link-icon" />
                <span className="finder__item-link-text">Another Folder</span>
              </a>
            </FinderNavigation.ItemContent>
            <FinderNavigation.Item active>
              <FinderNavigation.ItemContent active isFolder>
                <a className="finder__item-link" href="google.com">
                  <Icon name="folderOpen" className="finder__item-link-icon" />
                  <span className="finder__item-link-text">Another Folder</span>
                </a>
              </FinderNavigation.ItemContent>
              <FinderNavigation.Item>
                <FinderNavigation.ItemContent isFolder>
                  <a className="finder__item-link" href="google.com">
                    <Icon name="folder" className="finder__item-link-icon" />
                    <span className="finder__item-link-text">Another Folder</span>
                  </a>
                </FinderNavigation.ItemContent>
                <FinderNavigation.Item>
                  <FinderNavigation.ItemContent isFolder>
                    <a className="finder__item-link" href="google.com">
                      <Icon name="folder" className="finder__item-link-icon" />
                      <span className="finder__item-link-text">Another Folder</span>
                    </a>
                  </FinderNavigation.ItemContent>
                  <FinderNavigation.Item>
                    <FinderNavigation.ItemContent isFolder>
                      <a className="finder__item-link" href="google.com">
                        <Icon name="folder" className="finder__item-link-icon" />
                        <span className="finder__item-link-text">Another Folder</span>
                      </a>
                    </FinderNavigation.ItemContent>
                    <FinderNavigation.Item>
                      <FinderNavigation.ItemContent isFolder>
                        <a className="finder__item-link" href="google.com">
                          <Icon name="folder" className="finder__item-link-icon" />
                          <span className="finder__item-link-text">Another Folder</span>
                        </a>
                      </FinderNavigation.ItemContent>
                      <FinderNavigation.Item>
                        <FinderNavigation.ItemContent isFolder>
                          <a className="finder__item-link" href="google.com">
                            <Icon name="folder" className="finder__item-link-icon" />
                            <span className="finder__item-link-text">Another Folder</span>
                          </a>
                        </FinderNavigation.ItemContent>
                      </FinderNavigation.Item>
                    </FinderNavigation.Item>
                  </FinderNavigation.Item>
                </FinderNavigation.Item>
              </FinderNavigation.Item>
              <FinderNavigation.Item>
                <FinderNavigation.ItemContent isFolder>
                  <a className="finder__item-link" href="google.com">
                    <Icon name="folder" className="finder__item-link-icon" />
                    <span className="finder__item-link-text">Another Folder</span>
                  </a>
                </FinderNavigation.ItemContent>
              </FinderNavigation.Item>
            </FinderNavigation.Item>
            <FinderNavigation.Item>
              <FinderNavigation.ItemContent isFolder>
                <a className="finder__item-link" href="google.com">
                  <Icon name="folder" className="finder__item-link-icon" />
                  <span className="finder__item-link-text">Another Folder</span>
                </a>
              </FinderNavigation.ItemContent>
            </FinderNavigation.Item>
          </FinderNavigation.Item>
          <FinderNavigation.Item>
            <FinderNavigation.ItemContent isFolder>
              <a className="finder__item-link" href="google.com">
                <Icon name="folder" className="finder__item-link-icon" />
                <span className="finder__item-link-text">Another Folder</span>
              </a>
            </FinderNavigation.ItemContent>
          </FinderNavigation.Item>
        </FinderNavigation.Group>
      </FinderNavigation>
    </StoryItem>
  </div>
));
