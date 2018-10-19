import { React, shallow } from '../setup';
import CardFooterRight from '../../lib/Card/CardFooterRight';

describe('Card Footer Right', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CardFooterRight>
        <div className="child" />
      </CardFooterRight>
    );
  });

  test('renders children', () => {
    expect(wrapper.find('.child')).toHaveLength(1);
  });

  test('adds an collapse modifier', () => {
    expect(wrapper.hasClass('card__footer-right--collapse')).toBe(false);
    wrapper.setProps({ collapse: true });
    expect(wrapper.hasClass('card__footer-right--collapse')).toBe(true);
  });
});
