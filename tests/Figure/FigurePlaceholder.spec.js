import { React, shallow } from '../setup';
import { FigurePlaceholder } from '../../lib';

describe('Figure Placeholder', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FigurePlaceholder>
        <span className="waffles">waffles!</span>
      </FigurePlaceholder>
    );
  });

  test('renders its children', () => {
    expect(wrapper.find('.waffles')).toHaveLength(1);
  });

  test('renders the svgs', () => {
    expect(wrapper.find('.figure__placeholder__svg')).toHaveLength(3);
  });
});
