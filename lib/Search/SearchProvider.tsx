import React, { useState } from "react";

export const SearchContext = React.createContext({});

export function SearchProvider({
  children,
}: {
  children: React.ReactNode | JSX.Element;
}) {
  const [showBody, setShowBody] = useState(false);
  const displayBody = () => setShowBody(true);

  const hideBody = () => setShowBody(false);

  const sharedState = {
    showBody,
    displayBody,
    hideBody,
  };
  return (
    <SearchContext.Provider value={sharedState}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
