import Container from './Modal';
import Column from './ModalColumn';
import Header from './ModalHeader';
import { ImageHeader } from './ModalImageHeader';
import Footer from './ModalFooter';
import Body from './ModalBody';
import { ModalHeaderNavigation } from './ModalHeaderNavigation';

const Modal = {
  Container,
  Body,
  Header,
  ImageHeader,
  Column,
  Footer,
  HeaderWithNavigation: ModalHeaderNavigation
};

export default Modal;
