"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidHorizontalGestureAngle;

var _inRange = require("lodash/inRange");

var _inRange2 = _interopRequireDefault(_inRange);

var _index = require("../constants/index");

var _getGestureAngle = require("./getGestureAngle");

var _getGestureAngle2 = _interopRequireDefault(_getGestureAngle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {object} g - gestureState object
 * @see {@link https://facebook.github.io/react-native/docs/panresponder.html }
 * @return {bool}
 */
function isValidHorizontalGestureAngle(g) {
  var gestureAngle = (0, _getGestureAngle2.default)(g);
  var isLeftRange = (0, _inRange2.default)(gestureAngle, _index.LEFT_GESTURE_ANGLE_RANGE.MIN, _index.LEFT_GESTURE_ANGLE_RANGE.MAX + 1);
  var isRightRange = (0, _inRange2.default)(gestureAngle, _index.RIGHT_GESTURE_ANGLE_RANGE.MIN1, _index.RIGHT_GESTURE_ANGLE_RANGE.MAX1 + 1) || (0, _inRange2.default)(gestureAngle, _index.RIGHT_GESTURE_ANGLE_RANGE.MIN2, _index.RIGHT_GESTURE_ANGLE_RANGE.MAX2 + 1);

  return isLeftRange || isRightRange;
}