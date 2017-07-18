import { React, expect, shallow } from '../setup';
import Icon from '../../lib/Icon';
import commentSVG from '../../assets/icons/comment.svg';
import plusSVG from '../../assets/icons/plus.svg';

describe('Icon', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Icon name="comment" />);
  });

  afterEach(() => {});

  it('adds a BEM modifier with the name prop', () => {
    wrapper.setProps({ name: 'comment' });
    expect(wrapper.hasClass('icon--comment')).to.equal(true);
  });

  it('should render the comment icon', () => {
    wrapper.setProps({ name: 'comment' });
    expect(wrapper.find('svg').props()).to.deep.equal(commentSVG().props);
  });

  it('should render the plus icon', () => {
    wrapper.setProps({ name: 'plus' });
    expect(wrapper.find('svg').props()).to.deep.equal(plusSVG().props);
  });

  it('adds a modifier class of icon--hide-text', () => {
    wrapper.setProps({ hideText: true });
    expect(wrapper.hasClass('icon--hide-text')).to.equal(true);
  });
});
