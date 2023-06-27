import * as React from 'react';
import { bool } from 'prop-types';

export const SidebarSectionContext = React.createContext({});

export function SidebarSection({
  children,
  initialShowMore,
  className = '',
  ...rest
}) {
  const [showMore, setShowMore] = React.useState(initialShowMore);
  const sharedState = {
    showMore,
    setShowMore
  };

  return (
    <SidebarSectionContext.Provider value={sharedState}>
      <div className={`sidebar-section ${className}`} {...rest}>
        {typeof children === 'function' ? children(sharedState) : children}
      </div>
    </SidebarSectionContext.Provider>
  );
}

SidebarSection.propTypes = {
  initialShowMore: bool
};

SidebarSection.defaultProps = {
  initialShowMore: false
};
