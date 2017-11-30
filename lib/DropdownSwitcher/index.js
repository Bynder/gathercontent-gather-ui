import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import Overlay from 'react-bootstrap/lib/Overlay';
import Popover from 'react-bootstrap/lib/Popover';
import Icon from '../Icon';

class DropdownSwitcher extends Component {
  state = {
    show: false
  };

  popover() {
    const togglePopover = () => this.setState({ show: !this.state.show });

    const onHide = () => {
      this.setState({ show: false });
    };

    const classes = cx('button button--plain project-switcher__name', {
      'is-active': this.state.show
    });

    return (
      <div className="dropdown-switcher">
        <button
          className={classes}
          onClick={togglePopover}
          ref={target => {
            this.target = target;
          }}
        >
          {this.renderTitle()}
        </button>
        <Overlay
          show={this.state.show}
          onHide={onHide}
          target={this.target}
          placement="bottom"
          rootClose
        >
          <Popover id={this.props.id} className="popover-dropdown">
            {this.props.children}
          </Popover>
        </Overlay>
      </div>
    );
  }

  dropdown() {
    return (
      <Dropdown className="dropdown-switcher" id={this.props.id}>
        <div bsRole="toggle">{this.renderTitle()}</div>
        {this.props.menu}
      </Dropdown>
    );
  }

  renderTitle() {
    const caret = (
      <span className="dropdown-switcher__caret">
        <Icon name="caret" />
      </span>
    );

    if (typeof this.props.title === 'string') {
      return (
        <h3 className="dropdown-switcher__title">
          {this.props.title}
          {caret}
        </h3>
      );
    }

    const title = this.props.title;
    let titleContent = title.props.children;
    if (typeof titleContent === 'string') {
      titleContent = React.Children.toArray(titleContent);
    }

    const newContent = titleContent.map(item => item);
    newContent.push(caret);

    return React.cloneElement(title, title.props, newContent);
  }

  render() {
    if (this.props.menu) {
      return this.dropdown();
    }

    return this.popover();
  }
}

DropdownSwitcher.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ]).isRequired,
  id: PropTypes.string.isRequired,
  menu: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ])
};

DropdownSwitcher.defaultProps = {
  title: '',
  id: '',
  menu: '',
  children: []
};

export default DropdownSwitcher;
