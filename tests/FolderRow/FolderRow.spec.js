import { cleanup, render, fireEvent } from '@testing-library/react';
import { React } from '../setup';
import { FolderRow } from '../../lib';
import { FolderRowName } from '../../lib/FolderRow/FolderRowName';

describe('FolderRow', () => {
  const renderWrapper = (ui, props = {}) =>
    render(<FolderRow {...props}>{ui}</FolderRow>);

  afterEach(() => {
    cleanup();
  });

  test('rendering folder name', () => {
    const { getByText } = renderWrapper(() => (
      <FolderRow.Name>Folder name</FolderRow.Name>
    ));

    expect(getByText(/folder name/i)).toBeInTheDocument();
  });

  test('showing the toggle action', () => {
    const { getByTitle } = renderWrapper(() => (
      <FolderRow.Name>Folder name</FolderRow.Name>
    ));

    expect(
      getByTitle(FolderRowName.defaultProps.toggleTitle)
    ).toBeInTheDocument();
  });

  test('hiding the toggle action', () => {
    const { queryByTitle } = renderWrapper(() => (
      <FolderRow.Name showToggle={false}>Folder name</FolderRow.Name>
    ));

    expect(queryByTitle(FolderRowName.defaultProps.toggleTitle)).toBeNull();
  });

  test('rendering the folder contents', () => {
    const { getByText, queryByText, getByTitle } = renderWrapper(
      (show, setShow) => (
        <FolderRow.Inner>
          <FolderRow.Name show={show} setShow={setShow}>
            folder name
          </FolderRow.Name>

          <FolderRow.Contents show={show}>contents</FolderRow.Contents>
        </FolderRow.Inner>
      )
    );

    expect(queryByText(/contents/i)).toBeNull();
    fireEvent.click(getByTitle(FolderRowName.defaultProps.toggleTitle));
    expect(getByText(/contents/i)).toBeInTheDocument();
  });
});
