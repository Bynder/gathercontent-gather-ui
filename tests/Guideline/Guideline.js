import { React, expect, shallow } from '../setup';
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

  it('does not render its children', () => {
    expect(wrapper.find('p')).to.have.length(0);
  });

  it('renders its children', () => {
    wrapper.setState({ showContent: true });
  });

  it('sets the showContent state to true', () => {
    wrapper.find(Button).prop('clickHandler')();
    expect(wrapper.find('p')).to.have.length(1);
  });

  it('switches the text for the show toggle', () => {
    expect(wrapper.find(Button).prop('children')).to.equal('Show details');
    wrapper.setState({ showContent: true });
    expect(wrapper.find(Button).prop('children')).to.equal('Hide details');
  });
});
