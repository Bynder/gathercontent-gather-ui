import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import Icon from '../Icon';
import Body from './Body';
import CTA from './CTA';

const GuideCard = ({ children, iconName }) => (
  <Card className="guide-card__container">
    <Card.Content paddingLarge className="guide-card__content">
      {iconName && (
        <Icon className="guide-card__container__icon" name={iconName} dark />
      )}
      {children}
    </Card.Content>
  </Card>
);

GuideCard.propTypes = {
  children: PropTypes.node,
  iconName: PropTypes.string
};

GuideCard.defaultProps = {
  children: null,
  iconName: null
};

GuideCard.Body = Body;
GuideCard.CTA = CTA;

export default GuideCard;
