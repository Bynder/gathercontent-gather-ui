import { React, shallow } from '../setup';
import Figure from '../../lib/Figure';
import FigurePreview from '../../lib/Figure/FigurePreview';

describe('Figure', () => {
  let wrapper;

  const props = {
    filename: 'field_notes.txt',
    caption: 'Field notes',
    previewSrc: 'http://preview/src'
  };

  beforeEach(() => {
    wrapper = shallow(
      <Figure {...props}>
        <button type="button">Test action</button>
      </Figure>
    );
  });

  test('renders a file card component', () => {
    expect(wrapper.find('.figure__wrapper')).toHaveLength(1);
  });

  test('renders the correct filename and caption for a thumbnail', () => {
    expect(wrapper.find('.figure__caption').contains(props.caption)).toEqual(
      true
    );
  });

  test('renders 1 action from props.children', () => {
    const actions = wrapper.find('.figure__action');
    expect(actions.length).toEqual(1);
  });

  test('adds a highlighted modifier class', () => {
    wrapper.setProps({ isHighlighted: true });
    expect(wrapper.hasClass('figure--highlighted')).toEqual(true);
  });

  test('adding a added or removed modifier class', () => {
    wrapper.setProps({
      added: true,
      removed: true
    });

    expect(wrapper.hasClass('figure--removed')).toBe(true);
    expect(wrapper.hasClass('figure--added')).toBe(true);
  });

  test('adding loading state modifiers', () => {
    expect(wrapper.hasClass('figure--loading')).toBe(false);

    wrapper.setProps({ loadingProgress: 10 });
    expect(wrapper.hasClass('figure--loading')).toBe(true);
  });

  test('rendering a <FigurePreview /> component', () => {
    wrapper.setProps({ loadingProgress: 10 });
    expect(wrapper.find(FigurePreview).props()).toEqual({
      caption: props.caption,
      previewSrc: props.previewSrc,
      progress: 10,
      fileExtension: 'txt',
      showPreview: false
    });
  });
});
