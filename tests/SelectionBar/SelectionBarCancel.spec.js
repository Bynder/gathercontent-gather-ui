import { React, shallow } from '../setup';
import { ShortcutTrigger, Button } from '../../lib';
import SelectionBarCancel from '../../lib/SelectionBar/SelectionBarCancel';

describe('SelectionBarCancel', () => {
  let wrapper;
  let clearSelectionSpy;
  beforeEach(() => {
    clearSelectionSpy = jest.fn();
    wrapper = shallow(
      <SelectionBarCancel
        type="files"
        length={4}
        clearSelection={clearSelectionSpy}
      />
    );
  });

  test('renders a ShortcutTrigger', () => {
    expect(wrapper.find(ShortcutTrigger)).toHaveLength(1);
    expect(wrapper.find(ShortcutTrigger).prop('shortcutKey')).toEqual('Escape');
    expect(wrapper.find(ShortcutTrigger).prop('onShortcutTrigger')).toEqual(
      clearSelectionSpy
    );
  });

  test('renders a cancel Button', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Button).prop('clickHandler')).toEqual(
      clearSelectionSpy
    );
  });
});
