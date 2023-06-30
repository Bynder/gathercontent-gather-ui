import React, { HTMLAttributes, useState } from "react";
import cx from "classnames";
import { Icon } from "../index";

interface Props extends HTMLAttributes<HTMLDivElement> {
  wrapperClassName?: string;
  colour?: string;
  name?: string;
  url?: string;
  initials?: string;
  isOffline?: boolean;
  isHighlighted?: boolean;
  smallSize?: boolean;
  largeSize?: boolean;
  extraLargeSize?: boolean;
  additional?: string;
  bordered?: boolean;
  animate?: boolean;
  locked?: boolean;
  onRemove?: () => {};
}

export function Avatar({
  className,
  children,
  wrapperClassName,
  colour,
  name,
  url,
  initials,
  isOffline,
  isHighlighted,
  smallSize,
  largeSize,
  extraLargeSize,
  additional,
  bordered,
  animate,
  locked,
  onRemove,
}: Props) {
  const [showAdditional, setShowAdditional] = useState(false);

  const styles = colour ? { color: colour } : {};

  const additionalClasses = cx(className, {
    "avatar--highlighted": isHighlighted,
    "avatar--offline": isOffline,
    "avatar--size-sm": smallSize,
    "avatar--size-lrg": largeSize,
    "avatar--size-xlrg": extraLargeSize,
    "avatar--bordered": bordered,
    "avatar--animated": animate,
    "avatar--has-colour": colour,
    "avatar--is-locked": locked,
  });

  const wrapperClasses = cx(`avatar__wrapper ${wrapperClassName}`, {
    "avatar__wrapper--offline": isOffline,
    "avatar__wrapper--size-sm": smallSize,
    "avatar__wrapper--size-xlrg": extraLargeSize,
    "avatar__wrapper--additional": additional,
    "is-visible": showAdditional && additional,
  });

  if (children || additional) {
    return (
      <div
        className={wrapperClasses}
        onMouseEnter={() => setShowAdditional(true)}
        onMouseLeave={() => setShowAdditional(false)}
      >
        <div style={styles} className={`avatar ${additionalClasses}`}>
          {!url && <span className="avatar__initials">{initials}</span>}

          {url && <img className="avatar__image" src={url} alt={name} />}
          {locked && (
            <div className="avatar__locked">
              <Icon
                name="locked"
                types={["white"]}
                defaultActiveColor={false}
              />
            </div>
          )}
          {onRemove && !locked && (
            <button onClick={onRemove} className="avatar__remove" type="button">
              <Icon name="cross" types={["white"]} defaultActiveColor={false} />
            </button>
          )}
        </div>
        {children && children}
        {additional && <div className="avatar__additional">{additional}</div>}
      </div>
    );
  }
  return (
    <div style={styles} className={`avatar ${additionalClasses}`}>
      {!url && <span className="avatar__initials">{initials}</span>}

      {url && <img className="avatar__image" src={url} alt={name} />}
      {locked && (
        <div className="avatar__locked">
          <Icon name="locked" types={["white"]} defaultActiveColor={false} />
        </div>
      )}
      {onRemove && !locked && (
        <button onClick={onRemove} className="avatar__remove" type="button">
          <Icon
            name="cross"
            types={["white"]}
            defaultActiveColor={false}
            title="Remove"
          />
        </button>
      )}
    </div>
  );
}

Avatar.defaultProps = {
  className: "",
  wrapperClassName: "",
  colour: "",
  name: "",
  url: "",
  initials: "",
  isOffline: false,
  isHighlighted: false,
  smallSize: false,
  largeSize: false,
  extraLargeSize: false,
  children: "",
  additional: "",
  bordered: false,
  animate: false,
  locked: false,
};

export default Avatar;
