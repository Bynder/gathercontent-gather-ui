import { React, shallow } from '../setup';
import { Guideline, Button } from '../../lib';

describe('Guideline', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Guideline title="Guideline title">
        <p>Guideline content</p>
      </Guideline>
    );
  });

  test('defaults to open', () => {
    expect(wrapper.hasClass('is-active')).toBe(true);
  });

  test('toggles an active class', () => {
    wrapper.setState({ showContent: false });
    expect(wrapper.hasClass('is-active')).toBe(false);
  });

  test('sets the showContent state to true', () => {
    wrapper.find(Button).prop('clickHandler')();
    expect(wrapper.find('p')).toHaveLength(1);
  });

  test('switches the text for the show toggle', () => {
    expect(wrapper.find(Button).prop('children')).toEqual('Hide details');
    wrapper.setState({ showContent: false });
    expect(wrapper.find(Button).prop('children')).toEqual('Show details');
  });
});
