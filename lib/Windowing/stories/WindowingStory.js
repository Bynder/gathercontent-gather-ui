import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { Windowing, ItemRow, FolderRow } from '../../index';
import { WindowingContext } from '../Windowing';
import { createData } from './windowingData';

const stories = storiesOf('Components/Windowing', module);
stories.addDecorator(withKnobs);

stories
  .add('Flat', () => {
    const items = [...new Array(1000)].map((i, index) => ({
      id: index + 1
    }));

    return (
      <Windowing itemHeight={50} allIds={items} containerHeight="800px">
        <Windowing.Scroller>
          <Windowing.List>
            {({ inViewWindowingIds }) =>
              inViewWindowingIds.map((i, index) => (
                <Windowing.Item key={i.id} index={index}>
                  <ItemRow bordered>
                    <ItemRow.Name>hello world {i.id}</ItemRow.Name>
                  </ItemRow>
                </Windowing.Item>
              ))
            }
          </Windowing.List>
        </Windowing.Scroller>
      </Windowing>
    );
  })
  .add('Nested', () => {
    const parents = number('Number of parents', 20);
    const children = number('Number of children each parent has ', 20);

    const { allIds, parentIds, byId } = createData(parents, children);

    return (
      <Windowing
        itemHeight={50}
        buffer={20}
        allIds={allIds}
        containerHeight="500px"
      >
        <Windowing.Scroller>
          <Windowing.List>
            {({ inViewWindowingIds }) =>
              inViewWindowingIds.map(i => (
                <Windowing.Item
                  key={i}
                  index={allIds.indexOf(i)}
                  style={{
                    paddingLeft: `${byId[i].depth * 40}px`
                  }}
                >
                  <WindowingContext.Consumer>
                    {({ removeIds, addIds, allWindowingIds }) =>
                      parentIds.indexOf(i) === -1 ? (
                        <ItemRow bordered>
                          <ItemRow.Name>{byId[i].name}</ItemRow.Name>
                        </ItemRow>
                      ) : (
                        <FolderRow open>
                          {(show, setShow) => (
                            <FolderRow.Inner style={{ minWidth: '320px' }}>
                              <FolderRow.Name
                                show={show}
                                setShow={setShow}
                                handleOnClick={
                                  show
                                    ? () =>
                                        removeIds(
                                          allWindowingIds.indexOf(i) + 1,
                                          allWindowingIds.length -
                                            (allWindowingIds.indexOf(i) + 1)
                                        )
                                    : () =>
                                        addIds(
                                          allIds.slice(
                                            allIds.indexOf(i) + 1,
                                            allIds.length
                                          ),
                                          allWindowingIds.indexOf(i) + 1
                                        )
                                }
                              >
                                {byId[i].name}
                              </FolderRow.Name>
                            </FolderRow.Inner>
                          )}
                        </FolderRow>
                      )
                    }
                  </WindowingContext.Consumer>
                </Windowing.Item>
              ))
            }
          </Windowing.List>
        </Windowing.Scroller>
      </Windowing>
    );
  });
