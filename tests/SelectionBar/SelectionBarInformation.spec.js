import { React, shallow } from '../setup';
import { Button } from '../../lib';
import SelectionBarInformation from '../../lib/SelectionBar/SelectionBarInformation';

describe('SelectionBarInformation', () => {
  let wrapper;
  let selectAllSpy;
  beforeEach(() => {
    selectAllSpy = jest.fn();
    wrapper = shallow(
      <SelectionBarInformation
        type="files"
        length={4}
        selectAll={selectAllSpy}
      />
    );
  });

  test('renders a Button', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Button).prop('clickHandler')).toEqual(selectAllSpy);
  });

  test('renders the correct text', () => {
    expect(wrapper.find('.selection-bar__count').text()).toEqual('4');
    expect(wrapper.find('.selection-bar__type').text()).toEqual(
      'files selected'
    );
  });
});
