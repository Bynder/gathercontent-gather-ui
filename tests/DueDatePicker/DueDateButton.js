import moment from 'moment';
import { React, shallow } from '../setup';
import DueDateButton from '../../lib/DueDatePicker/DueDateButton';
import DropdownTrigger from '../../lib/Dropdown/DropdownTrigger';
import Icon from '../../lib/Icon';

describe('DueDateButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <DueDateButton dueDate={moment().add(2, 'day')} today={moment()} />
    );
  });

  test('should render <span /> component', () => {
    expect(wrapper.find('span')).toHaveLength(1);
  });

  test('should render <DropdownTrigger /> component', () => {
    expect(wrapper.find(DropdownTrigger)).toHaveLength(1);
  });

  test('should contain the due date', () => {
    expect(wrapper.find(DropdownTrigger).contains('in 2 days')).toBe(true);
    expect(wrapper.text()).toEqual(
      expect.stringContaining('Due to be completed')
    );
  });

  test('should not display date when not provided', () => {
    wrapper.setProps({ dueDate: null });
    expect(wrapper.find('span').text()).toEqual(
      expect.stringContaining('Set due date')
    );
  });

  test('should add class and icon when date is overdue', () => {
    wrapper.setProps({ dueDate: moment().subtract(3, 'day') });
    expect(wrapper.hasClass('color-overdue')).toBe(true);
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper.find(Icon).prop('name')).toEqual('warning');
    expect(wrapper.find(DropdownTrigger).contains('3 days ago')).toBe(true);
  });
});
