"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// after distance a gesture must move before being considered for validation
var GESTURE_DISTANCE_THRESHOLD = exports.GESTURE_DISTANCE_THRESHOLD = 3;

// what velocity is considered 'quick'
var QUICK_GESTURE_VELOCITY_THRESHOLD = exports.QUICK_GESTURE_VELOCITY_THRESHOLD = 0.15;

// allow the gesture angle to be ± VELOCITY_THRESHOLD_ANGLE_SLOP
// e.g. if a left swipe is within 180 ± VELOCITY_THRESHOLD_ANGLE_SLOP
// than the threshold will be reduced by VELOCITY_THRESHOLD_SLOP_MOD
var VELOCITY_THRESHOLD_ANGLE_SLOP = exports.VELOCITY_THRESHOLD_ANGLE_SLOP = 5;

// the amount to multiply the gesture velocity threshold by if it is within the angle slop
var VELOCITY_THRESHOLD_SLOP_MOD = exports.VELOCITY_THRESHOLD_SLOP_MOD = 0.1;

// velocity comes back different on android, so this value will normalize it with iOS
var ANDROID_TO_IO_VELOCITY_MOD = exports.ANDROID_TO_IO_VELOCITY_MOD = 220000;

var TOTAL_LEFT_ANGLE = 180;
var TOTAL_RIGHT_ANGLE1 = 360;
var TOTAL_RIGHT_ANGLE2 = 0;
var HORIZONTAL_ANGLE_THRESHOLD = 30;
var LEFT_GESTURE_ANGLE_RANGE = exports.LEFT_GESTURE_ANGLE_RANGE = {
    MIN: TOTAL_LEFT_ANGLE - HORIZONTAL_ANGLE_THRESHOLD,
    MAX: TOTAL_LEFT_ANGLE + HORIZONTAL_ANGLE_THRESHOLD
};

var RIGHT_GESTURE_ANGLE_RANGE = exports.RIGHT_GESTURE_ANGLE_RANGE = {
    MIN1: TOTAL_RIGHT_ANGLE1 - HORIZONTAL_ANGLE_THRESHOLD,
    MAX1: TOTAL_RIGHT_ANGLE1,
    MIN2: TOTAL_RIGHT_ANGLE2,
    MAX2: TOTAL_RIGHT_ANGLE2 + HORIZONTAL_ANGLE_THRESHOLD
};

var OPEN_POSITION_THRESHOLD_FACTOR = exports.OPEN_POSITION_THRESHOLD_FACTOR = 0.4;
var CLOSE_POSITION_THRESHOLD_FACTOR = exports.CLOSE_POSITION_THRESHOLD_FACTOR = 0.3;
var MAX_OPEN_THRESHOLD = exports.MAX_OPEN_THRESHOLD = 60;
var OPEN_VELOCITY_THRESHOLD = exports.OPEN_VELOCITY_THRESHOLD = 0.5;
var OPEN_TENSION_THRESHOLD = exports.OPEN_TENSION_THRESHOLD = 30;

exports.default = {
    GESTURE_DISTANCE_THRESHOLD: GESTURE_DISTANCE_THRESHOLD,
    QUICK_GESTURE_VELOCITY_THRESHOLD: QUICK_GESTURE_VELOCITY_THRESHOLD,
    ANDROID_TO_IO_VELOCITY_MOD: ANDROID_TO_IO_VELOCITY_MOD,
    VELOCITY_THRESHOLD_ANGLE_SLOP: VELOCITY_THRESHOLD_ANGLE_SLOP,
    VELOCITY_THRESHOLD_SLOP_MOD: VELOCITY_THRESHOLD_SLOP_MOD,
    LEFT_GESTURE_ANGLE_RANGE: LEFT_GESTURE_ANGLE_RANGE,
    RIGHT_GESTURE_ANGLE_RANGE: RIGHT_GESTURE_ANGLE_RANGE,
    OPEN_POSITION_THRESHOLD_FACTOR: OPEN_POSITION_THRESHOLD_FACTOR,
    CLOSE_POSITION_THRESHOLD_FACTOR: CLOSE_POSITION_THRESHOLD_FACTOR,
    MAX_OPEN_THRESHOLD: MAX_OPEN_THRESHOLD,
    OPEN_VELOCITY_THRESHOLD: OPEN_VELOCITY_THRESHOLD,
    OPEN_TENSION_THRESHOLD: OPEN_TENSION_THRESHOLD
};