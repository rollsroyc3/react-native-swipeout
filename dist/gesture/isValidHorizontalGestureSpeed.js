"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidHorizontalGestureSpeed;

var _inRange = require("lodash/inRange");

var _inRange2 = _interopRequireDefault(_inRange);

var _index = require("../constants/index");

var _getGestureAngle = require("./getGestureAngle");

var _getGestureAngle2 = _interopRequireDefault(_getGestureAngle);

var _isValidVelocity = require("./isValidVelocity");

var _isValidVelocity2 = _interopRequireDefault(_isValidVelocity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {object} g - gestureState object
 * @param {float} [thresholdOverride] - value to use instead of the quick gesture constant
 * @return {bool}
 */
function isValidHorizontalGestureSpeed(g, thresholdOverride) {
  // the closer we are to horizontal, decrease the velocity threshold, for simplicity sake making it a static range
  var gestureAngle = (0, _getGestureAngle2.default)(g);
  var insideLeftSlop = (0, _inRange2.default)(gestureAngle, 180 - _index.VELOCITY_THRESHOLD_ANGLE_SLOP, 180 + _index.VELOCITY_THRESHOLD_ANGLE_SLOP + 1);
  var insideRightSlop = (0, _inRange2.default)(gestureAngle, 360 - _index.VELOCITY_THRESHOLD_ANGLE_SLOP, 361) || (0, _inRange2.default)(gestureAngle, 0, _index.VELOCITY_THRESHOLD_ANGLE_SLOP + 1);
  var baseThreshold = thresholdOverride || _index.QUICK_GESTURE_VELOCITY_THRESHOLD;
  var velocityThreshold = baseThreshold * (insideLeftSlop || insideRightSlop ? _index.VELOCITY_THRESHOLD_SLOP_MOD : 1);
  var vx = g.vx;

  return (0, _isValidVelocity2.default)(vx, velocityThreshold);
}