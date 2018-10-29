import { React, shallow } from '../setup';
import { SelectionBar } from '../../lib';
import SelectionBarInformation from '../../lib/SelectionBar/SelectionBarInformation';
import SelectionBarCancel from '../../lib/SelectionBar/SelectionBarCancel';

describe('SelectionBar', () => {
  let wrapper;
  let clearSelectionSpy;
  let selectAllSpy;
  beforeEach(() => {
    clearSelectionSpy = jest.fn();
    selectAllSpy = jest.fn();
    wrapper = shallow(
      <SelectionBar
        type="files"
        selectedIds={[1, 2, 3]}
        clearSelection={clearSelectionSpy}
        selectAll={selectAllSpy}
      >
        <div className="child" />
      </SelectionBar>
    );
  });

  test('renders children', () => {
    expect(wrapper.find('.child')).toHaveLength(1);
  });

  test('renders a SelectionBarInformation', () => {
    expect(wrapper.find(SelectionBarInformation)).toHaveLength(1);
    expect(wrapper.find(SelectionBarInformation).prop('length')).toEqual(3);
    expect(wrapper.find(SelectionBarInformation).prop('type')).toEqual('files');
    expect(wrapper.find(SelectionBarInformation).prop('selectAll')).toEqual(
      selectAllSpy
    );
  });

  test('renders a SelectionBarCancel', () => {
    expect(wrapper.find(SelectionBarCancel)).toHaveLength(1);
    expect(wrapper.find(SelectionBarCancel).prop('hasSelected')).toEqual(true);
    expect(wrapper.find(SelectionBarCancel).prop('clearSelection')).toEqual(
      clearSelectionSpy
    );
  });

  test('adds an has-selected class', () => {
    expect(wrapper.hasClass('has-selected')).toBe(true);
    wrapper.setProps({ selectedIds: [] });
    expect(wrapper.hasClass('has-selected')).toBe(false);
  });

  test('adds an fixed modifier', () => {
    expect(wrapper.hasClass('selection-bar--fixed')).toBe(false);
    wrapper.setProps({ fixed: true });
    expect(wrapper.hasClass('selection-bar--fixed')).toBe(true);
  });

  test('adds an fixed modifier', () => {
    expect(wrapper.hasClass('selection-bar--auto-hide')).toBe(false);
    wrapper.setProps({ autoHide: true });
    expect(wrapper.hasClass('selection-bar--auto-hide')).toBe(true);
  });

  test('hides elements if there are no selected ids', () => {
    expect(wrapper.find(SelectionBarCancel)).toHaveLength(1);
    expect(wrapper.find('.selection-bar__actions')).toHaveLength(1);
    wrapper.setProps({ selectedIds: [] });
    expect(wrapper.find(SelectionBarCancel)).toHaveLength(0);
    expect(wrapper.find('.selection-bar__actions')).toHaveLength(0);
  });
});
