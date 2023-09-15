import React from "react";
import {
  FinderNavigation as FinderNavigationComponent,
  Icon,
  Layout,
} from "lib";
import { Resizable as ResizableComponent } from "../../lib/Resizable";

import StoryItem from "../styleguide/StoryItem";

export default {
  title: "GUI/Resizable",
  component: ResizableComponent,
};

export function Resizable() {
  return (
    <>
      <StoryItem
        title="Resizable folder menu"
        description="A nested list of 'folders' that can be resized"
      >
        <div
          style={{
            display: "flex",
            flex: "1",
            minHeight: "0",
            height: 600,
            width: "100%",
          }}
        >
          <ResizableComponent
            defaultWidth="240px"
            minWidth="240px"
            maxWidth="33.33%"
            useGutterOffset
          >
            {/* eslint-disable-next-line no-use-before-define */}
            <FolderMenu />
          </ResizableComponent>
          <div style={{ width: "100%" }}>
            <p>This content will appear next to the resizable component</p>
          </div>
        </div>
      </StoryItem>

      <StoryItem
        title="Vertically split resizable element"
        description="So you could have a resizable split-pane"
      >
        <div
          style={{
            display: "flex",
            flex: "1",
            minHeight: "0",
            border: "1px solid red",
            height: 200,
            width: "100%",
          }}
        >
          <ResizableComponent
            defaultWidth="50%"
            minWidth="33.33%"
            maxWidth="77.77%"
            useGutterOffset
          >
            <div
              style={{
                width: "400px",
                flexShrink: "0",
              }}
            >
              <p>
                Hello, World! Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </div>
          </ResizableComponent>
          <div
            style={{
              padding: "20px",
              width: "100%",
              minWidth: "0",
              flexDirection: "column",
              display: " flex !important",
            }}
          >
            <p>How are you?</p>
          </div>
        </div>
      </StoryItem>

      <StoryItem
        title="Single resizable element"
        description="Could be used to reveal a before and after of two images"
      >
        <div style={{ width: "100%" }}>
          <div style={{ border: "1px solid red", width: "50%" }}>
            <p>Not resizable</p>
          </div>
          <ResizableComponent
            defaultWidth="100%"
            maxWidth="75%"
            minWidth="200px"
            useGutterOffset
          >
            <div style={{ border: "1px solid green" }}>
              <p>Hello</p>
            </div>
          </ResizableComponent>
          <div style={{ border: "1px solid red", width: "50%" }}>
            <p>Not resizable</p>
          </div>
        </div>
      </StoryItem>
    </>
  );
}

function FolderMenu() {
  return (
    <Layout.InlineSidebar isFinder>
      <FinderNavigationComponent>
        <FinderNavigationComponent.Group>
          <FinderNavigationComponent.Item hoverSettings={false}>
            <FinderNavigationComponent.ItemContent>
              <a className="finder-item-link" href="https://www.google.com">
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
              <a className="finder-item-link" href="https://www.google.com">
                <Icon name="user" />
                Assigned items
                <FinderNavigationComponent.ItemSettings>
                  40
                </FinderNavigationComponent.ItemSettings>
              </a>
            </FinderNavigationComponent.ItemContent>
          </FinderNavigationComponent.Item>
        </FinderNavigationComponent.Group>
        <FinderNavigationComponent.Group title="folder">
          <FinderNavigationComponent.Item>
            <FinderNavigationComponent.ItemContent isFolder>
              <a className="finder-item-link" href="https://www.google.com">
                <Icon name="folder" />
                Another Folder
              </a>
            </FinderNavigationComponent.ItemContent>
            <FinderNavigationComponent.Item active>
              <FinderNavigationComponent.ItemContent isFolder>
                <a className="finder-item-link" href="https://www.google.com">
                  <Icon name="folderOpen" />
                  Another Folder
                </a>
              </FinderNavigationComponent.ItemContent>
              <FinderNavigationComponent.Item>
                <FinderNavigationComponent.ItemContent isFolder>
                  <a className="finder-item-link" href="https://www.google.com">
                    <Icon name="folder" />
                    Another Folder
                  </a>
                </FinderNavigationComponent.ItemContent>
                <FinderNavigationComponent.Item>
                  <FinderNavigationComponent.ItemContent isFolder>
                    <a
                      className="finder-item-link"
                      href="https://www.google.com"
                    >
                      <Icon name="folder" />
                      Another Folder
                    </a>
                  </FinderNavigationComponent.ItemContent>
                  <FinderNavigationComponent.Item>
                    <FinderNavigationComponent.ItemContent isFolder>
                      <a
                        className="finder-item-link"
                        href="https://www.google.com"
                      >
                        <Icon name="folder" />
                        Another Folder
                      </a>
                    </FinderNavigationComponent.ItemContent>
                    <FinderNavigationComponent.Item>
                      <FinderNavigationComponent.ItemContent isFolder>
                        <a
                          className="finder-item-link"
                          href="https://www.google.com"
                        >
                          <Icon name="folder" />
                          Another Folder
                        </a>
                      </FinderNavigationComponent.ItemContent>
                      <FinderNavigationComponent.Item>
                        <FinderNavigationComponent.ItemContent isFolder>
                          <a
                            className="finder-item-link"
                            href="https://www.google.com"
                          >
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
                  <a className="finder-item-link" href="https://www.google.com">
                    <Icon name="folder" />
                    Another Folder
                  </a>
                </FinderNavigationComponent.ItemContent>
              </FinderNavigationComponent.Item>
            </FinderNavigationComponent.Item>
            <FinderNavigationComponent.Item>
              <FinderNavigationComponent.ItemContent isFolder>
                <a className="finder-item-link" href="https://www.google.com">
                  <Icon name="folder" />
                  Another Folder
                </a>
              </FinderNavigationComponent.ItemContent>
            </FinderNavigationComponent.Item>
          </FinderNavigationComponent.Item>
          <FinderNavigationComponent.Item>
            <FinderNavigationComponent.ItemContent isFolder>
              <a className="finder-item-link" href="https://www.google.com">
                <Icon name="folder" />
                Another Folder
              </a>
            </FinderNavigationComponent.ItemContent>
          </FinderNavigationComponent.Item>
        </FinderNavigationComponent.Group>
      </FinderNavigationComponent>
    </Layout.InlineSidebar>
  );
}
