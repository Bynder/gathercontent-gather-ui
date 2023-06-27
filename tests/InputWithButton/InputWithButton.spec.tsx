import { React, shallow } from '../setup';
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Input... Remove this comment to see the full error message
import { InputWithButton, Button } from '../../lib';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('InputWithButton', () => {
  let wrapper: any;
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  let onClickSpy = jest.fn();
  let props: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    onClickSpy = jest.fn();

    props = {
      value: 'A value',
      buttonText: 'Button Text',
      onClick: onClickSpy,
      id: '123'
    };

    wrapper = shallow(<InputWithButton {...props} />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('passes the value prop to the input', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('input').prop('value')).toEqual(props.value);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('passes button text prop to button', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Button).prop('children')).toEqual(props.buttonText);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('calls onClick when the button is pressed', () => {
    wrapper.find(Button).simulate('click');

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onClickSpy).toBeCalled();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('adds a padding-small modifier', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass('input-with-button--padding-small')).toBe(false);
    wrapper.setProps({ paddingSmall: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass('input-with-button--padding-small')).toBe(true);
  });
});
