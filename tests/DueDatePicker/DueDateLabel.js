import moment from 'moment';
import { React, shallow } from '../setup';
import DueDateLabel from '../../lib/DueDatePicker/DueDateLabel';
import Button from '../../lib/Button';
import Icon from '../../lib/Icon';

describe('DueDateLabel', () => {
  let wrapper;
  let clickHandlerSpy;

  beforeEach(() => {
    clickHandlerSpy = jest.fn();
    wrapper = shallow(
      <DueDateLabel
        dueDate={{ date: moment().add(2, 'day'), overdue: false }}
        clickHandler={clickHandlerSpy}
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
    expect(wrapper.render().text()).toEqual('No due date set');
  });

  test('should add class and icon when date is overdue', () => {
    wrapper.setProps({
      dueDate: { date: moment().subtract(3, 'day'), overdue: true }
    });
    expect(wrapper.hasClass('duedate__label--overdue')).toBe(true);
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper.find(Icon).prop('name')).toEqual('warning');
    expect(wrapper.find(Button).contains('3 days ago')).toBe(true);
  });

  test('it passes clickHandler to the Button', () => {
    wrapper.find(Button).prop('clickHandler')();
    wrapper.setProps({ dueDate: null });
    wrapper.find(Button).prop('clickHandler')();
    expect(clickHandlerSpy).toHaveBeenCalledTimes(2);
  });
});
