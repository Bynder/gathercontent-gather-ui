import React from 'react';
import { number, string, func, exact } from 'prop-types';
import Button from '../Button';

const Body = ({ stepNumber, title, description, cta }) => (
  <div className="guide-card__body">
    <p className="neutral-dark-text guide-card__body__title">{`${
      stepNumber ? `${stepNumber}. ` : ''
    }${title}`}</p>
    <p>{description}</p>
    {cta && (
      <Button onClick={cta.onClick} types={['link-default', 'collapse']}>
        {cta.title}
      </Button>
    )}
  </div>
);

Body.propTypes = {
  stepNumber: number,
  description: string.isRequired,
  cta: exact({ title: string.isRequired, onClick: func.isRequired }),
  title: string.isRequired
};

Body.defaultProps = {
  stepNumber: null,
  cta: null
};

export default Body;
