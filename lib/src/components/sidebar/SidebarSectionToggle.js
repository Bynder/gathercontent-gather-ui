import * as React from 'react';
import { ButtonSecondary } from 'lib';
import { string } from 'prop-types';
import { SidebarSectionContext } from './SidebarSection';

export function SidebarSectionToggle({
  showText,
  hideText,
  children,
  className = '',
  ...rest
}) {
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
