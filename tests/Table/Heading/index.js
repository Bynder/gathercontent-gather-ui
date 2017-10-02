import { React, expect, sinon, jsDomGlobal, shallow, mount } from '../../setup';
import TableHeading from '../../../lib/Table/Heading';
import Column from '../../../lib/Table/Column';
import Icon from '../../../lib/FontAwesomeIcon';

jsDomGlobal();

describe('Table/Heading', () => {
  const sortHandler = sortValue => sortValue;
  const toggleHandler = isChecked => isChecked;
  const columnNameSanitiser = columnName => columnName;
  const columns = ['Column 1', 'Column 2', 'Column 3'];

  let mountedWrapper;
  let toggleSpy;
  let sortingSpy;
  let sanitiserSpy;

  beforeEach(() => {
    toggleSpy = sinon.spy(toggleHandler);
    sortingSpy = sinon.spy(sortHandler);
    sanitiserSpy = sinon.spy(columnNameSanitiser);

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

  it('should render 4 Column components (1 toggleAll Column and 3 sorting Columns)', () => {
    expect(mountedWrapper.find(Column)).to.have.length(4);
  });

  it('should render 3 Icon components as they are 3 sorting Columns.)', () => {
    expect(mountedWrapper.find(Icon)).to.have.length(3);
  });

  it('contains an input with the ref of "toggleAll"', () => {
    const toggleAllCheckbox = shallow(mountedWrapper.get(0).toggleAll);
    expect(toggleAllCheckbox).to.have.length(1);
    expect(toggleAllCheckbox.type()).to.equal('checkbox');
  });

  it('passes the checked attribute from "toggleAll" to the this.props.toggleHandler', () => {
    const toggleAllCheckbox = shallow(mountedWrapper.get(0).toggleAll);
    toggleAllCheckbox.get(0).checked = true;
    toggleAllCheckbox.simulate('click');
    expect(toggleSpy.returnValues[0]).to.equal(true);
  });

  it('passes the column text to this.props.sortHandler', () => {
    const lastSortingColumn = mountedWrapper.find(Column).last();
    lastSortingColumn.children().simulate('click');
    expect(sortingSpy.returnValues[0]).to.equal('Column 3');
  });

  it('calls the columnNameSanitiser 3 times', () => {
    expect(sanitiserSpy.calledThrice).to.equal(true);
  });
});
