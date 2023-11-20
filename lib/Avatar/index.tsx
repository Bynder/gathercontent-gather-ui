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
    "gui-avatar--highlighted": isHighlighted,
    "gui-avatar--offline": isOffline,
    "gui-avatar--size-sm": smallSize,
    "gui-avatar--size-lrg": largeSize,
    "gui-avatar--size-xlrg": extraLargeSize,
    "gui-avatar--bordered": bordered,
    "gui-avatar--animated": animate,
    "gui-avatar--has-colour": colour,
    "gui-avatar--is-locked": locked,
  });

  const wrapperClasses = cx(`gui-avatar__wrapper ${wrapperClassName}`, {
    "gui-avatar__wrapper--offline": isOffline,
    "gui-avatar__wrapper--size-sm": smallSize,
    "gui-avatar__wrapper--size-xlrg": extraLargeSize,
    "gui-avatar__wrapper--additional": additional,
    "gui-is-visible": showAdditional && additional,
  });

  if (children || additional) {
    return (
      <div
        className={wrapperClasses}
        onMouseEnter={() => setShowAdditional(true)}
        onMouseLeave={() => setShowAdditional(false)}
      >
        <div
          style={styles}
          className={`gui-avatar ${additionalClasses}`}
          role="figure"
        >
          {!url && <span className="gui-avatar__initials">{initials}</span>}

          {url && <img className="gui-avatar__image" src={url} alt={name} />}
          {locked && (
            <div className="gui-avatar__locked">
              <Icon
                name="locked"
                types={["white"]}
                defaultActiveColor={false}
              />
            </div>
          )}
          {onRemove && !locked && (
            <button
              onClick={onRemove}
              className="gui-avatar__remove"
              type="button"
            >
              <Icon name="cross" types={["white"]} defaultActiveColor={false} />
            </button>
          )}
        </div>
        {children && children}
        {additional && (
          <div className="gui-avatar__additional">{additional}</div>
        )}
      </div>
    );
  }
  return (
    <div
      style={styles}
      className={`gui-avatar ${additionalClasses}`}
      role="figure"
    >
      {!url && <span className="gui-avatar__initials">{initials}</span>}

      {url && <img className="gui-avatar__image" src={url} alt={name} />}
      {locked && (
        <div className="gui-avatar__locked">
          <Icon name="locked" types={["white"]} defaultActiveColor={false} />
        </div>
      )}
      {onRemove && !locked && (
        <button onClick={onRemove} className="gui-avatar__remove" type="button">
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
