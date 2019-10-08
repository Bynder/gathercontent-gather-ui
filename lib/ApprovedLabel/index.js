import React from 'react';
import { arrayOf, string } from 'prop-types';
import Icon from '../Icon';
import TooltipWrapper from '../TooltipWrapper';
import { pluralisePerson } from '../helpers';

const ApprovedLabel = ({ approvedBy }) => {
  const numberOfApprovals = approvedBy.length;
  const hasHave = numberOfApprovals === 1 ? 'has' : 'have';
  const tooltipText = approvedBy.join('\n');
  const text = `${pluralisePerson(
    numberOfApprovals
  )} ${hasHave} approved this content`;

  return (
    <TooltipWrapper
      id="approved-label__approved-by-emails-tooltip"
      tooltipText={tooltipText}
      clickable
    >
      <Icon
        name="approved"
        text={text}
        types={['green']}
        textTypes={['green']}
      />
    </TooltipWrapper>
  );
};

ApprovedLabel.propTypes = {
  approvedBy: arrayOf(string).isRequired
};

export default ApprovedLabel;
