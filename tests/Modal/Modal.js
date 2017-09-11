import { expect } from '../setup';
import { Modal } from '../../lib';
import ModalContainer from '../../lib/Modal/Modal';
import ModalHeader from '../../lib/Modal/ModalHeader';
import ModalFooter from '../../lib/Modal/ModalFooter';
import ModalBody from '../../lib/Modal/ModalBody';
import ModalColumn from '../../lib/Modal/ModalColumn';

describe('Modal', () => {
  it('exposes a Modal.Container component', () => {
    expect(Modal.Container).to.deep.equal(ModalContainer);
  });

  it('exposes a Modal.Header component', () => {
    expect(Modal.Header).to.deep.equal(ModalHeader);
  });

  it('exposes a Modal.Body component', () => {
    expect(Modal.Body).to.deep.equal(ModalBody);
  });

  it('exposes a Modal.Column component', () => {
    expect(Modal.Column).to.deep.equal(ModalColumn);
  });

  it('exposes a Modal.Footer component', () => {
    expect(Modal.Footer).to.deep.equal(ModalFooter);
  });
});
