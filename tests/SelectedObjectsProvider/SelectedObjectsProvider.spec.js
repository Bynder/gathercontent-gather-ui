import { mount } from 'enzyme';
import { React, TestUtils } from '../setup';
import { SelectedObjectsProvider, SelectedObjectsContext } from '../../lib';

describe('SelectedObjectsProvider', () => {
  let wrapper;
  let childSpy;

  beforeEach(() => {
    childSpy = jest.fn();
    wrapper = mount(
      <SelectedObjectsProvider>
        <SelectedObjectsContext.Consumer>
          {context => childSpy(context)}
        </SelectedObjectsContext.Consumer>
      </SelectedObjectsProvider>
    );
  });

  it('appends a selected id', () => {
    const context = childSpy.mock.calls[0][0];

    TestUtils.act(() => {
      context.updateSelected('7');
    });

    const resultingContext = childSpy.mock.calls[1][0];

    expect(resultingContext.selected).toEqual(['7']);
    expect(resultingContext.lastInteracted).toEqual('7');

    // context.updateSelected('7');
    // context = childSpy.mock.calls[2][0];
    // expect(context.selected).toEqual([]);
    // expect(context.lastInteracted).toEqual('7');
  });

  it('removes a selected id if it is already selected', () => {
    const context = childSpy.mock.calls[0][0];

    TestUtils.act(() => {
      context.updateSelected('7');
    });

    TestUtils.act(() => {
      context.updateSelected('7');
    });

    const resultingContext = childSpy.mock.calls[2][0];

    console.log(childSpy.mock.calls);

    expect(resultingContext.selected).toEqual([]);
    expect(resultingContext.lastInteracted).toEqual('7');
  });

  //
  it('sets multiple selected ids', () => {
    const context = childSpy.mock.calls[0][0];

    TestUtils.act(() => {
      context.selectMultiple(['7', '8', '9', '10']);
    });

    const resultingContext = childSpy.mock.calls[1][0];

    expect(resultingContext.selected).toEqual(['7', '8', '9', '10']);

    // expect(wrapper.state('selected')).to.deep.equal([]);
    // expect(wrapper.state('lastInteracted')).to.deep.equal(null);
    // wrapper.instance().selectMultiple(['7', '8', '9', '10']);
    // expect(wrapper.state('selected')).to.deep.equal(['7', '8', '9', '10']);
    // expect(wrapper.state('lastInteracted')).to.deep.equal(null);
    // wrapper.instance().selectMultiple(['7', '5', '3', '1'], '3');
    // expect(wrapper.state('selected')).to.deep.equal([
    //   '7',
    //   '8',
    //   '9',
    //   '10',
    //   '5',
    //   '3',
    //   '1'
    // ]);
    // expect(wrapper.state('lastInteracted')).to.deep.equal('3');
  });
  //
  // it('deselects multiple ids', () => {
  //   wrapper.instance().selectMultiple(['7', '8', '9', '10', '5', '3', '1']);
  //   wrapper.instance().deselectMultiple(['8', '9', '10', '1'], '1');
  //   expect(wrapper.state('selected')).to.deep.equal(['7', '5', '3']);
  //   expect(wrapper.state('lastInteracted')).to.deep.equal('1');
  // });
  //
  // it('clears everything', () => {
  //   wrapper
  //     .instance()
  //     .selectMultiple(['7', '8', '9', '10', '5', '3', '1'], '10');
  //   wrapper.instance().clear();
  //   expect(wrapper.state('selected')).to.deep.equal([]);
  //   expect(wrapper.state('lastInteracted')).to.deep.equal(null);
  // });
});
