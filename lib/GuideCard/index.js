import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import Icon from '../Icon';
import Body from './Body';
import CTA from './CTA';

const GuideCard = ({ children, icon }) => (
  <Card className="guide-card__container">
    <Card.Content paddingLarge className="guide-card__content">
      {icon && (
        <Icon className="guide-card__container__icon" name={icon} dark />
      )}
      {children}
    </Card.Content>
  </Card>
);

GuideCard.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string
};

GuideCard.defaultProps = {
  children: null,
  icon: null
};

GuideCard.Body = Body;
GuideCard.CTA = CTA;

export default GuideCard;
