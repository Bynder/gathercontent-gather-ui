import { React, expect, shallow } from '../setup';
import Icon from '../../lib/Icon';
import commentSVG from '../../assets/icons/comment.svg';
import plusCircleSVG from '../../assets/icons/plus-circle.svg';
import tickSVG from '../../assets/icons/tick.svg';

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
    wrapper.setProps({ name: 'plusCircle' });
    expect(wrapper.find('svg').props()).to.deep.equal(plusCircleSVG().props);
  });

  it('should render the tick icon', () => {
    wrapper.setProps({ name: 'tick' });
    expect(wrapper.find('svg').props()).to.deep.equal(tickSVG().props);
  });

  it('adds a modifier class of icon--hide-text', () => {
    wrapper.setProps({ hideText: true });
    expect(wrapper.hasClass('icon--hide-text')).to.equal(true);
  });

  it('only renders icon__text when props.text has been set', () => {
    expect(wrapper.find('.icon__text')).to.have.length(0);
    wrapper.setProps({ text: 'hello world' });
    expect(wrapper.find('.icon__text')).to.have.length(1);
    expect(wrapper.find('.icon__text').text()).equal('hello world');
  });

  it('adds a modifier class of icon--interactive', () => {
    wrapper.setProps({ isInteractive: true });
    expect(wrapper.hasClass('icon--interactive')).to.equal(true);
  });

  it('adds a modifier class of icon--fill-override', () => {
    wrapper.setProps({ name: 'caret' });
    expect(wrapper.hasClass('icon--fill-override')).to.equal(true);
  });

  it('adds a modifier class of icon--fill-override-alt', () => {
    wrapper.setProps({ name: 'comment' });
    expect(wrapper.hasClass('icon--fill-override-alt')).to.equal(true);
  });

  it('adds a size modifier class', () => {
    wrapper.setProps({ size: 'micro' });
    expect(wrapper.hasClass('icon--micro')).to.equal(true);

    wrapper.setProps({ size: 'small' });
    expect(wrapper.hasClass('icon--small')).to.equal(true);

    wrapper.setProps({ size: 'minor' });
    expect(wrapper.hasClass('icon--minor')).to.equal(true);
  });
});
