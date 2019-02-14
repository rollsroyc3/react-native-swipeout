'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = applySimpleTension;

var _clamp = require('lodash/clamp');

var _clamp2 = _interopRequireDefault(_clamp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MIN_RESISTANCE = 0.5;

function applySimpleTension(dx) {
    var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
    var stretch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    var resistanceStrength = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.55;

    var absDX = Math.abs(dx);
    if (absDX > threshold) {
        stretch = Math.max(stretch, 1);
        var delta = absDX - threshold;
        var maxLength = threshold * stretch;
        var resistanceBase = MIN_RESISTANCE + (1 - MIN_RESISTANCE) * (0, _clamp2.default)(resistanceStrength, 0, 1);
        var resistanceDelta = 1 - resistanceBase;
        var change = maxLength - threshold;
        var progress = Math.min(delta / change, 1);
        var resistance = resistanceBase + resistanceDelta * progress;
        return (absDX + change * (resistanceDelta * progress) - delta * resistance) * Math.sign(dx);
    }

    return dx;
}