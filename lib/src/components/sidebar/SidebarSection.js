import * as React from 'react';

export const SidebarSectionContext = React.createContext({});

export function SidebarSection({ children, className = '' }, ...rest) {
  const [showMore, setShowMore] = React.useState(false);
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
