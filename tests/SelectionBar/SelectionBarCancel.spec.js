import { React, shallow } from '../setup';
import { ShortcutTrigger } from '../../lib';
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

  test('renders the correct text', () => {
    expect(wrapper.find('.cancel-text').text()).toEqual('Esc to cancel');
  });
});
