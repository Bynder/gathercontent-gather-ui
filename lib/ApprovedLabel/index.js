import React from 'react';
import { arrayOf, string } from 'prop-types';
import Icon from '../Icon';
import { pluralisePerson } from '../helpers';

const ApprovedLabel = ({ approvedBy }) => {
  const numberOfApprovals = approvedBy.length;
  const hasHave = numberOfApprovals === 1 ? 'has' : 'have';

  return (
    <span>
      <Icon name="approved" />
      &nbsp;{pluralisePerson(numberOfApprovals)} {hasHave} approved this content
    </span>
  );
};

ApprovedLabel.propTypes = {
  approvedBy: arrayOf(string).isRequired
};

export default ApprovedLabel;
