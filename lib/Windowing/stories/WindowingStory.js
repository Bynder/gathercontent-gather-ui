import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { Windowing, ItemRow, FolderRow } from '../../index';
import { createData } from './windowingData';
import { WindowingIdsMock } from './WindowingIdsMock';

const stories = storiesOf('Components/Windowing', module);
stories.addDecorator(withKnobs);

export const Flat = () => {
  const items = [...new Array(1000)].map((i, index) => ({
    id: index + 1,
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
};

export const Nested = () => {
  const parents = number('Number of parents', 20);
  const children = number('Number of children each parent has ', 20);

  const { allIds, parentIds, byId } = createData(parents, children);

  return (
    <WindowingIdsMock allWindowingIds={allIds}>
      {({ allWindowingIds, addIds, removeIds }) => (
        <Windowing
          itemHeight={50}
          buffer={20}
          allIds={allWindowingIds}
          containerHeight="500px"
        >
          <Windowing.Scroller style={{}}>
            <Windowing.List>
              {({ inViewWindowingIds }) =>
                inViewWindowingIds.map((i) => (
                  <Windowing.Item
                    key={i}
                    index={allIds.indexOf(i)}
                    style={{
                      paddingLeft: `${byId[i].depth * 40}px`,
                    }}
                  >
                    {parentIds.indexOf(i) === -1 ? (
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
                    )}
                  </Windowing.Item>
                ))
              }
            </Windowing.List>
          </Windowing.Scroller>
        </Windowing>
      )}
    </WindowingIdsMock>
  );
};
