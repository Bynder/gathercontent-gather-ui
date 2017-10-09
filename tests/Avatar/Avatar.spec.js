import { React, expect, shallow } from '../setup';
import { Avatar } from '../../lib';

describe('AvatarGroup', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Avatar initials="AE" name="Angus Edwardson" isHighlighted isOffline />
    );
  });

  afterEach(() => {});

  it('adds a highlighted BEM modifier', () => {
    expect(wrapper.hasClass('avatar--highlighted')).to.be.true();
  });

  it('adds an offline BEM modifier', () => {
    expect(wrapper.hasClass('avatar--offline')).to.be.true();
  });

  it('renders an avatar image', () => {
    expect(wrapper.find('img')).to.have.length(0);
    wrapper.setProps({ url: 'url/to/avatar' });
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('renders the users initials', () => {
    expect(wrapper.text()).to.equal('AE');
  });

  it('adds a box shadow based on the colour prop', () => {
    expect(wrapper.prop('style')).to.deep.equal({});
    wrapper.setProps({ colour: 'red' });
    expect(wrapper.prop('style')).to.deep.equal({
      boxShadow: `0 0 0 2px white, 0 0 0 3px red, 0 0 0 5px white`
    });
  });
});
