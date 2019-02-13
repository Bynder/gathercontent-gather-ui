import { React, shallow } from '../setup';
import { Tabs, Form, FormInput } from '../../lib';

describe('Tabs Form', () => {
  let wrapper;
  let onSubmitSpy;
  let onCancelSpy;
  let onInputChangeSpy;

  beforeEach(() => {
    onSubmitSpy = jest.fn();
    onCancelSpy = jest.fn();
    onInputChangeSpy = jest.fn();
    wrapper = shallow(
      <Tabs.Form
        onSubmit={onSubmitSpy}
        onCancel={onCancelSpy}
        onInputChange={onInputChangeSpy}
      />
    );
  });

  test('renders a Form & FormInput UI component', () => {
    expect(wrapper.find(Form).prop('escToClose')).toEqual(true);
    expect(wrapper.find(FormInput).prop('onInputChange')).toEqual(
      onInputChangeSpy
    );
    expect(wrapper.find(FormInput).prop('value')).toEqual('');
    expect(wrapper.find(FormInput).prop('placeholder')).toEqual('');
    expect(wrapper.find(FormInput).prop('focusOnMount')).toEqual(true);
    wrapper.find(Form).prop('onCancel')();
    expect(onCancelSpy).toHaveBeenCalled();
    expect(onInputChangeSpy).toHaveBeenCalledWith('');
  });

  test('passes the value of the input to props.onSubmit ', () => {
    wrapper.find(Form).prop('onSubmit')({ target: [{ value: 'test value' }] });
    expect(onSubmitSpy).toHaveBeenCalledWith('test value');
  });

  test('passes the value of the input to props.onSubmit ', () => {
    wrapper.find(Form).prop('onSubmit')({ target: [{ value: 'test value' }] });
    expect(onSubmitSpy).toHaveBeenCalledWith('test value');
  });

  test('submits onBlur', () => {
    wrapper.find(Form).prop('onBlur')({
      target: { value: 'woofle waffle' }
    });
    expect(onSubmitSpy).toHaveBeenCalledWith('woofle waffle');
  });

  test('doesnt submit onBlur', () => {
    wrapper.setProps({ submitOnBlur: false });
    wrapper.find(Form).prop('onBlur')({
      target: { value: 'woofle waffle' }
    });
    expect(onSubmitSpy).not.toHaveBeenCalled();
  });
});
