import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import moment from 'moment';
import cx from 'classnames';
import Button from '../Button';
import Dropdown from '../Dropdown';
import DueDateHeader from './DueDateHeader';
import DueDateButton from './DueDateButton';

class DueDatePicker extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      changed: false,
      selectedDay: props.dueDate ? props.dueDate.toDate() : null,
      selectedTime: props.dueDate
        ? moment(props.dueDate)
        : moment().set({ hours: 12, minutes: 0 })
    };
    this.state = this.initialState;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dueDate) {
      if (nextProps.dueDate.toDate() !== this.state.selectedDay) {
        this.initialState = {
          ...this.initialState,
          selectedDay: nextProps.dueDate.toDate(),
          selectedTime: nextProps.dueDate,
        };

        this.setState(this.initialState);
      }
    } else if (this.state.seelctedDay) {
      this.initialState = {
        ...this.initialState,
        selectedDay: null,
        selectedTime: moment().set({ hours: 12, minutes: 0 })
      };

      this.setState(this.initialState);
    }
  }

  hideDropdown = () => {
    if (this.container) {
      this.container.setShowContent(false);
    }
    this.setState(this.initialState);
  };

  applyDueDate = () => {
    if (this.state.selectedDay) {
      const dueDate = moment(this.state.selectedDay).set({
        hour: this.state.selectedTime.hour(),
        minute: this.state.selectedTime.minute()
      });
      this.props.applyDueDate(dueDate);

      this.hideDropdown();
    }
  };

  removeDueDate = () => {
    this.props.removeDueDate();
    this.setState({
      changed: false,
      selectedDay: null
    });
  };

  handleDayClick = (day, { selected }) => {
    if (!selected) {
      this.setState({
        selectedDay: day,
        changed: true
      });
    }
  };

  handleTimeClick = time => {
    const selectedTime = this.state.selectedTime.set(time);
    this.setState({
      selectedTime,
      changed: true
    });
  };

  render() {
    const onHide = () => {
      this.setState(this.initialState);
    };

    const today = moment().set({ hour: 0, minute: 0 });

    const classes = cx('duedate__container is-active', {
      'duedate__container--completed': this.props.completed
    });

    const buttonClasses = cx('duedate__submit', {
      'duedate__submit--hidden': !this.state.changed
    });

    return (
      <span className={classes}>
        <Dropdown
          id="duedate__dropdown"
          onToggle={onHide}
          ref={el => {
            this.container = el;
          }}
        >
          <DueDateButton dueDate={this.props.dueDate} />
          <Dropdown.Content className="duedate__dropdown">
            <DueDateHeader
              dueDate={this.state.selectedDay}
              dueTime={this.state.selectedTime}
              setTime={this.handleTimeClick}
              removeDueDate={this.removeDueDate}
            />
            <div className="duedate__datepicker">
              <DayPicker
                weekdaysShort={[
                  'Sun',
                  'Mon',
                  'Tues',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat'
                ]}
                firstDayOfWeek={1}
                onDayClick={this.handleDayClick}
                selectedDays={this.state.selectedDay}
                month={this.state.selectedDay}
                modifiers={{
                  past: day => day < today
                }}
              />
              <div className={buttonClasses}>
                <Button
                  clickHandler={this.hideDropdown}
                  types={['link-default', 'collapse']}
                  className="duedate__submit--cancel"
                >
                  Cancel
                </Button>
                <Button
                  clickHandler={this.applyDueDate}
                  types={['primary']}
                  className="duedate__submit--save"
                >
                  Set due date
                </Button>
              </div>
            </div>
          </Dropdown.Content>
        </Dropdown>
      </span>
    );
  }
}

DueDatePicker.propTypes = {
  applyDueDate: PropTypes.func.isRequired,
  removeDueDate: PropTypes.func.isRequired,
  dueDate: PropTypes.shape(),
  completed: PropTypes.bool
};

DueDatePicker.defaultProps = {
  dueDate: null,
  completed: false
};

export default DueDatePicker;
