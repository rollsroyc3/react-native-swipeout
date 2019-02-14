"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (g) {
  var dx = g.dx;

  return Math.abs(dx) > _index.GESTURE_DISTANCE_THRESHOLD;
};

var _index = require("../constants/index");