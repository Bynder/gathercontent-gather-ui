import { Modal } from '../../lib';
import ModalContainer from '../../lib/Modal/Modal';
import ModalHeader from '../../lib/Modal/ModalHeader';
import ModalFooter from '../../lib/Modal/ModalFooter';
import ModalBody from '../../lib/Modal/ModalBody';
import ModalColumn from '../../lib/Modal/ModalColumn';

describe('Modal', () => {
  test('exposes a Modal.Container component', () => {
    expect(Modal.Container).toEqual(ModalContainer);
  });

  test('exposes a Modal.Header component', () => {
    expect(Modal.Header).toEqual(ModalHeader);
  });

  test('exposes a Modal.Body component', () => {
    expect(Modal.Body).toEqual(ModalBody);
  });

  test('exposes a Modal.Column component', () => {
    expect(Modal.Column).toEqual(ModalColumn);
  });

  test('exposes a Modal.Footer component', () => {
    expect(Modal.Footer).toEqual(ModalFooter);
  });
});
