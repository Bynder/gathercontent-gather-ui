import { React, shallow } from '../setup';
import CardFooter from '../../lib/src/components/card/CardFooter';

describe('Card Footer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CardFooter>
        <div className="child" />
      </CardFooter>
    );
  });

  test('renders children', () => {
    expect(wrapper.find('.child')).toHaveLength(1);
  });

  test('adds an collapse modifier', () => {
    expect(wrapper.hasClass('card__footer--collapse')).toBe(false);
    wrapper.setProps({ collapse: true });
    expect(wrapper.hasClass('card__footer--collapse')).toBe(true);
  });
});
