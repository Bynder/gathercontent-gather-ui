import { React, shallow } from '../setup';
import CardContent from '../../lib/Card/CardContent';

describe('Card Content', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CardContent>
        <div className="child" />
      </CardContent>
    );
  });

  test('renders children', () => {
    expect(wrapper.find('.child')).toHaveLength(1);
  });

  test('adds a bordered modifier', () => {
    expect(wrapper.hasClass('card__content--bordered')).toBe(false);
    wrapper.setProps({ bordered: true });
    expect(wrapper.hasClass('card__content--bordered')).toBe(true);
  });

  test('adds an collapse modifier', () => {
    expect(wrapper.hasClass('card__content--collapse')).toBe(false);
    wrapper.setProps({ collapse: true });
    expect(wrapper.hasClass('card__content--collapse')).toBe(true);
  });
});
