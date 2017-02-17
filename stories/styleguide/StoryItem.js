import React from 'react';

const StoryItem = (props) => {
  return (
      <div className="story-item">
        <h3 className="story-item__title">{props.title}</h3>
        <p className="story-item__description">{props.description}</p>
        {props.children}
      </div>
    );
};

export default StoryItem;
