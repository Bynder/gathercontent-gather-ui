import { React, shallow } from '../setup';
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'TopBa... Remove this comment to see the full error message
import { TopBarCell } from '../../lib';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('TopBar/TopBarCell', () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <TopBarCell>
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div className="test">Test child</div>
      </TopBarCell>
    );
  });

  // @ts-expect-error TS(2304): Cannot find name 'afterEach'.
  afterEach(() => {});

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders its children', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('.test')).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('adds a bordered class when bordered prop is there', () => {
    wrapper.setProps({
      bordered: true
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('.top-bar__cell--bordered')).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('adds a className', () => {
    wrapper.setProps({
      className: 'waffles'
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('.waffles')).toHaveLength(1);
  });
});
