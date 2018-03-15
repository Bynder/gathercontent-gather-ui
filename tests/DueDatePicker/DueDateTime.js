import { Popover, Overlay } from 'react-bootstrap/lib';
import { React, shallow } from '../setup';
import DueDateTime from '../../lib/DueDatePicker/DueDateTime';


describe('DueDateTime', () => {
  let wrapper;
  let clickHandlerSpy;

  beforeEach(() => {
    clickHandlerSpy = jest.fn();
    wrapper = shallow(
      <DueDateTime
        time="2:15 PM"
        setTime={clickHandlerSpy}
      />);
  });

  test('should render all components', () => {
    expect(wrapper.find('DropdownToggle')).toHaveLength(1);
    expect(wrapper.find('MenuItem')).toHaveLength(96);
  });

  test('clickHandler should get called on click', () => {
    wrapper.find('MenuItem').first().prop('onSelect')();
    expect(clickHandlerSpy).toHaveBeenCalled();
  });
});
