import * as React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { ButtonSecondary } from 'lib';
import { string } from 'prop-types';
import { SidebarSectionContext } from './SidebarSection';

export function SidebarSectionToggle({
  showText,
  hideText,
  children,
  className = '',
  ...rest
}: any) {
  const { showMore, setShowMore } = React.useContext(SidebarSectionContext);

  return (
    <ButtonSecondary
      className={`sidebar-section-toggle whitespace-nowrap ${className}`}
      size={ButtonSecondary.sizes.sm}
      onClick={() => setShowMore(!showMore)}
      {...rest}
    >
      {showMore ? hideText : showText}
    </ButtonSecondary>
  );
}

SidebarSectionToggle.propTypes = {
  showText: string,
  hideText: string
};

SidebarSectionToggle.defaultProps = {
  showText: 'Show',
  hideText: 'Hide'
};
