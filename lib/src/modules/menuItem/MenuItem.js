import React from 'react';
import cx from 'classnames';

export function MenuItem({ href, tabIndex, active, divider, disabled, onSelect, eventKey, className, children, ...rest }) {
  const onClick = e => {
    if (!href || disabled) {
      e.preventDefault();
    }

    if (!disabled) {
      onSelect(eventKey, e);
    }
  }

  const classes = cx(className, {
    'divider': divider,
    'active': active
  });

  if (divider) {
    return <li className={classes} role="separator" />
  }

  return (
    <li role="presentation" className={classes} {...rest}>
      <a
        href={href}
        role='menuitem'
        tabIndex={tabIndex}
        onClick={onClick}
      >
        {children}
      </a>
    </li>
  )
};

MenuItem.defaultProps = {
  tabIndex: -1,
  className: '',
  onSelect: () => {}
}
