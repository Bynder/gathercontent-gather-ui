import { func, bool } from 'prop-types';
import cx from 'classnames';

export function TabsBase({ tabsLength, children, isActive }) {
  const style = {
    'flex-basis': 0,
    'min-width': tabsLength >= 8 ? '12.5%' : 0,
    'max-width': tabsLength >= 8 ? '12.5%' : 'initial'
  };

  const className = cx('flex group flex-grow h-10 ', {
    'bg-white text-blue-primary': isActive,
    'bg-neutral-95 text-neutral-primary': !isActive
  });

  return children(className, style);
}

TabsBase.propTypes = {
  children: func.isRequired,
  isActive: bool
};

TabsBase.defaultProps = {
  isActive: false
};
