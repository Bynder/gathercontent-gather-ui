import React from 'react';
import { bool, func, string } from 'prop-types';
import CheckToggle from '../CheckToggle';

export function CommentSubscribeToggle({ onToggle, isChecked, id }) {
  return (
    <CheckToggle
      displaySmall
      displayChecked
      labelRight="Subscribe"
      clickHandler={onToggle}
      checked={isChecked}
      id={id}
      autoToggle={false}
      className="p-2"
    />
  );
}

CommentSubscribeToggle.propTypes = {
  onToggle: func,
  isChecked: bool,
  id: string
};

CommentSubscribeToggle.defaultProps = {
  onToggle: () => {},
  isChecked: false,
  id: ''
};
