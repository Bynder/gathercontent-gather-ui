import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import BlankSlateSVG from '../../assets/blankstate.svg';
import BlankSlate2SVG from '../../assets/blankstate-2.svg';

const BlankSlate = props => {
  const classes = cx('blank-slate', {
    'blank-slate--fixed': props.fixed,
    'blank-slate--arrow': props.style === 'arrow',
  });
  if (props.style === 'arrow') {
    return (
      <div className={classes}>
        <BlankSlate2SVG className="blank-slate__svg" />
        <div className="blank-slate__content">{props.children}</div>
      </div>
    )
  }
  return (
    <div className={classes}>
      <BlankSlateSVG className="blank-slate__svg" />
      <div className="blank-slate__content">{props.children}</div>
    </div>
  );
};

BlankSlate.propTypes = {
  fixed: PropTypes.bool,
  style: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape()),
    PropTypes.string
  ])
};

BlankSlate.defaultProps = {
  fixed: false,
  children: '',
  style: 'content',
};

export default BlankSlate;
