import React from 'react';
import { Alert } from 'react-bootstrap/lib';
import cx from 'classnames';

/**
 * @usage
 * <NotificationAlert text="This is a warning" level="warning">
 *
 * level {danger, warning, info, success}
 */
const NotificationAlert = ({ text, dangerousText, level, onClickHandler }) => {
  const baseClass = 'alert--';
  const klass = baseClass.concat(level);
  const alertClasses = cx({
    'has-click-handler': onClickHandler,
  });

  return (
    <Alert onClick={onClickHandler} bsStyle={level} className={`${klass} ${alertClasses}`}>
      { dangerousText &&
        <span className="alert__message" dangerouslySetInnerHTML={{ __html: dangerousText }} />
      }

      { text &&
        <span className="alert__message">{ text }</span>
      }
    </Alert>
  );
};

NotificationAlert.propTypes = {
  text: React.PropTypes.string,
  dangerousText: React.PropTypes.string,
  level: React.PropTypes.string,
  onClickHandler: React.PropTypes.func,
};

export default NotificationAlert;
