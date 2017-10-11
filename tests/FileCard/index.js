import { React, expect, sinon, shallow } from '../setup';
import FileCard from '../../lib/FileCard';

describe('FileCard', () => {
  let wrapper;
  let randomSpy;
  let sinonClock;

  const props = {
    filename: 'field_notes.txt',
    label: 'Field notes',
    previewSrc:
      'https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922'
  };

  beforeEach(() => {
    sinonClock = sinon.useFakeTimers();
    randomSpy = sinon.stub(Math, `random`, () => 0.5);
    wrapper = shallow(
      <FileCard {...props}>
        <button>Test action</button>
      </FileCard>
    );
  });

  afterEach(() => {
    sinonClock.restore();
    randomSpy.restore();
  });

  it('does not update the state when the image fails to load 5 times', () => {
    wrapper.find('img').prop('onError')();
    sinonClock.tick(5000);

    expect(wrapper.state()).to.deep.equal({
      imageCheckCounter: 1,
      backgroundImage: `${props.previewSrc}?rand=0.05`,
      disabled: false,
      imageHasLoaded: false
    });

    wrapper.find('img').prop('onError')();
    sinonClock.tick(5000);
    expect(wrapper.state().imageCheckCounter).to.equal(2);

    wrapper.find('img').prop('onError')();
    sinonClock.tick(5000);
    wrapper.find('img').prop('onError')();
    sinonClock.tick(5000);
    wrapper.find('img').prop('onError')();
    sinonClock.tick(5000);
    expect(wrapper.state().imageCheckCounter).to.equal(5);
    wrapper.find('img').prop('onError')();
    sinonClock.tick(5000);

    expect(wrapper.state()).to.deep.equal({
      imageCheckCounter: 5,
      backgroundImage: `${props.previewSrc}?rand=0.05`,
      disabled: false,
      imageHasLoaded: false
    });
  });

  it('updates the state when image fails to load', () => {
    wrapper.find('img').prop('onError')();
    sinonClock.tick(5000);
    expect(wrapper.state()).to.deep.equal({
      imageCheckCounter: 1,
      backgroundImage: `${props.previewSrc}?rand=0.05`,
      disabled: false,
      imageHasLoaded: false
    });
  });

  it('updates the state when the image has loaded', () => {
    expect(wrapper.state().imageHasLoaded).to.equal(false);
    wrapper.find('img').prop('onLoad')();
    expect(wrapper.state().imageHasLoaded).to.equal(true);
  });

  it('does not update the failed imageCheckCounter when the image has loaded', () => {
    expect(wrapper.state()).to.deep.equal({
      imageCheckCounter: 0,
      backgroundImage: props.previewSrc,
      disabled: false,
      imageHasLoaded: false
    });

    wrapper.find('img').prop('onError')();
    sinonClock.tick(5000);
    expect(wrapper.state().imageCheckCounter).to.equal(1);

    wrapper.find('img').prop('onLoad')();
    expect(wrapper.state().imageHasLoaded).to.equal(true);
  });

  it('renders a file card component', () => {
    expect(wrapper.find('.file-card__wrapper')).to.have.length(1);
  });

  it('renders an element with the correct image src', () => {
    expect(wrapper.find('img').props().src).to.equal(props.previewSrc);
  });

  it('renders the correct filename and label for a thumbnail', () => {
    expect(wrapper.find('.file-card__label').contains(props.label)).to.equal(
      true
    );
  });

  it('renders 1 action from props.children', () => {
    const actions = wrapper.find('.file-card__action');
    expect(actions.length).to.equal(1);
  });

  it('adds a highlighted modifier class', () => {
    wrapper.setProps({ isHighlighted: true });
    expect(wrapper.hasClass('file-card--highlighted')).to.equal(true);
  });

  it('renders the file format extension as the title and adds a modifier', () => {
    wrapper.setProps({ previewSrc: '' });
    expect(wrapper.find('.file-card__title').contains('txt')).to.equal(true);
  });
});
