import React, { Fragment } from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { PillInput } from '../PillInput/PillInput';

const PLACEHOLDER_TEXT = 'Enter an email';

const checker = {
  warning: 'This is not a email! (of a very specific type)',
  regex: /^[a-z]*@[a-z]*.com$/
};

const renderComponent = props => {
  return render(
    <Fragment>
      <PillInput placeholder={PLACEHOLDER_TEXT} checker={checker} {...props} />
    </Fragment>
  );
};

const isNodeInPill = node => {
  if (!node) {
    return false;
  }

  if (node.className && node.className.includes('pill ')) {
    return true;
  }

  return isNodeInPill(node.parentNode);
};

const isValidPill = pill => {
  expect(pill.parentNode.className.includes('bg-red-95')).toBe(false);
};

const isInvalidPill = pill => {
  expect(pill.parentNode.className.includes('bg-red-95')).toBe(true);
};

describe('PillInput', () => {
  afterEach(() => {
    cleanup();
  });

  describe('Initialising Pills', () => {
    const initialPills = [
      { name: '123', id: '69b5ef2e-06a0-4aaf-9895-2da968d10bac' },
      { name: 'pill@test.com', id: '8aa15ee5-95ab-42ec-af56-1cfba2ef0358' }
    ];
    const { getByText } = renderComponent({ initialPills });

    const firstPillElement = getByText(initialPills[0].name);
    expect(isNodeInPill(firstPillElement)).toBe(true);

    const secondPillElement = getByText(initialPills[1].name);
    expect(isNodeInPill(secondPillElement)).toBe(true);

    isInvalidPill(getByText(initialPills[0].name));
    isValidPill(getByText(initialPills[1].name));
  });

  describe('Creating pills', () => {
    it('creates a pill containing text after entering text and pressing space', () => {
      const { getByPlaceholderText, getByText } = renderComponent();

      const EMAIL = 'alex@gmail.com';
      const inputElement = getByPlaceholderText(PLACEHOLDER_TEXT);
      fireEvent.change(inputElement, { target: { value: `${EMAIL} ` } });

      const pillElement = getByText(EMAIL);
      expect(isNodeInPill(pillElement)).toBe(true);

      // extra check to make sure isNodeInPill is working
      expect(isNodeInPill(inputElement)).toBe(false);
    });

    it('creates a pill containing text after entering text and pressing enter', () => {
      const { getByPlaceholderText, getByText } = renderComponent();

      const EMAIL = 'alex@gmail.com';
      const inputElement = getByPlaceholderText(PLACEHOLDER_TEXT);
      fireEvent.change(inputElement, { target: { value: EMAIL } });

      const ENTER_KEY_CODE = 13;
      fireEvent.keyDown(inputElement, { keyCode: ENTER_KEY_CODE });

      const pillElement = getByText(EMAIL);
      expect(isNodeInPill(pillElement)).toBe(true);
    });

    it('creates a pill containing text after entering text and blurring the input', () => {
      const { getByPlaceholderText, getByText } = renderComponent();

      const EMAIL = 'alex@gmail.com';
      const inputElement = getByPlaceholderText(PLACEHOLDER_TEXT);
      fireEvent.change(inputElement, { target: { value: EMAIL } });

      fireEvent.blur(inputElement);

      const pillElement = getByText(EMAIL);
      expect(isNodeInPill(pillElement)).toBe(true);
    });

    it('handles adding mutliple pills', () => {
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
        const pillElement = getByText(email);
        expect(isNodeInPill(pillElement)).toBe(true);
      });
    });

    it('handles pasting pills into the input', () => {
      const {
        getByPlaceholderText,
        getByText,
        getByDisplayValue
      } = renderComponent();

      const emails = [
        'alex@gmail.com',
        'amee@gmail.com',
        'david@gmail.com',
        'kyle@gmail.com'
      ];
      const inputElement = getByPlaceholderText(PLACEHOLDER_TEXT);

      const pastedEmails = emails.join(' ');
      fireEvent.change(inputElement, { target: { value: pastedEmails } });

      const indexOfLastEmail = emails.length - 1;
      const expectedPills = emails.slice(0, indexOfLastEmail);
      expectedPills.forEach(email => {
        const pillElement = getByText(email);
        expect(isNodeInPill(pillElement)).toBe(true);
      });

      const expectedInput = emails.slice(indexOfLastEmail)[0];
      expect(isNodeInPill(getByDisplayValue(expectedInput))).toBe(false);
    });
  });

  it('deletes a pill when the X button is pressed', async () => {
    const {
      getByPlaceholderText,
      queryByText,
      getAllByTitle,
      getByText
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

    const pillCrossButtons = getAllByTitle('Cross Icon');
    fireEvent.click(pillCrossButtons[0]);
    fireEvent.click(pillCrossButtons[2]);

    expect(queryByText(emails[0])).toBeNull();
    expect(getByText(emails[1]));
    expect(queryByText(emails[2])).toBeNull();
    expect(getByText(emails[3]));
  });

  it('deletes the last pill when the backspace key is pressed and there is no input', async () => {
    const { getByPlaceholderText, queryByText, getByText } = renderComponent();

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

    fireEvent.change(inputElement, { target: { value: 's' } });

    const BACKSPACE_KEY_CODE = 8;
    fireEvent.keyDown(inputElement, { keyCode: BACKSPACE_KEY_CODE });

    expect(getByText(emails[0]));
    expect(getByText(emails[1]));
    expect(getByText(emails[2]));
    expect(getByText(emails[3]));

    fireEvent.change(inputElement, { target: { value: '' } });

    fireEvent.keyDown(inputElement, { keyCode: BACKSPACE_KEY_CODE });

    expect(getByText(emails[0]));
    expect(getByText(emails[1]));
    expect(getByText(emails[2]));
    expect(queryByText(emails[3])).toBeNull();
  });

  describe('Pill checker', () => {
    it('displays a warning when a pills text does not match the regex macher defined in the checker prop', () => {
      const { getByPlaceholderText, getByText } = renderComponent();

      const emails = ['alex@gmail.com', 'hello'];
      const inputElement = getByPlaceholderText(PLACEHOLDER_TEXT);

      emails.forEach(email =>
        fireEvent.change(inputElement, { target: { value: `${email} ` } })
      );

      const incorrectEmailPill = getByText(emails[1]);
      isInvalidPill(incorrectEmailPill);
      fireEvent.mouseEnter(incorrectEmailPill);
      getByText(checker.warning);
    });

    it('does not display a warning if the pills text matches the regex matcher defined in the checker prop', () => {
      const {
        getByPlaceholderText,
        getByText,
        queryByText
      } = renderComponent();

      const email = 'alex@gmail.com';
      const inputElement = getByPlaceholderText(PLACEHOLDER_TEXT);

      fireEvent.change(inputElement, { target: { value: `${email} ` } });

      const correctEmailPill = getByText(email);
      isValidPill(correctEmailPill);
      fireEvent.mouseEnter(correctEmailPill);
      expect(queryByText(checker.warning)).toBeNull();
    });
  });
});
