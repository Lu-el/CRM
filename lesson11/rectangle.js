'use strict';

const rectangle = {
  _width: 5,
  _height: 5,

  set width(sm) {
    if (Number.isNaN(+sm)) {
      return;
    } else {
      this._width = +sm;
    }
  },

  set height(sm) {
    if (Number.isNaN(+sm)) {
      return;
    } else {
      this._height = +sm;
    }
  },

  get perimetr() {
    return `${this._width * 2 + this._height * 2}см`;
  },

  get square() {
    return `${this._width * this._height}см`;
  },
};

