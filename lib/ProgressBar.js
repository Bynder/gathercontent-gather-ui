import React from 'react';
import cx from 'classnames';
import { Tooltip, OverlayTrigger } from 'react-bootstrap/lib';
import utils from '../../helpers/utils';

const ProgressBar = ({ className, children }) => {
  const classes = cx(['c-progress-bar', className]);

  return (
    <div className={classes}>
      { children }
    </div>
  );
};

ProgressBar.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
};

ProgressBar.defaultProps = {
  className: '',
};

class ProgressUnit extends React.Component {
  static buildTooltip(text, percent) {
    return <Tooltip id={Math.random()}>{ `${text} (${Math.round(percent)}%)` }</Tooltip>;
  }

  static createFilterLink(projectID, statusID) {
    return utils.makeUrl(`/projects/items/${projectID}/#filter-${statusID}`);
  }

  render() {
    const { percent, color, className, name, id, projectID } = this.props;
    const classes = cx(['c-progress-unit', className]);
    const style = { width: `${percent}%` };
    const tooltip = ProgressUnit.buildTooltip(name, percent);
    const filterLink = ProgressUnit.createFilterLink(projectID, id);

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
  className: React.PropTypes.string,
  color: React.PropTypes.string.isRequired,
  percent: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  projectID: React.PropTypes.number,
  id: React.PropTypes.string,
};

ProgressUnit.defaultProps = {
  className: '',
  percent: '0%',
  name: '',
  color: '',
};

const Progress = {
  Bar: ProgressBar,
  Unit: ProgressUnit,
};

export default Progress;
