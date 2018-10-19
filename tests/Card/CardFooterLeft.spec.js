import { React, shallow } from '../setup';
import CardFooterLeft from '../../lib/Card/CardFooterLeft';

describe('Card Footer Left', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CardFooterLeft>
        <div className="child" />
      </CardFooterLeft>
    );
  });

  test('renders children', () => {
    expect(wrapper.find('.child')).toHaveLength(1);
  });

  test('adds an collapse modifier', () => {
    expect(wrapper.hasClass('card__footer-left--collapse')).toBe(false);
    wrapper.setProps({ collapse: true });
    expect(wrapper.hasClass('card__footer-left--collapse')).toBe(true);
  });
});
