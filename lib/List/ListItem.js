import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import List from './index';
import Button from '../Button';
import Icon from '../Icon';

class ListItem extends Component {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    indicator: PropTypes.node,
    label: PropTypes.string,
    action: PropTypes.node,
    children: PropTypes.arrayOf(PropTypes.node),
    isCurrent: PropTypes.bool,
  };

  static defaultProps = {
    indicator: null,
    label: null,
    action: null,
    children: null,
    isCurrent: false,
  };

  constructor() {
    super();
    this.state = { showChildren: false };
    this.toggleChildren = this.toggleChildren.bind(this);
  }

  toggleChildren() {
    this.setState({ showChildren: !this.state.showChildren });
  }

  render() {
    const classNames = cx({
      'has-indicator': this.props.indicator,
      'has-label': this.props.label,
      'has-action': this.props.action,
      'has-children': this.props.children,
      'is-current': this.props.isCurrent,
    });

    const toggleClassNames = cx({
      'is-active': this.state.showChildren,
    });

    return (
      <div className={`list__item ${classNames}`}>
        <div className="list__item-content">
          <div className="list__item-text">
            { this.props.indicator &&
              <span className="list__item-indicator">{ this.props.indicator }</span>
            }
            <span className="list__item-title">{ this.props.title }</span>
            { this.props.label &&
              <span className="list__item-label">{ this.props.label }</span>
            }
          </div>

          <span className="list__actions">
            { this.props.action &&
              <span className="list__action">{ this.props.action }</span>
            }
            { this.props.children &&
              <span className="list__action list__toggle">
                <Button
                  className={toggleClassNames}
                  types={['icon-only', 'icon-only-cover']}
                  clickHandler={this.toggleChildren}
                >
                  <Icon
                    name="caret"
                    size="micro"
                  />
                </Button>
              </span>
            }
          </span>
        </div>

        { this.props.children && this.state.showChildren &&
          <List>{ this.props.children }</List>
        }
      </div>
    );
  }
}

export default ListItem;
