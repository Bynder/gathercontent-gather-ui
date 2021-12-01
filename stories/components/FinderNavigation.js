import React from 'react';
import { FinderNavigation, Icon, Layout } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Components',
};

export const _FinderNavigation = () => (
  <div>
    <StoryItem
      title="FinderNavigation Components"
      description="A nested list of 'folders'"
    >
      <Layout.InlineSidebar isFinder>
        <FinderNavigation>
          <FinderNavigation.Group>
            <FinderNavigation.Item hoverSettings={false}>
              <FinderNavigation.ItemContent>
                <a className="finder-item-link" href="google.com">
                  <Icon name="item" />
                  All items
                  <FinderNavigation.ItemSettings>
                    200
                  </FinderNavigation.ItemSettings>
                </a>
              </FinderNavigation.ItemContent>
            </FinderNavigation.Item>

            <FinderNavigation.Item hoverSettings={false}>
              <FinderNavigation.ItemContent>
                <a className="finder-item-link" href="google.com">
                  <Icon name="user" />
                  Assigned items
                  <FinderNavigation.ItemSettings>
                    40
                  </FinderNavigation.ItemSettings>
                </a>
              </FinderNavigation.ItemContent>
            </FinderNavigation.Item>
          </FinderNavigation.Group>
          <FinderNavigation.Group title="folder">
            <FinderNavigation.Item>
              <FinderNavigation.ItemContent isFolder>
                <a className="finder-item-link" href="google.com">
                  <Icon name="folder" />
                  Another Folder
                </a>
              </FinderNavigation.ItemContent>
              <FinderNavigation.Item active>
                <FinderNavigation.ItemContent active isFolder>
                  <a className="finder-item-link" href="google.com">
                    <Icon name="folderOpen" />
                    Another Folder
                  </a>
                </FinderNavigation.ItemContent>
                <FinderNavigation.Item>
                  <FinderNavigation.ItemContent isFolder>
                    <a className="finder-item-link" href="google.com">
                      <Icon name="folder" />
                      Another Folder
                    </a>
                  </FinderNavigation.ItemContent>
                  <FinderNavigation.Item>
                    <FinderNavigation.ItemContent isFolder>
                      <a className="finder-item-link" href="google.com">
                        <Icon name="folder" />
                        Another Folder
                      </a>
                    </FinderNavigation.ItemContent>
                    <FinderNavigation.Item>
                      <FinderNavigation.ItemContent isFolder>
                        <a className="finder-item-link" href="google.com">
                          <Icon name="folder" />
                          Another Folder
                        </a>
                      </FinderNavigation.ItemContent>
                      <FinderNavigation.Item>
                        <FinderNavigation.ItemContent isFolder>
                          <a className="finder-item-link" href="google.com">
                            <Icon name="folder" />
                            Another Folder
                          </a>
                        </FinderNavigation.ItemContent>
                        <FinderNavigation.Item>
                          <FinderNavigation.ItemContent isFolder>
                            <a className="finder-item-link" href="google.com">
                              <Icon name="folder" />
                              Another Folder
                            </a>
                          </FinderNavigation.ItemContent>
                        </FinderNavigation.Item>
                      </FinderNavigation.Item>
                    </FinderNavigation.Item>
                  </FinderNavigation.Item>
                </FinderNavigation.Item>
                <FinderNavigation.Item>
                  <FinderNavigation.ItemContent isFolder>
                    <a className="finder-item-link" href="google.com">
                      <Icon name="folder" />
                      Another Folder
                    </a>
                  </FinderNavigation.ItemContent>
                </FinderNavigation.Item>
              </FinderNavigation.Item>
              <FinderNavigation.Item>
                <FinderNavigation.ItemContent isFolder>
                  <a className="finder-item-link" href="google.com">
                    <Icon name="folder" />
                    Another Folder
                  </a>
                </FinderNavigation.ItemContent>
              </FinderNavigation.Item>
            </FinderNavigation.Item>
            <FinderNavigation.Item>
              <FinderNavigation.ItemContent isFolder>
                <a className="finder-item-link" href="google.com">
                  <Icon name="folder" />
                  Another Folder
                </a>
              </FinderNavigation.ItemContent>
            </FinderNavigation.Item>
          </FinderNavigation.Group>
        </FinderNavigation>
      </Layout.InlineSidebar>
    </StoryItem>
  </div>
);

_FinderNavigation.story = {
  name: 'FinderNavigation',
};
