import { React, expect, shallow } from '../setup';
import Icon from '../../lib/Icon';
import commentSVG from '../../assets/icons/comment.svg';
import plusCircleSVG from '../../assets/icons/plus-circle.svg';
import tickSVG from '../../assets/icons/tick.svg';
import trashSVG from '../../assets/icons/trash.svg';
import downloadSVG from '../../assets/icons/download.svg';
import fullScreenSVG from '../../assets/icons/fullscreen.svg';

describe('Icon', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Icon
        className="custom-icon-class"
        name="comment"
      />,
    );
  });

  afterEach(() => {});

  it('adds a className prop to classNames', () => {
    expect(wrapper.hasClass('custom-icon-class')).to.equal(true);
  });

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

  it('should render the trash icon', () => {
    wrapper.setProps({ name: 'trash' });
    expect(wrapper.find('svg').props()).to.deep.equal(trashSVG().props);
  });

  it('should render the download icon', () => {
    wrapper.setProps({ name: 'download' });
    expect(wrapper.find('svg').props()).to.deep.equal(downloadSVG().props);
  });

  it('should render the full screen icon', () => {
    wrapper.setProps({ name: 'fullScreen' });
    expect(wrapper.find('svg').props()).to.deep.equal(fullScreenSVG().props);
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
});
