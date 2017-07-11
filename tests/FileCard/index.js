import { React, expect, sinon, shallow } from '../setup';
import FileCard from '../../lib/FileCard';

describe('FileCard', () => {
  let wrapper;

  const NO_PREVIEW_CLASS = '.file-card__thumbnail--no-preview';
  const ACTION_DELETE_CLASS = '.file-card__action--delete';

  const props = {
    hasComments: true,
    type: 'text',
    filename: 'field_notes.txt',
    label: 'Field notes',
    image: 'https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922',
    actions: {},
  };

  beforeEach(() => {
    wrapper = shallow(
      <FileCard {...props} />,
    );
  });

  it('renders a file card component', () => {
    expect(wrapper.find('.file-card__wrapper')).to.have.length(1);
  });

  it('renders an element with the correct background-image', () => {
    expect(wrapper.find('.file-card__thumbnail')).to.have.length(1);
    expect(wrapper.find('.file-card__thumbnail').props().style.backgroundImage).to.equal(`url(${props.image})`);
  });

  it('renders the correct filename and label for a thumbnail', () => {
    expect(wrapper.find('.file-card__label').contains(props.filename)).to.equal(true);
  });

  it('non-image types contain specific properties', () => {
    wrapper.setProps({ image: null });
    const actions = wrapper.find('.file-card__action');
    expect(wrapper.find(NO_PREVIEW_CLASS).length).to.equal(1);
    expect(actions.length).to.equal(3);
  });

  it('contains 4 action types for image types', () => {
    wrapper.setProps({ type: 'image' });
    const actions = wrapper.find('.file-card__action');
    expect(actions.length).to.equal(4);
  });

   it('does not render the delete action based on permissions', () => {
     wrapper.setProps({ showDelete: false });
     const deleteWrapper = wrapper.find(ACTION_DELETE_CLASS);
     expect(deleteWrapper.length).to.equal(0);
  });

});
