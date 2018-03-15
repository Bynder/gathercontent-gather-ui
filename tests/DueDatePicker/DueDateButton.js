import moment from 'moment';
import { React, shallow } from '../setup';
import DueDateButton from '../../lib/DueDatePicker/DueDateButton';
import Button from '../../lib/Button';
import Icon from '../../lib/Icon';

describe('DueDateButton', () => {
  let wrapper;
  let clickHandlerSpy;

  beforeEach(() => {
    clickHandlerSpy = jest.fn();
    wrapper = shallow(
      <DueDateButton
        dueDate={moment().add(2, 'day')}
        toggle={clickHandlerSpy}
        today={moment()}
      />
    );
  });

  test('should render <Button /> component', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  test('should contain the due date', () => {
    expect(wrapper.find(Button).contains('in 2 days')).toBe(true);
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

  test('should show icon when date not provided', () => {
    wrapper.setProps({ dueDate: null });
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper.find(Icon).prop('name')).toEqual('clock');
  });

  test('should add class and icon when date is overdue', () => {
    wrapper.setProps({ dueDate: moment().subtract(3, 'day') });
    expect(wrapper.hasClass('color-overdue')).toBe(true);
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper.find(Icon).prop('name')).toEqual('warning');
    expect(wrapper.find(Button).contains('3 days ago')).toBe(true);
  });

  test('clickHandler should get called on click', () => {
    wrapper.find(Button).prop('clickHandler')();
    wrapper.setProps({ dueDate: null });
    wrapper.find(Button).prop('clickHandler')();
    expect(clickHandlerSpy).toHaveBeenCalledTimes(2);
  });
});
