import React from 'react';
import PropTypes from 'prop-types';
import FileCardPlaceholderSVG from '../../assets/filecardplaceholder.svg';

const FileCardPlaceholder = props => (
  <div className={`filecard__placeholder ${props.className}`}>
    <div className="filecard__placeholder__svg">
      <FileCardPlaceholderSVG />
    </div>
    <div className="filecard__placeholder__svg">
      <FileCardPlaceholderSVG />
    </div>
    <div className="filecard__placeholder__svg">
      <FileCardPlaceholderSVG />
    </div>
    {props.children}
  </div>
);

FileCardPlaceholder.propTypes = {
  children: PropTypes.shape(),
  className: PropTypes.string
};

FileCardPlaceholder.defaultProps = {
  className: '',
  children: null
};

export default FileCardPlaceholder;
