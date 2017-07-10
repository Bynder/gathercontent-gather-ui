import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    showDelete: PropTypes.bool,
    type: PropTypes.string.isRequired,
    actions: PropTypes.shape({}).isRequired,
  };

  static defaultProps = {
    actions: [],
    image: '',
    showDelete: true,
    filename: '',
    label: '',
    hasComments: false,
  };

  constructor() {
    super();
    this.getActions = this.getActions.bind(this);
  }

  getActions(type) {
    switch (type) {
      case 'image':
        return [
          <button onClick={this.props.actions.downloadHandler} className="file-card__action file-card__action--download">{ downloadSVG() }</button>,
          <button onClick={this.props.actions.fullscreenHandler} className="file-card__action file-card__action--fullscreen">{ fullScreenSVG() }</button>,
          <button onClick={this.props.actions.commentHandler} className="file-card__action file-card__action--comment">{ commentSVG() }</button>,
          this.props.showDelete && <button onClick={this.props.actions.deleteHandler} className="file-card__action file-card__action--delete">{ binSVG() }</button>,
        ];

      case 'text':
        return [
          <button onClick={this.props.actions.downloadHandler} className="file-card__action file-card__action--download">{ downloadSVG() }</button>,
          <button onClick={this.props.actions.commentHandler} className="file-card__action file-card__action--comment">{ commentSVG() }</button>,
          this.props.showDelete && <button onClick={this.props.actions.deleteHandler} className="file-card__action file-card__action--delete">{ binSVG() }</button>,
        ];

      default:
        return [];
    }
  }

  static renderNoThumbnail(filename) {
    const ext = filename.substr(filename.lastIndexOf('.') + 1);
    return <div className="file-card__thumbnail file-card__thumbnail--no-preview">{ext}</div>;
  }

  render() {
    const { filename, image, type } = this.props;
    const actions = this.getActions(type);

    const url = `url(${image})`;
    const classes = `file-card ${this.props.hasComments ? 'file-card__has-comments' : ''}`;

    return (
      <div className={classes}>
        <div className="file-card__wrapper">
          { image &&
            <div title={this.props.label} style={{ backgroundImage: url }} className="file-card__thumbnail" />
          }

          { !image &&
            FileCard.renderNoThumbnail(filename)
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
