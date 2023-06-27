import React from 'react';
import cx from 'classnames';
import Icon from '../Icon';
import AvatarInformation from '../Avatar/AvatarInformation';
import Avatar from '../Avatar';

export function DropdownMenuItem({ item }) {
  const { className, type } = item;

  const activeContents = (
    <span className="dropdown-item__tick is-active">
      <Icon name="tick" size="micro" />
    </span>
  );

  const classes = cx(
    'dropdown__item',
    className,
    `dropdown__item--${item.linkType || 'button'}`
  );

  if (type === 'separator') {
    return <li className="dropdown__separator" />;
  }

  if (type === 'link') {
    return (
      <li className={classes}>
        {item.active && activeContents}
        <a className="dropdown__link" href={item.href}>
          {item.name}
        </a>
      </li>
    );
  }

  if (type === 'withAdditional') {
    return (
      <li className={classes}>
        <button
          type="button"
          className="dropdown__link dropdown__additional"
          onClick={item.action}
        >
          {item.active && activeContents}
          <span className="dropdown__item--name">{item.name}</span>
          {item.additional && (
            <span className="dropdown__item--additional">
              {item.additional}
            </span>
          )}
        </button>
      </li>
    );
  }

  if (type === 'avatar') {
    return (
      <li className={classes}>
        <button
          type="button"
          className="dropdown__link dropdown__avatar"
          onClick={item.action}
        >
          <Avatar url={item.avatar} initials={item.initials}>
            <AvatarInformation name={item.name} email={item.email} />
          </Avatar>
        </button>
      </li>
    );
  }

  if (type === 'title') {
    return (
      <li className={classes}>
        <button
          type="button"
          className="dropdown__link dropdown__title"
          onClick={item.action}
        >
          <span className="dropdown__item--name">{item.name}</span>
          {item.additional && (
            <span className="dropdown__item--additional">
              {item.additional}
            </span>
          )}
        </button>
      </li>
    );
  }

  return (
    <li className={classes}>
      <button type="button" className="dropdown__link" onClick={item.action}>
        {item.active && activeContents}
        {item.name}
      </button>
    </li>
  );
}
