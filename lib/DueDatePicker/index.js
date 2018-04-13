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
      showing: false,
      changed: false,
      selectedDay: props.dueDate ? props.dueDate.toDate() : null,
      selectedTime: props.dueDate
        ? moment(props.dueDate)
        : moment().set({ hours: 12, minutes: 0 })
    };
    this.state = this.initialState;
  }

  applyDueDate = () => {
    if (this.state.selectedDay) {
      const dueDate = moment(this.state.selectedDay).set({
        hour: this.state.selectedTime.hour(),
        minute: this.state.selectedTime.minute()
      });
      this.props.applyDueDate(dueDate);

      this.setState({ showing: false });
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
    this.setState({
      selectedDay: selected ? undefined : day,
      changed: true
    });
  };

  handleTimeClick = time => {
    const selectedTime = this.state.selectedTime.set(time);
    this.setState({
      selectedTime,
      changed: true
    });
  };

  render() {
    const togglePopover = () => {
      if (this.container) {
        this.container.setShowContent(false);
        this.setState(this.initialState);
      }
    };

    const onHide = () => {
      this.setState(this.initialState);
    };

    const today = moment().set({ hour: 0, minute: 0 });

    const classes = cx('duedate__container is-active', {
      'duedate__container--completed': this.props.completed
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
              {this.state.changed && (
                <div className="duedate__submit">
                  <Button
                    clickHandler={togglePopover}
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
              )}
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
