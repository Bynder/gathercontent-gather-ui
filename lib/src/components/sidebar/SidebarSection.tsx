import * as React from "react";

export const SidebarSectionContext = React.createContext({});

export function SidebarSection({
  children,
  initialShowMore,
  className = "",
  ...rest
}: any) {
  const [showMore, setShowMore] = React.useState(initialShowMore);
  const sharedState = {
    showMore,
    setShowMore,
  };

  return (
    <SidebarSectionContext.Provider value={sharedState}>
      <div className={`sidebar-section ${className}`} {...rest}>
        {typeof children === "function" ? children(sharedState) : children}
      </div>
    </SidebarSectionContext.Provider>
  );
}

SidebarSection.defaultProps = {
  initialShowMore: false,
};
