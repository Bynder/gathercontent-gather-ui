import React from 'react';
import { string, bool, func } from 'prop-types';
import ProgressButton from '../ProgressButton';
import Button from '../Button';

const CTA = ({ isAsync, text, loadingText, onClick }) => (
  <div className="guide-card__cta__container">
    {isAsync ? (
      <ProgressButton
        clickHandler={onClick}
        buttonType="outline-default"
        value={text}
        spinnerText={loadingText || text}
      />
    ) : (
      <Button clickHandler={onClick} types={['outline-default']}>
        {text}
      </Button>
    )}
  </div>
);

CTA.propTypes = {
  text: string.isRequired,
  onClick: func.isRequired,
  loadingText: string,
  isAsync: bool
};

CTA.defaultProps = {
  loadingText: null,
  isAsync: false
};

export default CTA;
