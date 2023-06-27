import React from 'react';
import {
  bool,
  string,
  oneOfType,
  arrayOf,
  node,
  shape,
  func
} from 'prop-types';
import cx from 'classnames';
import BlankSlateSVG from '../../assets/blankstate.svg';
import BlankSlate2SVG from '../../assets/blankstate-2.svg';

const BlankSlate = props => {
  const classes = cx(`blank-slate p-3 ${props.className}`, {
    'blank-slate--fixed': props.fixed,
    'blank-slate--arrow': props.slateStyle === 'arrow',
    'flex flex-col flex-1 justify-center': props.fullHeight
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
              <props.customSVG
                className={`blank-slate__svg--custom ${props.SVGClassName}`}
              />
            ) : (
              <BuiltInSVG className={props.SVGClassName} />
            )}
          </div>
        )}
      </>
      <div className="blank-slate__content">{props.children}</div>
    </div>
  );
};

BlankSlate.propTypes = {
  fixed: bool,
  fullHeight: bool,
  slateStyle: string,
  children: oneOfType([arrayOf(node), node, arrayOf(shape()), string]),
  customSVG: oneOfType([node, shape(), bool, func]),
  SVGClassName: string,
  className: string,
  emoji: string,
  emojiLabel: string
};

BlankSlate.defaultProps = {
  fixed: false,
  fullHeight: false,
  children: '',
  slateStyle: 'default',
  customSVG: false,
  className: '',
  emoji: '',
  emojiLabel: 'blank slate emoji',
  SVGClassName: ''
};

export default BlankSlate;
