import { React, shallow } from '../setup';
import CardSubHeading from '../../lib/src/components/card/CardSubHeading';

describe('Card Sub Heading', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CardSubHeading>
        <div className="child" />
      </CardSubHeading>
    );
  });

  test('renders children', () => {
    expect(wrapper.find('.child')).toHaveLength(1);
  });

  test('adds a truncate modifier', () => {
    expect(wrapper.hasClass('card__subheading--truncate')).toBe(false);
    wrapper.setProps({ truncate: true });
    expect(wrapper.hasClass('card__subheading--truncate')).toBe(true);
  });
});
