'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactRouter.IndexLink,
      { to: '/' },
      _react2.default.createElement('span', { className: 'ion-social-vimeo-outline' }),
      'Home'
    ),
    ' | ',
    _react2.default.createElement(
      _reactRouter.Link,
      { to: '/fuel-savings' },
      'Demo App b'
    ),
    ' | ',
    _react2.default.createElement(
      _reactRouter.Link,
      { to: '/about' },
      'About'
    ),
    _react2.default.createElement('br', null),
    props.children
  );
};

App.propTypes = {
  children: _react.PropTypes.element
};

exports.default = App;

//# sourceMappingURL=App-compiled.js.map