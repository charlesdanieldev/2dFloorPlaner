import React, { Component } from 'react';



export default function calcul_snap(event, state) {
  if (event.touches) {
    var touches = event.changedTouches;
    console.log("toto");
    eX = touches[0].pageX;
    eY = touches[0].pageY;
    tactile = true;
  } else {
    eX = event.pageX;
    eY = event.pageY;
  }
  x_mouse = eX * factor - offset.left * factor + originX_viewbox;
  y_mouse = eY * factor - offset.top * factor + originY_viewbox;

  if (state == "on") {
    x_grid = Math.round(x_mouse / grid) * grid;
    y_grid = Math.round(y_mouse / grid) * grid;
  }
  if (state == "off") {
    x_grid = x_mouse;
    y_grid = y_mouse;
  }
  return {
    x: x_grid,
    y: y_grid,
    xMouse: x_mouse,
    yMouse: y_mouse,
  };
}
