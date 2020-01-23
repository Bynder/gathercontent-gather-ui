import React, { Fragment } from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { ItemInput } from '../ItemInput';

const PLACEHOLDER_TEXT = 'Enter an email';

const checker = {
  warning: 'This is not a email! (of a very specific type)',
  regex: /[a-z]*@[a-z]*.com/
};

const renderComponent = () => {
  return render(
    <Fragment>
      <ItemInput placeholder={PLACEHOLDER_TEXT} checker={checker} />
    </Fragment>
  );
};

const isNodeInPill = node => {
  if (!node) {
    return false;
  }
  if (node.className.includes('pill')) {
    return true;
  }

  return isNodeInPill(node.parentNode);
};

describe('ItemInput', () => {
  afterEach(() => {
    cleanup();
  });

  it('creates a item containing text after entering test and pressing space', () => {
    const { getByPlaceholderText, getByText } = renderComponent();

    const EMAIL = 'alex@gmail.com';
    const inputElement = getByPlaceholderText(PLACEHOLDER_TEXT);
    fireEvent.change(inputElement, { target: { value: `${EMAIL} ` } });

    const itemElement = getByText(EMAIL);
    expect(isNodeInPill(itemElement)).toBe(true);
  });

  it('creates an item containing text after entering text and pressing enter', () => {
    const { getByPlaceholderText, getByText, container } = renderComponent();

    const EMAIL = 'alex@gmail.com';
    const inputElement = getByPlaceholderText(PLACEHOLDER_TEXT);
    fireEvent.change(inputElement, { target: { value: EMAIL } });

    const ENTER_KEY_CODE = 13;
    fireEvent.keyDown(container, { keyCode: ENTER_KEY_CODE });

    const itemElement = getByText(EMAIL);
    expect(isNodeInPill(itemElement)).toBe(true);
  });

  it('handles adding mutliple items', () => {
    const { getByPlaceholderText, getByText } = renderComponent();

    const emails = [
      'alex@gmail.com',
      'amee@gmail.com',
      'david@gmail.com',
      'kyle@gmail.com'
    ];
    const inputElement = getByPlaceholderText(PLACEHOLDER_TEXT);

    emails.forEach(email =>
      fireEvent.change(inputElement, { target: { value: `${email} ` } })
    );

    emails.forEach(email => {
      const itemElement = getByText(email);
      expect(isNodeInPill(itemElement)).toBe(true);
    });
  });

  it('deletes an item when the X button is pressed', async () => {
    const {
      getByPlaceholderText,
      queryByText,
      getAllByTitle
    } = renderComponent();

    const emails = [
      'alex@gmail.com',
      'amee@gmail.com',
      'david@gmail.com',
      'kyle@gmail.com'
    ];
    const inputElement = getByPlaceholderText(PLACEHOLDER_TEXT);

    emails.forEach(email =>
      fireEvent.change(inputElement, { target: { value: `${email} ` } })
    );

    const itemCrossButtons = getAllByTitle('Cross Icon');
    fireEvent.click(itemCrossButtons[0]);
    fireEvent.click(itemCrossButtons[2]);

    expect(queryByText(emails[0])).toBeNull();
    expect(queryByText(emails[2])).toBeNull();
  });

  it('displays a warning when an items text does not match the regex macher defined in the checker prop', () => {
    const { getByPlaceholderText, getByText } = renderComponent();

    const emails = ['alex@gmail.com', 'hello'];
    const inputElement = getByPlaceholderText(PLACEHOLDER_TEXT);

    emails.forEach(email =>
      fireEvent.change(inputElement, { target: { value: `${email} ` } })
    );

    const incorrectEmailItem = getByText(emails[1]);
    expect(
      incorrectEmailItem.parentNode.className.includes(
        'item-input__item--warning'
      )
    ).toBe(true);

    fireEvent.mouseEnter(incorrectEmailItem);
    getByText(checker.warning);
  });
});
