import { React, shallow } from '../setup';
import { FileCardPlaceholder } from '../../lib';

describe('FileCard Placeholder', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FileCardPlaceholder>
        <span className="waffles">waffles!</span>
      </FileCardPlaceholder>
    );
  });

  test('renders its children', () => {
    expect(wrapper.find('.waffles')).toHaveLength(1);
  });

  test('renders the svgs', () => {
    expect(wrapper.find('.filecard__placeholder__svg')).toHaveLength(3);
  });
});
