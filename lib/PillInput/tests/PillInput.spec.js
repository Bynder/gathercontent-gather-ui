import React, { Fragment } from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { PillInput } from '../PillInput';

const PLACEHOLDER_TEXT = 'Enter an email';

const checker = {
  warning: 'This is not a email! (of a very specific type)',
  regex: /[a-z]*@[a-z]*.com/
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

describe('PillInput', () => {
  afterEach(() => {
    cleanup();
  });

  describe('Initilising Pills', () => {
    const initialPills = [
      { name: 'Pill1', isValid: true },
      { name: 'Pill2', isValid: true }
    ];
    const { getByText } = renderComponent({ initialPills });

    const firstPillElement = getByText(initialPills[0].name);
    expect(isNodeInPill(firstPillElement)).toBe(true);

    const secondPillElement = getByText(initialPills[1].name);
    expect(isNodeInPill(secondPillElement)).toBe(true);
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
      const { getByPlaceholderText, getByText, container } = renderComponent();

      const EMAIL = 'alex@gmail.com';
      const inputElement = getByPlaceholderText(PLACEHOLDER_TEXT);
      fireEvent.change(inputElement, { target: { value: EMAIL } });

      const ENTER_KEY_CODE = 13;
      fireEvent.keyDown(container, { keyCode: ENTER_KEY_CODE });

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

  describe('Pill checker', () => {
    it('displays a warning when a pills text does not match the regex macher defined in the checker prop', () => {
      const { getByPlaceholderText, getByText } = renderComponent();

      const emails = ['alex@gmail.com', 'hello'];
      const inputElement = getByPlaceholderText(PLACEHOLDER_TEXT);

      emails.forEach(email =>
        fireEvent.change(inputElement, { target: { value: `${email} ` } })
      );

      const incorrectEmailPill = getByText(emails[1]);
      expect(
        incorrectEmailPill.parentNode.className.includes('bg-red-95')
      ).toBe(true);

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
      expect(correctEmailPill.parentNode.className.includes('bg-red-95')).toBe(
        false
      );

      fireEvent.mouseEnter(correctEmailPill);
      expect(queryByText(checker.warning)).toBeNull();
    });
  });
});
