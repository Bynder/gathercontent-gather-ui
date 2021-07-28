import Container from './Modal';
import Column from './ModalColumn';
import Header from './ModalHeader';
import { ImageHeader } from './ModalImageHeader';
import Footer from './ModalFooter';
import Body from './ModalBody';
import { ModalHeaderNavigation } from './ModalHeaderNavigation';
import { Modal as NewModal } from '../src/components/modal/Modal';

console.log(NewModal, 'lsefrkuhsdkfh')

const Modal = {
  Container,
  Body: NewModal.Body,
  Header,
  ImageHeader,
  Column,
  Footer,
  HeaderWithNavigation: ModalHeaderNavigation
};

export default Modal;
