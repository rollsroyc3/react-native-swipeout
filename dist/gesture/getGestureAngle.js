"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getGestureAngle;


/**
 *
 * @param {object} g - gestureState object
 * @see {@link https://facebook.github.io/react-native/docs/panresponder.html }
 * @return {float} - between 0 and 360
 */
function getGestureAngle(g) {
    var startPoint = { x: g.x0, y: g.y0 };
    var endPoint = { x: g.dx, y: g.dy };
    return getAngleBetweenPoints(startPoint, endPoint);
}

// referenced: https://gist.github.com/conorbuck/2606166
function getAngleBetweenPoints() {
    var p1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 0 };
    var p2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { x: 0, y: 0 };
    var returnRadians = arguments[2];

    var angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    if (!returnRadians) {
        angle = angle * 360 / (2 * Math.PI);

        angle = angle < 0 ? angle + 360 : angle;
    }
    return angle;
}