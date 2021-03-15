import * as React from 'react';
import { ButtonSecondary } from 'lib';
import { bool } from 'prop-types';
import cx from 'classnames';
import { SidebarSectionContext } from './SidebarSection';

export function SidebarHeading({
  children,
  className = '',
  showMoreToggle,
  ...rest
}) {
  const { showMore, setShowMore } = React.useContext(SidebarSectionContext);
  const classNames = cx(className, {
    'text-overflow-ellipsis pr-2': showMoreToggle
  });

  return (
    <div className="sidebar-heading flex items-center">
      <div className={classNames} {...rest}>
        {children}
      </div>

      {setShowMore && showMoreToggle && (
        <ButtonSecondary
          className="ml-auto whitespace-no-wrap"
          size={ButtonSecondary.sizes.sm}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Less info' : 'More info'}
        </ButtonSecondary>
      )}
    </div>
  );
}

SidebarHeading.propTypes = {
  showMoreToggle: bool
};

SidebarHeading.defaultProps = {
  showMoreToggle: false
};
