import React, { Component } from "react";
import SwitchButton from "./SwitchButton";

class MultiButton extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedId: 0 };
  }
  handleClick = (id, selectedText) => {
    let { onClick } = this.props;
    onClick(id, selectedText);
    this.setState({ selectedId: id });
  };
  render() {
    let { children, height, width, isHaveBorder } = this.props;
 let { selectedId } = this.state;
    let posation = "right";
    let length = children.length;
    let buttons = [];

    for (let index = 0; index < length; index++) {
      if (index === 0) posation = "right";
      else if (index === length - 1) posation = "left";
      else posation = "center";
      //actived[index] = false;
      buttons[index] =
        index === selectedId ? (
          <SwitchButton
            posation={posation}
            id={index}
            isHaveBorder={isHaveBorder}
            height={height}
            width={width}
            active={true}
            onClick={(id, selectedText) => this.handleClick(id, selectedText)}
          >
            {children[index]}
          </SwitchButton>
        ) : (
          <SwitchButton
            posation={posation}
            isHaveBorder={isHaveBorder}
            id={index}
            height={height}
            width={width}
            active={false}
            onClick={(id, selectedText) => this.handleClick(id, selectedText)}
          >
            {children[index]}
          </SwitchButton>
        );
    }
    return (
      <div style={{ width: "98%", display: "flex", direction: "ltr" }}>
        {buttons}
      </div>
    );
  }
}

export default MultiButton;
