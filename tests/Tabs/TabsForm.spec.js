import { React, shallow } from '../setup';
import { Tabs, Form, FormInput } from '../../lib';

describe('Tabs Form', () => {
  let wrapper;
  let onSubmitSpy;
  let onCancelSpy;

  beforeEach(() => {
    onSubmitSpy = jest.fn();
    onCancelSpy = jest.fn();
    wrapper = shallow(
      <Tabs.Form onSubmit={onSubmitSpy} onCancel={onCancelSpy} />
    );
  });

  test('renders a Form & FormInput UI component', () => {
    expect(wrapper.find(Form).prop('escToClose')).toEqual(true);
    expect(wrapper.find(Form).prop('onCancel')).toEqual(onCancelSpy);
    expect(wrapper.find(FormInput).prop('value')).toEqual('');
    expect(wrapper.find(FormInput).prop('placeholder')).toEqual('');
    expect(wrapper.find(FormInput).prop('focusOnMount')).toEqual(true);
  });

  test('passes the value of the input to props.onSubmit ', () => {
    wrapper.find(Form).prop('onSubmit')({ target: [{ value: 'test value' }] });
    expect(onSubmitSpy).toHaveBeenCalledWith('test value');
  });
});
