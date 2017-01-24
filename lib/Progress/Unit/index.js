import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { Tooltip, OverlayTrigger } from 'react-bootstrap/lib';

class ProgressUnit extends Component {
  static buildTooltip(text, percent) {
    return <Tooltip id={Math.random()}>{ `${text} (${Math.round(percent)}%)` }</Tooltip>;
  }

  render() {
    const { percent, color, className, name, id, projectID, filterLink } = this.props;
    const classes = cx(['c-progress-unit', className]);
    const style = { width: `${percent}%` };
    const tooltip = ProgressUnit.buildTooltip(name, percent);

    if (color !== '') {
      style.backgroundColor = color;
    }

    return (
      <OverlayTrigger placement="top" overlay={tooltip} delayShow={100}>
        <a href={filterLink}>
          <div title={name} className={classes} style={style} />
        </a>
      </OverlayTrigger>
    );
  }
}

ProgressUnit.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  filterLink: PropTypes.string.isRequired,
  projectID: PropTypes.number,
  id: PropTypes.string,
};

ProgressUnit.defaultProps = {
  className: '',
  percent: '0%',
  name: '',
  color: '',
};

export default ProgressUnit;
