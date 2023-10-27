import React from "react";

const StoryItem = (props: any) => {
  return (
    <div className="gui-story-item">
      <h3 className="gui-story-item__title">{props.title}</h3>
      <p className="gui-story-item__description">{props.description}</p>
      {props.children}
    </div>
  );
};

export default StoryItem;
