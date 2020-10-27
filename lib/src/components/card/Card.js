import React from 'react';
import { bool, func, string } from 'prop-types';
import cx from 'classnames';
import { CardContent } from './CardContent';

function Card({
  onClick,
  className,
  children,
  innerClassNames,
  selected,
  highlighted,
  added,
  removed
}) {
  const classNames = cx('card outline-none', className, {
    'card-interactive': onClick,
    'card-selected': selected,
    'card-highlighted': highlighted,
    'card-added': added,
    'card-removed': removed
  });

  const innerClasses = cx('card-inner', innerClassNames);

  const handleEditKeyPress = e => {
    if (e.key === 'Enter') {
      onClick(e);
    }
  };

  return (
    <div // eslint-disable-line jsx-a11y/no-static-element-interactions
      role={onClick ? 'button' : 'presentation'}
      className={classNames}
      onClick={onClick}
      onKeyUp={handleEditKeyPress}
    >
      <div className={innerClasses}>{children}</div>
    </div>
  );
}

Card.Content = CardContent;

Card.propTypes = {
  onClick: func,
  innerClassNames: string,
  selected: bool,
  highlighted: bool,
  added: bool,
  removed: bool
};

Card.defaultProps = {
  onClick: null,
  innerClassNames: '',
  selected: false,
  highlighted: false,
  added: false,
  removed: false
};

export { Card };
