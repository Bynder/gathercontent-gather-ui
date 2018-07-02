import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const HTMLTable = props => {
    const classNames = cx('gc-table', props.className);
    return (
        <table className={classNames}>{props.children}</table>
    );
}

HTMLTable.defaultProps = {
  className: ''
};

HTMLTable.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default HTMLTable;
