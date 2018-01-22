import { React, shallow, mount } from '../../setup';
import TableHeading from '../../../lib/Table/Heading';
import Column from '../../../lib/Table/Column';
import Icon from '../../../lib/FontAwesomeIcon';

describe('Table/Heading', () => {
  const columns = ['Column 1', 'Column 2', 'Column 3'];

  let mountedWrapper;
  let toggleSpy;
  let sortingSpy;
  let sanitiserSpy;

  beforeEach(() => {
    toggleSpy = jest.fn();
    sortingSpy = jest.fn();
    sanitiserSpy = jest.fn();

    mountedWrapper = mount(
      <TableHeading
        columns={columns}
        sortHandler={sortingSpy}
        toggleHandler={toggleSpy}
        columnNameSanitiser={sanitiserSpy}
        sortingOrder={-1}
      />
    );
  });

  test('should render 4 Column components (1 toggleAll Column and 3 sorting Columns)', () => {
    expect(mountedWrapper.find(Column)).toHaveLength(4);
  });

  test('should render 3 Icon components as they are 3 sorting Columns.)', () => {
    expect(mountedWrapper.find(Icon)).toHaveLength(3);
  });

  test('contains an input with the ref of "toggleAll"', () => {
    const toggleAllCheckbox = shallow(mountedWrapper.get(0).toggleAll);
    expect(toggleAllCheckbox).toHaveLength(1);
    expect(toggleAllCheckbox.type()).toEqual('checkbox');
  });

  test('passes the checked attribute from "toggleAll" to the this.props.toggleHandler', () => {
    const toggleAllCheckbox = shallow(mountedWrapper.get(0).toggleAll);
    toggleAllCheckbox.get(0).checked = true;
    toggleAllCheckbox.simulate('click');
    expect(toggleSpy).toHaveBeenCalled();
  });

  test('passes the column text to this.props.sortHandler', () => {
    const lastSortingColumn = mountedWrapper.find(Column).last();
    lastSortingColumn.children().simulate('click');
    expect(sortingSpy).toHaveBeenCalled();
  });

  test('calls the columnNameSanitiser 3 times', () => {
    expect(sanitiserSpy).toHaveBeenCalledTimes(3);
  });
});
