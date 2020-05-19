import React, { useContext } from 'react';
import { bool, string } from 'prop-types';
import cx from 'classnames';
import { FieldNew } from 'lib';
import { ButtonSecondary } from '../ButtonNew/ButtonSecondary/ButtonSecondary';
import Icon from '../Icon';

function ConnectorLine() {
  return (
    <span className="h-10 border-l border-0 border-solid border-neutral-90 " />
  );
}

export function FieldRepeatButton({
  isLastRepeat,
  repeatLimitReached,
  className
}) {
  const { inStructureEditMode } = useContext(
    FieldNew.InStructureEditModeContext
  );

  return (
    <div
      className={cx(
        className,
        'col-span-12 md:col-span-8',
        'col-start-1',
        'flex flex-col items-center',
        {
          'md:col-start-5': !inStructureEditMode,
          'md:col-start-4': inStructureEditMode
        }
      )}
    >
      {<ConnectorLine />}
      {isLastRepeat &&
        (repeatLimitReached ? (
          <ButtonSecondary disabled>Limit reached</ButtonSecondary>
        ) : (
          <ButtonSecondary>
            <Icon name="plus" className="mr-2" />
            Add another
          </ButtonSecondary>
        ))}
    </div>
  );
}

FieldRepeatButton.propTypes = {
  isLastRepeat: bool,
  repeatLimitReached: bool,
  className: string
};

FieldRepeatButton.defaultProps = {
  isLastRepeat: false,
  repeatLimitReached: false,
  className: ''
};
