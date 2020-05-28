import { func } from 'prop-types';

export function TabsBase({ tabsLength, children }) {
  const style = {
    'flex-basis': 0,
    'min-width': tabsLength >= 8 ? '12.5%' : 0,
    'max-width': tabsLength >= 8 ? '12.5%' : 'initial'
  };

  return children('flex group flex-grow h-10', style);
}

TabsBase.propTypes = {
  children: func.isRequired
};

TabsBase.defaultProps = {
  isActive: false
};
