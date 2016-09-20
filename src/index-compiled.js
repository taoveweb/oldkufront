'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

require('./styles/styles.scss');

require('./styles/css/ionicons.min.css');

var _reactRouterRedux = require('react-router-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/default */

require('./favicon.ico'); // Tell webpack to load favicon.ico
// Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
// Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.


var store = (0, _configureStore2.default)();

// Create an enhanced history that syncs navigation events with the store
var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_reactRouter.Router, { history: history, routes: _routes2.default })
), document.getElementById('app'));

//# sourceMappingURL=index-compiled.js.map