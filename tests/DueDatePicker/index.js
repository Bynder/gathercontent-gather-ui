import DayPicker from 'react-day-picker';
import moment from 'moment';
import { Popover, Overlay } from 'react-bootstrap/lib';
import { React, shallow } from '../setup';
import DueDatePicker from '../../lib/DueDatePicker';
import DueDateButton from '../../lib/DueDatePicker/DueDateButton';
import DueDateHeader from '../../lib/DueDatePicker/DueDateHeader';

describe('DueDatePicker', () => {
  let wrapper;
  let applyClickHandlerSpy;
  let removeClickHandlerSpy;

  beforeEach(() => {
    applyClickHandlerSpy = jest.fn();
    removeClickHandlerSpy = jest.fn();
    wrapper = shallow(
      <DueDatePicker
        dueDate={moment()
          .add(1, 'day')
          .set({ hours: 14, minutes: 15 })}
        applyDueDate={applyClickHandlerSpy}
        removeDueDate={removeClickHandlerSpy}
      />
    );
  });

  test('should render all components', () => {
    expect(wrapper.find(DueDateButton)).toHaveLength(1);
    expect(wrapper.find(DueDateHeader)).toHaveLength(1);
    expect(wrapper.find(DayPicker)).toHaveLength(1);
    expect(wrapper.find(Popover)).toHaveLength(1);
    expect(wrapper.find(Overlay)).toHaveLength(1);
  });

  test('container has completed class when prop passed', () => {
    expect(
      wrapper
        .find('.duedate__container')
        .hasClass('duedate__container--completed')
    ).toBe(false);
    wrapper.setProps({ completed: true });
    expect(
      wrapper
        .find('.duedate__container')
        .hasClass('duedate__container--completed')
    ).toBe(true);
  });

  test('displays set due date buttons when changed state is true', () => {
    expect(wrapper.find('.duedate__submit')).toHaveLength(0);
    wrapper.setState({ changed: true });
    expect(wrapper.find('.duedate__submit')).toHaveLength(1);
  });

  test('click handlers should be called', () => {
    wrapper.setState({ changed: true });
    wrapper.find('.duedate__submit--save').prop('clickHandler')();
    expect(applyClickHandlerSpy).toHaveBeenCalled();

    wrapper.find(DueDateHeader).prop('removeDueDate')();
    expect(applyClickHandlerSpy).toHaveBeenCalled();
  });
});
