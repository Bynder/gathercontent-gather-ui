import React from "react";
import FinderGroup from "./FinderGroup";
import FinderItem from "./FinderItem";
import FinderItemContent from "./FinderItemContent";
import FinderItemSettings from "./FinderItemSettings";

export function FinderNavigation({
  className = "",
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`finder ${className}`} {...rest}>
      {children}
    </div>
  );
}

FinderNavigation.Group = FinderGroup;
FinderNavigation.Item = FinderItem;
FinderNavigation.ItemContent = FinderItemContent;
FinderNavigation.ItemSettings = FinderItemSettings;

export default FinderNavigation;
