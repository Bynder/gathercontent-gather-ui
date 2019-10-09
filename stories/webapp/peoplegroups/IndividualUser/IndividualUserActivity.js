import React from 'react';
import { string } from 'prop-types';
import { Avatar } from 'lib';

const pClasses = 'h-margin-clear h-margin-left-half';

const IndividualUserActivity = ({ activeUser }) => (
  <div className="h-margin-top">
    <div className="h-display-flex h-align-items-center h-margin-top-half h-margin-bottom-half">
      <Avatar url={activeUser.url} name={activeUser.name} />
      <p className={pClasses}>
        {activeUser.name} commented on{' '}
        <a href="google.com" className="h-text-decoration-none">
          Energy Co. Re-design
        </a>
        <span className={`${pClasses} neutral-base-text typo-size-slight`}>
          3 hours ago
        </span>
      </p>
    </div>
    <div className="h-display-flex h-align-items-center h-margin-top-hald h-margin-bottom-half">
      <Avatar url={activeUser.url} name={activeUser.name} />
      <p className={pClasses}>
        {activeUser.name} created{' '}
        <a href="google.com" className="h-text-decoration-none">
          Energy Co. Re-design
        </a>
        <span className={`${pClasses} neutral-base-text typo-size-slight`}>
          3 hours ago
        </span>
      </p>
    </div>
    <div className="h-display-flex h-align-items-center h-margin-top-hald h-margin-bottom-half">
      <Avatar url={activeUser.url} name={activeUser.name} />
      <p className={pClasses}>
        {activeUser.name} replied to a comment on{' '}
        <a href="google.com" className="h-text-decoration-none">
          About us
        </a>
        <span className={`${pClasses} neutral-base-text typo-size-slight`}>
          2 days ago
        </span>
      </p>
    </div>
    <div className="h-display-flex h-align-items-center h-margin-top-hald h-margin-bottom-half">
      <Avatar url={activeUser.url} name={activeUser.name} />
      <p className={pClasses}>
        {activeUser.name} James updated shareable link settings for Sherlock
        Integrations to "Anyone with the link and password can view the item and
        leave a comment."
        <span className={`${pClasses} neutral-base-text typo-size-slight`}>
          Last week
        </span>
      </p>
    </div>
  </div>
);

IndividualUserActivity.propTypes = {
  activeUser: string.isRequired
};

export default IndividualUserActivity;
