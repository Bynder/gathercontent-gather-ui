import { React, shallow } from '../setup';
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Avata... Remove this comment to see the full error message
import { Avatar } from '../../lib';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('AvatarGroup', () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <Avatar
        // @ts-expect-error TS(2304): Cannot find name 'initials'.
        initials="AE"
        // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
        name="Angus Edwardson"
        // @ts-expect-error TS(2304): Cannot find name 'className'.
        className="avatar--has-toggle"
        // @ts-expect-error TS(2304): Cannot find name 'isHighlighted'.
        isHighlighted
        // @ts-expect-error TS(2304): Cannot find name 'isOffline'.
        isOffline
      />
    );
  });

  // @ts-expect-error TS(2304): Cannot find name 'afterEach'.
  afterEach(() => {});

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders the className prop', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass('avatar--has-toggle')).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('adds a highlighted BEM modifier', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass('avatar--highlighted')).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('adds an offline BEM modifier', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass('avatar--offline')).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('adds a has colour BEM modifier', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass('avatar--has-colour')).toBe(false);
    wrapper.setProps({ colour: 'red' });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass('avatar--has-colour')).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('adds a has animate BEM modifier', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass('avatar--animated')).toBe(false);
    wrapper.setProps({ animate: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass('avatar--animated')).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders an avatar image', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('img')).toHaveLength(0);
    wrapper.setProps({ url: 'url/to/avatar' });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('img')).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders the users initials', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.text()).toEqual('AE');
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('adds a color styles based on the colour prop', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.prop('style')).toEqual({});
    wrapper.setProps({ colour: 'red' });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.prop('style')).toEqual({
      color: 'red'
    });
  });
});
