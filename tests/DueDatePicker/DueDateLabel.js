import { React, shallow } from '../setup';
import DueDateLabel from '../../lib/DueDatePicker/DueDateLabel';
import Icon from '../../lib/Icon';

describe('DueDateLabel', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DueDateLabel>in 2 days</DueDateLabel>);
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
    wrapper.setProps({ children: '' });
    expect(wrapper.render().text()).toEqual('No due date set');
  });

  test('should add class and icon when date is overdue', () => {
    wrapper.setProps({
      overdue: true
    });
    expect(wrapper.hasClass('color-overdue')).toBe(true);
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper.find(Icon).prop('name')).toEqual('warning');
    expect(wrapper.find('.duedate__label--button').contains('in 2 days')).toBe(
      true
    );
  });
});
