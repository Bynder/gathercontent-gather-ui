import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import binSVG from './../../assets/icons/image-trash.svg';
import commentSVG from './../../assets/icons/image-comment.svg';
import fullScreenSVG from './../../assets/icons/image-fullscreen.svg';
import downloadSVG from './../../assets/icons/image-download.svg';

class FileCard extends Component {
  static propTypes = {
    image: PropTypes.string,
    hasComments: PropTypes.bool,
    filename: PropTypes.string,
  }

  constructor() {
    super();
  }

  getActions(type) {
    switch (type) {
      case 'image':
        return [
          <button className="file-card__action file-card__action--download">{ downloadSVG() }</button>,
          <button className="file-card__action file-card__action--fullscreen">{ fullScreenSVG() }</button>,
          <button className="file-card__action file-card__action--comment">{ commentSVG() }</button>,
          <button className="file-card__action file-card__action--delete">{ binSVG() }</button>,
        ];
    }
  }

  render() {
    const actions = this.getActions('image');

    const url = `url(${this.props.image})`;
    const classes = cx({
      'file-card': true,
      'has-comments': this.props.hasComments,
    });

    return (
      <div className={classes}>
        <div className="file-card__wrapper">
          <div style={{ backgroundImage: url }} className="file-card__thumbnail"></div>
          <div className="file-card__actions">{this.props.actions}
            {actions}
          </div>
          <div className="file-card__file">{this.props.file}</div>
          <div className="file-card__label">{this.props.filename}</div>
        </div>
      </div>
    );
  }
}

export default FileCard;
