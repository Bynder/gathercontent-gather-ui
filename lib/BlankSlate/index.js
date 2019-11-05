import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import BlankSlateSVG from '../../assets/blankstate.svg';
import BlankSlate2SVG from '../../assets/blankstate-2.svg';

const BlankSlate = props => {
  const classes = cx(`blank-slate ${props.className}`, {
    'blank-slate--fixed': props.fixed,
    'blank-slate--arrow': props.slateStyle === 'arrow'
  });

  const BuiltInSVG =
    props.slateStyle === 'arrow' ? BlankSlate2SVG : BlankSlateSVG;
  return (
    <div className={classes}>
      <>
        {props.emoji ? (
          <span
            className="blank-slate__emoji"
            role="img"
            aria-label={props.emojiLabel}
          >
            {props.emoji}
          </span>
        ) : (
          <div className="blank-slate__svg">
            {props.customSVG ? (
              <props.customSVG className="blank-slate__svg--custom" />
            ) : (
              <BuiltInSVG />
            )}
          </div>
        )}
      </>
      <div className="blank-slate__content">{props.children}</div>
    </div>
  );
};

BlankSlate.propTypes = {
  fixed: PropTypes.bool,
  slateStyle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape()),
    PropTypes.string
  ]),
  customSVG: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.shape(),
    PropTypes.bool,
    PropTypes.func
  ]),
  className: PropTypes.string,
  emoji: PropTypes.string,
  emojiLabel: PropTypes.string
};

BlankSlate.defaultProps = {
  fixed: false,
  children: '',
  slateStyle: 'default',
  customSVG: false,
  className: '',
  emoji: '',
  emojiLabel: 'blank slate emoji'
};

export default BlankSlate;
