import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import Overlay from 'react-bootstrap/lib/Overlay';
import Popover from 'react-bootstrap/lib/Popover';
import moment from 'moment';
import cx from 'classnames';
import Button from '../Button';
import DueDateHeader from './DueDateHeader';
import DueDateButton from './DueDateButton';

class DueDatePicker extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleTimeClick = this.handleTimeClick.bind(this);
    this.applyDueDate = this.applyDueDate.bind(this);
    this.removeDueDate = this.removeDueDate.bind(this);

    this.initialState = {
      showing: false,
      changed: false,
      selectedDay: this.props.dueDate ? this.props.dueDate.toDate() : null,
      selectedTime: this.props.dueDate
        ? moment(this.props.dueDate)
        : moment().set({ hours: 12, minutes: 0 })
    };
    this.state = this.initialState;
  }

  applyDueDate() {
    if (this.state.selectedDay) {
      const dueDate = moment(this.state.selectedDay).set({
        hour: this.state.selectedTime.hour(),
        minute: this.state.selectedTime.minute()
      });
      this.props.applyDueDate(dueDate);

      this.setState({ showing: false });
    }
  }

  removeDueDate() {
    this.props.removeDueDate();
    this.setState({
      showing: false,
      changed: false,
      selectedDay: null
    });
  }

  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
      changed: true
    });
  }

  handleTimeClick(time) {
    const selectedTime = this.state.selectedTime.set(time);
    this.setState({
      selectedTime,
      changed: true
    });
  }

  render() {
    const togglePopover = () => {
      if (this.state.showing) {
        this.setState(this.initialState);
      }
      this.setState({ showing: !this.state.showing });
    };

    const onHide = () => {
      this.setState({ showing: false });
      this.setState(this.initialState);
    };

    const today = moment().set({ hour: 0, minute: 0 });

    const classes = cx('duedate__container', {
      'duedate__container--completed': this.props.completed
    });

    return (
      <span className={classes}>
        <DueDateButton
          dueDate={this.props.dueDate}
          toggle={togglePopover}
        />

        <Overlay
          show={this.state.showing}
          onHide={onHide}
          target={this}
          container={this}
          placement="bottom"
          rootClose
        >
          <Popover id="DueDatePicker" className="duedate__popover">
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
                showOutsideDays
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
                    types={['secondary']}
                    className="duedate__submit--save"
                  >
                    Set due date
                  </Button>
                </div>
              )}
            </div>
          </Popover>
        </Overlay>
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
