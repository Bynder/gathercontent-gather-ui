'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _ModalColumn = require('./ModalColumn');

var _ModalColumn2 = _interopRequireDefault(_ModalColumn);

var _ModalHeader = require('./ModalHeader');

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalFooter = require('./ModalFooter');

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

var _ModalContent = require('./ModalContent');

var _ModalContent2 = _interopRequireDefault(_ModalContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modals = {
  Modal: _Modal2.default,
  ModalContent: _ModalContent2.default,
  ModalHeader: _ModalHeader2.default,
  ModalColumn: _ModalColumn2.default,
  ModalFooter: _ModalFooter2.default
};

exports.default = Modals;