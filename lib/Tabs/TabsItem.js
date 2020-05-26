import { useRef, useEffect } from 'react';
import { func, bool } from 'prop-types';
import cx from 'classnames';

export function Item({ children, isActive }) {
  const ref = useRef();

  useEffect(() => {
    if (isActive && ref.current) {
      console.log('gonna focus');
      ref.current.focus();
    }
  }, [isActive]);

  const className = cx(
    'self-center border-neutral-90 border border-solid flex-grow font-medium hover:bg-neutral-90 break-all h-10 flex items-center justify-center',
    {
      'bg-white text-blue-primary': isActive,
      'bg-neutral-95 text-neutral-primary': !isActive
    }
  );

  return children(className, ref);
}

Item.propTypes = {
  children: func.isRequired,
  isActive: bool
};

Item.defaultProps = {
  isActive: false
};
