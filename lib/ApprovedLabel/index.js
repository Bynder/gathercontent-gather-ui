import React from 'react';
import { arrayOf, string } from 'prop-types';
import Icon from '../Icon';
import TooltipWrapper from '../TooltipWrapper';
import { pluralisePerson, pluraliseHas } from '../helpers';

const ApprovedLabel = ({ approvedBy }) => {
  const numberOfApprovals = approvedBy.length;
  const tooltipText = approvedBy.join(',\n');
  const text = `${pluralisePerson(numberOfApprovals)} ${pluraliseHas(
    numberOfApprovals
  )} approved this content`;

  return (
    <TooltipWrapper
      id="approved-label__approved-by-emails-tooltip"
      tooltipText={tooltipText}
      clickable
      alignLeft
      wrapperClassName="h-margin-bottom-half"
    >
      <Icon
        name="approved"
        text={text}
        types={['green']}
        textTypes={['green']}
        defaultActiveColor={false}
      />
    </TooltipWrapper>
  );
};

ApprovedLabel.propTypes = {
  approvedBy: arrayOf(string).isRequired
};

export default ApprovedLabel;
