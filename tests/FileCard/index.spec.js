import { React, shallow } from '../setup';
import FileCard from '../../lib/FileCard';

describe('FileCard', () => {
  let wrapper;

  const props = {
    filename: 'field_notes.txt',
    label: 'Field notes',
    previewSrc:
      'https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922'
  };

  beforeEach(() => {
    wrapper = shallow(
      <FileCard {...props}>
        <button>Test action</button>
      </FileCard>
    );
  });

  test('renders a file card component', () => {
    expect(wrapper.find('.file-card__wrapper')).toHaveLength(1);
  });

  test('renders an element with the correct background-image', () => {
    expect(
      wrapper.find('.file-card__thumbnail').props().style.backgroundImage
    ).toEqual(`url(${props.previewSrc})`);
  });

  test('renders the correct filename and label for a thumbnail', () => {
    expect(wrapper.find('.file-card__label').contains(props.label)).toEqual(
      true
    );
  });

  test('renders 1 action from props.children', () => {
    const actions = wrapper.find('.file-card__action');
    expect(actions.length).toEqual(1);
  });

  test('adds a highlighted modifier class', () => {
    wrapper.setProps({ isHighlighted: true });
    expect(wrapper.hasClass('file-card--highlighted')).toEqual(true);
  });

  test('renders the file format extension as the title and adds a modifier', () => {
    wrapper.setProps({ previewSrc: '' });
    expect(wrapper.find('.file-card__title').contains('txt')).toEqual(true);
  });

  test('adding a added or removed modifier class', () => {
    wrapper.setProps({
      added: true,
      removed: true
    });

    expect(wrapper.hasClass('file-card--removed')).toBe(true);
    expect(wrapper.hasClass('file-card--added')).toBe(true);
  });

  test('adding a loading state', () => {
    expect(wrapper.hasClass('file-card--loading')).toBe(false);
    wrapper.setProps({ loadingProgress: 10 });
    expect(wrapper.hasClass('file-card--loading')).toBe(true);
    expect(wrapper.find('.file-card__progress').text()).toBe('10%');
  });
});
