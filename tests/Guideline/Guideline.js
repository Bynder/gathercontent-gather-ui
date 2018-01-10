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

  it('defaults to open', () => {
    expect(wrapper.hasClass('is-active')).to.be.true();
  });

  it('toggles an active class', () => {
    wrapper.setState({ showContent: false });
    expect(wrapper.hasClass('is-active')).to.be.false();
  });

  it('sets the showContent state to true', () => {
    wrapper.find(Button).prop('clickHandler')();
    expect(wrapper.find('p')).to.have.length(1);
  });

  it('switches the text for the show toggle', () => {
    expect(wrapper.find(Button).prop('children')).to.equal('Hide details');
    wrapper.setState({ showContent: false });
    expect(wrapper.find(Button).prop('children')).to.equal('Show details');
  });
});
