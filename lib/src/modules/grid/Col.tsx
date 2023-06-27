import * as React from 'react';
import cx from 'classnames';

const DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];

export function Col({ children, className = '', ...rest }) {
  const layoutClassNames = [];

  DEVICE_SIZES.forEach(size => {
    function popProp(propSuffix, modifier) {
      const propName = `${size}${propSuffix}`;
      const propValue = rest[propName];

      if (propValue) {
        layoutClassNames.push(`layout-col-${size}${modifier}-${propValue}`);

        // eslint-disable-next-line no-param-reassign
        delete rest[propName];
      }
    }

    popProp('', '');
    popProp('Offset', '-offset');
    popProp('Push', '-push');
    popProp('Pull', '-pull');
  });

  const classNames = cx('layout-col', layoutClassNames, className);

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
}
