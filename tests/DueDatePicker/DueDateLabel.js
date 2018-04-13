import moment from 'moment';
import { React, shallow } from '../setup';
import DueDateLabel from '../../lib/DueDatePicker/DueDateLabel';
import Icon from '../../lib/Icon';

describe('DueDateLabel', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <DueDateLabel
        dueDate={{ date: moment().add(2, 'day'), overdue: false }}
      />
    );
  });

  test('should render 1 <span />s component', () => {
    expect(wrapper.find('span')).toHaveLength(2);
  });

  test('should contain the due date', () => {
    expect(wrapper.find('span').contains('in 2 days')).toBe(true);
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
    expect(wrapper.hasClass('color-overdue')).toBe(true);
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper.find(Icon).prop('name')).toEqual('warning');
    expect(wrapper.find('.duedate__label--button').contains('3 days ago')).toBe(
      true
    );
  });
});
