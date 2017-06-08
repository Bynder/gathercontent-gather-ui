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
    label: PropTypes.string,
    type: PropTypes.string,
  }

  constructor() {
    super();
  }

  getActions(type) {
    switch (type) {
      case 'image':
        return [
          <button onClick={this.props.downloadHandler} className="file-card__action file-card__action--download">{ downloadSVG() }</button>,
          <button onClick={this.props.fullscreenHandler} className="file-card__action file-card__action--fullscreen">{ fullScreenSVG() }</button>,
          <button onClick={this.props.commentHandler} className="file-card__action file-card__action--comment">{ commentSVG() }</button>,
          <button onClick={this.props.deleteHandler} className="file-card__action file-card__action--delete">{ binSVG() }</button>,
        ];

      case 'text':
        return [
          <button onClick={this.props.downloadHandler} className="file-card__action file-card__action--download">{ downloadSVG() }</button>,
          <button onClick={this.props.commentHandler} className="file-card__action file-card__action--comment">{ commentSVG() }</button>,
          <button onClick={this.props.deleteHandler} className="file-card__action file-card__action--delete">{ binSVG() }</button>,
        ];

      default:
        return [];
    }
  }

  renderNoThumbnail(filename) {
    const ext = filename.substr(filename.lastIndexOf('.') + 1);
    return <div className="file-card__thumbnail file-card__thumbnail--no-preview">{ext}</div>;
  }

  render() {
    const { filename, image, type } = this.props;
    const actions = this.getActions(type);

    const url = `url(${image})`;
    const classes = cx({
      'file-card': true,
      'has-comments': this.props.hasComments,
    });

    return (
      <div className={classes}>
        <div className="file-card__wrapper">
          { image &&
            <div title={this.props.label} style={{ backgroundImage: url }} className="file-card__thumbnail" />
          }

          { !image &&
            this.renderNoThumbnail(filename)
          }
          <div className="file-card__actions">
            {actions}
          </div>
          <div className="file-card__label">{this.props.filename}</div>
        </div>
      </div>
    );
  }
}

export default FileCard;
