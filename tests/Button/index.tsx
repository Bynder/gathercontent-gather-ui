import { React, mount } from '../setup';
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Butto... Remove this comment to see the full error message
import { Button } from '../../lib';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Button', () => {
  let wrapper: any;
  let button: any;
  let clickHandlerSpy: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    clickHandlerSpy = jest.fn();
    // @ts-expect-error TS(2304): Cannot find name 'clickHandler'.
    wrapper = mount(<Button clickHandler={clickHandlerSpy}>Botão</Button>);
    button = wrapper.find('button');
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should render text passed on children', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(button.prop('children')).toEqual('Botão');
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should render a primary button by default', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(button.prop('className')).toContain('button  button--primary');
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should not be a submit button by default', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(button.prop('type')).toEqual('button');
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('can be a submit button', () => {
    wrapper.setProps({
      isSubmit: true
    });
    wrapper.update();
    button = wrapper.find('button');
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(button.prop('type')).toEqual('submit');
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should render a button with multiple type classes', () => {
    wrapper.setProps({
      types: ['clear', 'collapsed']
    });
    wrapper.update();
    button = wrapper.find('button');
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(button.prop('className')).toContain(
      'button  button--clear button--collapsed'
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should render custom classes', () => {
    wrapper.setProps({
      className: 'custom-class'
    });
    wrapper.update();
    button = wrapper.find('button');
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(button.prop('className')).toContain('custom-class');
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should call props.clickHandler when clicked', () => {
    wrapper.simulate('click', { target: { value: 'foo' } });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(clickHandlerSpy).toHaveBeenCalledTimes(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(clickHandlerSpy.mock.calls[0][0].target.value).toEqual('foo');
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should set state.disabled to true when clicked if props.disableOnClick is true', () => {
    wrapper.setProps({
      disableOnClick: true
    });
    wrapper.simulate('click');
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state('disabled')).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should not set state.disabled to true when clicked if props.disableOnClick is false', () => {
    wrapper.simulate('click');
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state('disabled')).toEqual(false);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('it can pass an id prop down to button attribute', () => {
    wrapper.setProps({ id: 'my-id' });
    button = wrapper.find('button');
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(button.prop('id')).toEqual('my-id');
  });
});
