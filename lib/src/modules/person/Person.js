import React from 'react';
import { Avatar, Icon } from 'lib';
import cx from 'classnames';
import { TextHighlighter } from '../../../helpers/TextHighlighter';

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

  const shouldHighlightSubtitle =
    !!highlightText.length && typeof subtitle === 'string';

  return (
    <WrapperElement className={classes} onClick={onClick}>
      <Avatar url={avatarUrl} initials={initials} colour={colour} />
      <div className="person-right">
        <div className="person-name">
          {highlightText ? (
            <TextHighlighter highlight={highlightText} text={name} />
          ) : (
            name
          )}
        </div>
        {!!subtitle && (
          <div className="person-subtitle">
            {shouldHighlightSubtitle ? (
              <TextHighlighter highlight={highlightText} text={subtitle} />
            ) : (
              subtitle
            )}
          </div>
        )}
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
