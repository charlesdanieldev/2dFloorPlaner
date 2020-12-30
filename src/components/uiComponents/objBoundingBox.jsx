import React, { Component } from "react";
import BaseBox from "./BaseBox";
class ObjBoundingBox extends BaseBox {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BaseBox>
        <div></div>
      </BaseBox>
    );
  }
}

export default ObjBoundingBox;
