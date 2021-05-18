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
  bordered
}) {
  const classes = cx('person', className, {
    'person-selected': selected,
    'person-interactive': interactive,
    'person-collapse': collapse,
    'person-bordered': bordered
  });

  const WrapperElement = interactive ? 'button' : 'div';

  return (
    <WrapperElement className={classes}>
      <Avatar url={avatarUrl} initials={initials} />
      <div className="person-right">
        <div className="person-name">{name}</div>
        <div className="person-subtitle">{subtitle}</div>
      </div>
      {selected && (
        <Icon className="person-tick" name="tick16" types={['primary-blue']} />
      )}
    </WrapperElement>
  );
}

Person.defaultProps = {
  interactive: false
};
