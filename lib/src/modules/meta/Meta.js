import React from 'react';
import { node } from 'prop-types';
import { createComponentClassNames } from 'helpers/createComponentClassNames';
import { MetaHeading } from './MetaHeading';
import { MetaText } from './MetaText';
import { MetaFooter } from './MetaFooter';

function Meta({ children, ...props }) {
  const classNames = createComponentClassNames('meta', props);

  return <div className={classNames}>{children}</div>;
}

Meta.Heading = MetaHeading;
Meta.Text = MetaText;
Meta.Footer = MetaFooter;

Meta.propTypes = {
  children: node.isRequired
};

export { Meta };
