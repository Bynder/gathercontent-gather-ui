import React from 'react';
import { Avatar, Icon } from 'lib';
import cx from 'classnames';

export function Person({
  name,
  subtitle,
  avatarUrl,
  initials,
  className,
  selected,
  interactive,
  collapse,
  bordered,
  onClick,
  highlightText,
  colour
}) {
  const classes = cx('person', className, {
    'person-selected': selected,
    'person-interactive': interactive,
    'person-collapse': collapse,
    'person-bordered': bordered
  });

  const WrapperElement = interactive ? 'button' : 'div';

  const indexOfHighlightedText = name
    .toLowerCase()
    .search(highlightText.toLowerCase());

  const separatedName = highlightText ? (
    <span>
      {name.slice(0, indexOfHighlightedText)}
      <b>
        {name.slice(
          indexOfHighlightedText,
          indexOfHighlightedText + highlightText.length
        )}
      </b>
      {name.slice(indexOfHighlightedText + highlightText.length, name.length)}
    </span>
  ) : (
    name
  );

  return (
    <WrapperElement className={classes} onClick={onClick}>
      <Avatar url={avatarUrl} initials={initials} colour={colour} />
      <div className="person-right">
        <div className="person-name">{separatedName}</div>
        {!!subtitle && <div className="person-subtitle">{subtitle}</div>}
      </div>
      {selected && (
        <Icon className="person-tick" name="tick16" types={['primary-blue']} />
      )}
    </WrapperElement>
  );
}

Person.defaultProps = {
  interactive: false,
  highlightText: ''
};
