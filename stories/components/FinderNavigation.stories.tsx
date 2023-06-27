import React from 'react';
import {
  FinderNavigation as FinderNavigationComponent,
  Icon,
  Layout
} from '../../lib';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Legacy/Finder Navigation'
};

const Meta = <Icon name="plus" />;

export const FinderNavigation = () => (
  <div>
    <StoryItem
      title="FinderNavigationComponent Components"
      description="A nested list of 'folders'"
    >
      <Layout.InlineSidebar isFinder>
        <FinderNavigationComponent>
          <FinderNavigationComponent.Group>
            <FinderNavigationComponent.Item hoverSettings={false}>
              <FinderNavigationComponent.ItemContent>
                <a className="finder-item-link" href="google.com">
                  <Icon name="item" />
                  All items
                  <FinderNavigationComponent.ItemSettings>
                    200
                  </FinderNavigationComponent.ItemSettings>
                </a>
              </FinderNavigationComponent.ItemContent>
            </FinderNavigationComponent.Item>

            <FinderNavigationComponent.Item hoverSettings={false}>
              <FinderNavigationComponent.ItemContent>
                <a className="finder-item-link" href="google.com">
                  <Icon name="user" />
                  Assigned items
                  <FinderNavigationComponent.ItemSettings>
                    40
                  </FinderNavigationComponent.ItemSettings>
                </a>
              </FinderNavigationComponent.ItemContent>
            </FinderNavigationComponent.Item>
          </FinderNavigationComponent.Group>
          <FinderNavigationComponent.Group title="folder" meta={Meta}>
            <FinderNavigationComponent.Item>
              <FinderNavigationComponent.ItemContent isFolder>
                <a className="finder-item-link" href="google.com">
                  <Icon name="folder" />
                  Another Folder
                </a>
              </FinderNavigationComponent.ItemContent>
              <FinderNavigationComponent.Item active>
                <FinderNavigationComponent.ItemContent active isFolder>
                  <a className="finder-item-link" href="google.com">
                    <Icon name="folderOpen" />
                    Another Folder
                  </a>
                </FinderNavigationComponent.ItemContent>
                <FinderNavigationComponent.Item>
                  <FinderNavigationComponent.ItemContent isFolder>
                    <a className="finder-item-link" href="google.com">
                      <Icon name="folder" />
                      Another Folder
                    </a>
                  </FinderNavigationComponent.ItemContent>
                  <FinderNavigationComponent.Item>
                    <FinderNavigationComponent.ItemContent isFolder>
                      <a className="finder-item-link" href="google.com">
                        <Icon name="folder" />
                        Another Folder
                      </a>
                    </FinderNavigationComponent.ItemContent>
                    <FinderNavigationComponent.Item>
                      <FinderNavigationComponent.ItemContent isFolder>
                        <a className="finder-item-link" href="google.com">
                          <Icon name="folder" />
                          Another Folder
                        </a>
                      </FinderNavigationComponent.ItemContent>
                      <FinderNavigationComponent.Item>
                        <FinderNavigationComponent.ItemContent isFolder>
                          <a className="finder-item-link" href="google.com">
                            <Icon name="folder" />
                            Another Folder
                          </a>
                        </FinderNavigationComponent.ItemContent>
                        <FinderNavigationComponent.Item>
                          <FinderNavigationComponent.ItemContent isFolder>
                            <a className="finder-item-link" href="google.com">
                              <Icon name="folder" />
                              Another Folder
                            </a>
                          </FinderNavigationComponent.ItemContent>
                        </FinderNavigationComponent.Item>
                      </FinderNavigationComponent.Item>
                    </FinderNavigationComponent.Item>
                  </FinderNavigationComponent.Item>
                </FinderNavigationComponent.Item>
                <FinderNavigationComponent.Item>
                  <FinderNavigationComponent.ItemContent isFolder>
                    <a className="finder-item-link" href="google.com">
                      <Icon name="folder" />
                      Another Folder
                    </a>
                  </FinderNavigationComponent.ItemContent>
                </FinderNavigationComponent.Item>
              </FinderNavigationComponent.Item>
              <FinderNavigationComponent.Item>
                <FinderNavigationComponent.ItemContent isFolder>
                  <a className="finder-item-link" href="google.com">
                    <Icon name="folder" />
                    Another Folder
                  </a>
                </FinderNavigationComponent.ItemContent>
              </FinderNavigationComponent.Item>
            </FinderNavigationComponent.Item>
            <FinderNavigationComponent.Item>
              <FinderNavigationComponent.ItemContent isFolder>
                <a className="finder-item-link" href="google.com">
                  <Icon name="folder" />
                  Another Folder
                </a>
              </FinderNavigationComponent.ItemContent>
            </FinderNavigationComponent.Item>
          </FinderNavigationComponent.Group>
        </FinderNavigationComponent>
      </Layout.InlineSidebar>
    </StoryItem>
  </div>
);

FinderNavigation.parameters = {
  controls: { hideNoControlsWarning: true }
};
