"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isValidVelocity;
function isValidVelocity(v, threshold) {
    return v ? Math.abs(v) >= threshold : false;
};