'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isValidHorizontalGesture;

var _isValidGestureDistance = require('./isValidGestureDistance');

var _isValidGestureDistance2 = _interopRequireDefault(_isValidGestureDistance);

var _isValidHorizontalGestureAngle = require('./isValidHorizontalGestureAngle');

var _isValidHorizontalGestureAngle2 = _interopRequireDefault(_isValidHorizontalGestureAngle);

var _isValidHorizontalGestureSpeed = require('./isValidHorizontalGestureSpeed');

var _isValidHorizontalGestureSpeed2 = _interopRequireDefault(_isValidHorizontalGestureSpeed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isValidHorizontalGesture(g) {
    return (0, _isValidGestureDistance2.default)(g) && (0, _isValidHorizontalGestureAngle2.default)(g) && (0, _isValidHorizontalGestureSpeed2.default)(g);
}