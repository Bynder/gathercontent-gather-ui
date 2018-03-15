import { Popover, Overlay } from 'react-bootstrap/lib';
import { React, shallow } from '../setup';
import DueDateHeader from '../../lib/DueDatePicker/DueDateHeader';
import DueDateTime from '../../lib/DueDatePicker/DueDateTime';
import DropdownMenu from '../../lib/DropdownMenu';
import Icon from '../../lib/Icon';
import moment from 'moment';

describe('DueDateHeader', () => {
  let wrapper;
  let clickHandlerRemoveSpy;
  let clickHandlerSetSpy;

  let dueDate = moment().add(3, 'day').set({hours: 14, minutes: 15});

  beforeEach(() => {
    clickHandlerRemoveSpy = jest.fn();
    clickHandlerSetSpy = jest.fn();
    wrapper = shallow(
      <DueDateHeader
        dueDate={dueDate.toDate()}
        dueTime={dueDate}
        setTime={clickHandlerSetSpy}
        removeDueDate={clickHandlerRemoveSpy}
      />);
  });

  test('should render <DueDateTime />', () => {
    expect(wrapper.find(DueDateTime)).toHaveLength(1);
    expect(wrapper.find(DueDateTime).prop('time')).toEqual('2:15 PM');
  });

  test('should render <DropdownMenu />', () => {
    expect(wrapper.find(DropdownMenu)).toHaveLength(1);
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper.find(Icon).prop('name')).toEqual('menuDotted');
  });

  test('should render due date', () => {
    expect(wrapper.find('.duedate__header--date').text()).toEqual(expect.stringContaining(dueDate.calendar(null, {
      sameDay: '[Today at]',
      nextDay: '[Tomorrow at]',
      nextWeek: 'dddd [at]',
      lastDay: '[Yesterday at]',
      lastWeek: '[Last] dddd [at]',
      sameElse: 'MMMM Do YYYY [at]'
    })))
  });

  test('adds overdue with a date in the past', () => {
    wrapper.setProps({ dueDate: moment().subtract(5, 'day') });
    expect(wrapper.hasClass('duedate__header--overdue')).toBe(true);
  });

  test('should show no due date set', () => {
    wrapper.setProps({ dueDate: null });
    expect(wrapper.find('.duedate__header--date').text()).toEqual('No due date set');
  });

  test('setTime should be passed to DueDateTime', () => {
    wrapper.find(DueDateTime).prop('setTime')();
    expect(clickHandlerSetSpy).toHaveBeenCalled();
  });

  test('removeDueDate should be passed to DueDateTime', () => {
    const expected = [
      {
        action: clickHandlerRemoveSpy,
        name: 'Remove due date',
        linkType: 'danger'
      }
    ];
    expect(wrapper.find(DropdownMenu).prop('items')).toEqual(expected);
    wrapper.find(DropdownMenu).prop('items')[0].action()
    expect(clickHandlerRemoveSpy).toHaveBeenCalled();
  });
});
