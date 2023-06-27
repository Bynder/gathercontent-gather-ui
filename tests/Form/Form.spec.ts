import { React, shallow } from '../setup';
import { Form } from '../../lib';

describe('Form', () => {
  let onSubmitSpy;
  let onCancelSpy;
  let wrapper;

  beforeEach(() => {
    onSubmitSpy = jest.fn();
    onCancelSpy = jest.fn();
    wrapper = shallow(
      <Form onSubmit={onSubmitSpy} onCancel={onCancelSpy} className="test">
        <input />
      </Form>
    );
  });

  test('renders children', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });

  test('calls props.onSubmit when submitting', () => {
    const preventDefaultSpy = jest.fn();
    const event = { preventDefault: preventDefaultSpy };
    wrapper.find('form').prop('onSubmit')(event);
    expect(onSubmitSpy).toHaveBeenCalledWith(event);
    expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
  });

  test('calls onCancel with the esc key', () => {
    wrapper.instance().handleKeyDown({ keyCode: 27 });
    expect(onCancelSpy).not.toHaveBeenCalled();

    wrapper.setProps({ escToClose: true });
    wrapper.instance().handleKeyDown({ keyCode: 27 });
    expect(onCancelSpy).toHaveBeenCalledTimes(1);
  });

  test('renders the classNames', () => {
    expect(wrapper.hasClass('test')).toEqual(true);
  });
});
