import moment from 'moment';
import { React, shallow } from '../setup';
import DueDateHeader from '../../lib/DueDatePicker/DueDateHeader';
import DueDateTime from '../../lib/DueDatePicker/DueDateTime';
import Icon from '../../lib/Icon';
import Dropdown from '../../lib/Dropdown';
import DropdownAction from '../../lib/Dropdown/DropdownAction';
import DropdownActionGroup from '../../lib/Dropdown/DropdownActionGroup';
import DropdownContent from '../../lib/Dropdown/DropdownContent';
import DropdownTrigger from '../../lib/Dropdown/DropdownTrigger';

describe('DueDateHeader', () => {
  let wrapper;
  let clickHandlerRemoveSpy;
  let clickHandlerSetSpy;

  const dueDate = moment()
    .add(3, 'day')
    .set({ hours: 14, minutes: 15 });

  beforeEach(() => {
    clickHandlerRemoveSpy = jest.fn();
    clickHandlerSetSpy = jest.fn();
    wrapper = shallow(
      <DueDateHeader
        dueDate={dueDate.toDate()}
        dueTime={dueDate}
        setTime={clickHandlerSetSpy}
        removeDueDate={clickHandlerRemoveSpy}
      />
    );
  });

  test('should render <DueDateTime />', () => {
    expect(wrapper.find(DueDateTime)).toHaveLength(1);
    expect(wrapper.find(DueDateTime).prop('time')).toEqual('2:15 PM');
  });

  test('should render Dropdown components', () => {
    expect(wrapper.find(Dropdown)).toHaveLength(1);
    expect(wrapper.find(DropdownTrigger)).toHaveLength(1);
    expect(wrapper.find(DropdownContent)).toHaveLength(1);
    expect(wrapper.find(DropdownActionGroup)).toHaveLength(1);
    expect(wrapper.find(DropdownAction)).toHaveLength(1);
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper.find(Icon).prop('name')).toEqual('menuDotted');
  });

  test('should render due date', () => {
    expect(wrapper.find('.duedate__header--date').text()).toEqual(
      expect.stringContaining(
        dueDate.calendar(null, {
          sameDay: '[Today at]',
          nextDay: '[Tomorrow at]',
          nextWeek: 'dddd [at]',
          lastDay: '[Yesterday at]',
          lastWeek: '[Last] dddd [at]',
          sameElse: 'MMMM Do YYYY [at]'
        })
      )
    );
  });

  test('adds overdue with a date in the past', () => {
    wrapper.setProps({ dueDate: moment().subtract(5, 'day') });
    expect(
      wrapper.find('.duedate__header--date').hasClass('color-overdue')
    ).toBe(true);
  });

  test('should show no due date set', () => {
    wrapper.setProps({ dueDate: null });
    expect(wrapper.find('.duedate__header--date').text()).toEqual(
      'No due date set'
    );
  });

  test('setTime should be passed to DueDateTime', () => {
    wrapper.find(DueDateTime).prop('setTime')();
    expect(clickHandlerSetSpy).toHaveBeenCalled();
  });

  test('removeDueDate should be passed to DueDateTime', () => {
    expect(wrapper.find(DropdownAction).prop('action')).toEqual(
      clickHandlerRemoveSpy
    );
    wrapper.find(DropdownAction).prop('action')();
    expect(clickHandlerRemoveSpy).toHaveBeenCalled();
  });
});
