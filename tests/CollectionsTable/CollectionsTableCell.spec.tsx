import { React, shallow } from '../setup';
// @ts-expect-error TS(2305): Module '"../../lib/index"' has no exported member ... Remove this comment to see the full error message
import { CollectionsTable } from '../../lib/index';
import CollectionsTableCellContent from '../../lib/CollectionsTable/CollectionsTableCellContent';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Collections table cell', () => {
  let wrapper: any;
  const onClick = () => {};

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <CollectionsTable.Cell onClick={onClick}>
        // @ts-expect-error TS(2304): Cannot find name 'Hello'.
        Hello world
      </CollectionsTable.Cell>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders children', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(CollectionsTableCellContent).prop('children')).toEqual(
      'Hello world'
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('sharing props', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.prop('onClick')).toEqual(onClick);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('rendering a <CollectionsTableCellContent /> component', () => {
    wrapper.setProps({ allowOverflow: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper.find(CollectionsTableCellContent).prop('allowOverflow')
    ).toEqual(true);
  });
});
