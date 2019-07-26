import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import Icon from '../Icon';

const Container = ({ children, icon }) => {
  return (
    <Card className="guide-card__container">
      <Card.Content paddingLarge className="guide-card__content">
        {icon && <Icon name={icon} dark />}
        {children}
      </Card.Content>
    </Card>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string
};

Container.defaultProps = {
  children: null,
  icon: null
};

export default Container;
