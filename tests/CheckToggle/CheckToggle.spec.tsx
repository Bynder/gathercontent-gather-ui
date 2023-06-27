import { React, shallow } from '../setup';
import CheckToggle from '../../lib/CheckToggle';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('CheckToggle', () => {
  let props: any;

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders a wrapper with an input', () => {
    // @ts-expect-error TS(2304): Cannot find name 'id'.
    const Element = shallow(<CheckToggle id="test-id" />);
    const div = Element.find('div');
    const input = div.find('input');

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(div).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('changes its state when clicked', () => {
    props = {
      id: 'hello',
      // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
      clickHandler: jest.fn()
    };

    // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
    const Element = shallow(<CheckToggle {...props} />);
    Element.find('input').simulate('change');

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Element.state().checked).toEqual(true);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(props.clickHandler).toHaveBeenCalled();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('receives a matching ID for both input and label', () => {
    props = { id: 'hello' };

    // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
    const Element = shallow(<CheckToggle {...props} />);
    const label = Element.find('[data-label-id]');
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(label.props().htmlFor).toEqual(props.id);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('adds a size small modifier', () => {
    // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
    const Element = shallow(<CheckToggle {...props} />);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Element.hasClass('size-small')).toBe(false);
    Element.setProps({ displaySmall: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Element.hasClass('size-small')).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('adds a checked modifier', () => {
    // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
    const Element = shallow(<CheckToggle {...props} />);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Element.hasClass('is-checked')).toBe(false);
    Element.setProps({ displayChecked: true });
    Element.setState({ checked: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Element.hasClass('is-checked')).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('adds a disabled modifier', () => {
    // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
    const Element = shallow(<CheckToggle {...props} />);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Element.hasClass('disabled')).toBe(false);
    Element.setProps({ disabled: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Element.hasClass('disabled')).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('adds margin large modifier', () => {
    // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
    const Element = shallow(<CheckToggle {...props} />);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Element.hasClass('margin-large')).toBe(false);
    Element.setProps({ marginSizeLarge: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Element.hasClass('margin-large')).toBe(true);
  });
});
