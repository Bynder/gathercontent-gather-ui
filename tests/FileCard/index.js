import { React, expect, shallow } from '../setup';
import FileCard from '../../lib/FileCard';

describe('FileCard', () => {
  let wrapper;

  const props = {
    filename: 'field_notes.txt',
    label: 'Field notes',
    previewSrc: 'https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922',
  };

  beforeEach(() => {
    wrapper = shallow(
      <FileCard {...props}>
        <button>Test action</button>
      </FileCard>,
    );
  });

  it('renders a file card component', () => {
    expect(wrapper.find('.file-card__wrapper')).to.have.length(1);
  });

  it('renders an element with the correct background-image', () => {
    expect(wrapper.find('.file-card__thumbnail').props().style.backgroundImage).to.equal(`url(${props.previewSrc})`);
  });

  it('renders the correct filename and label for a thumbnail', () => {
    expect(wrapper.find('.file-card__label').contains(props.label)).to.equal(true);
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
