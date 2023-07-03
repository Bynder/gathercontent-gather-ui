import React from 'react';
import TreeLineComponent from '..';

import StoryItem from '../../../stories/styleguide/StoryItem';

export default {
  title: 'TreeLines',
  component: TreeLineComponent
};

export function Treelines() {
  return (
    <div>
      <StoryItem
        title="TreeLines"
        description="Used for indicating indentation in hierarchical folder structures"
      >
        <div className="treelines__wrapper">
          <TreeLineComponent quantity={0} />
          <p className="m-0">Root folder</p>
        </div>
        <div className="treelines__wrapper">
          <TreeLineComponent quantity={1} />
          <p className="m-0 pl-5">Item 1</p>
        </div>
        <div className="treelines__wrapper">
          <TreeLineComponent quantity={2} />
          <p className="m-0 pl-5">Item 1.1</p>
        </div>
        <div className="treelines__wrapper">
          <TreeLineComponent quantity={3} />
          <p className="m-0 pl-5">Item 1.1.1</p>
        </div>
        <div className="treelines__wrapper">
          <TreeLineComponent quantity={2} />
          <p className="m-0 pl-5">Item 1.2</p>
        </div>
        <div className="treelines__wrapper">
          <TreeLineComponent quantity={2} />
          <p className="m-0 pl-5">Item 1.3</p>
        </div>
        <div className="treelines__wrapper">
          <TreeLineComponent quantity={1} />
          <p className="m-0 pl-5">Item 2</p>
        </div>
        <div className="treelines__wrapper">
          <TreeLineComponent quantity={1} />
          <p className="m-0 pl-5">Item 3</p>
        </div>
      </StoryItem>
    </div>
  );
}
