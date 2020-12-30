import React, { Component } from "react";

const STYLE = {
  textAlign: "center",
  Color: "#000000",
  borderTop: "solid 1px #dddee2",
  borderBottom: "solid 1px #dddee2",
  backgroundColor: "#ffffff",
};


const ACTIVE_STYLE = {
  borderTop: "solid 1px #007df9",
  borderBottom: "solid 1px #007df9",
  textAlign: "center",
  Color: "#000000",
  backgroundColor: "#007df9",
};

const RIGHT_STYLE = {
  borderLeft: "solid 1px #dddee2",
  borderTopLeftRadius: 8,
  borderBottomLeftRadius: 8,
};
const LEFT_STYLE = {
  borderRight: "solid 1px #dddee2",
  borderTopRightRadius: 8,
  borderBottomRightRadius: 8,
};
const TEXT_STYLE = {
  fontFamily: "YekanBakhFaNum",
  fontSize: "16px",
  fontWeight: 500,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.56,
  letterSpacing: "normal",
  textAlign: "center",
  outline: 0,
  color: "#7b7e8e",
};

const TEXT_HOVER = {
  color: "#ffffff",
};
class SwitchButton extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  HandleClicked = (isActive) => {
    let { onClick } = this.props;
    console.log(isActive);
    onClick(isActive);
  };
  render() {
    let { hover } = this.state;
    let { posation, children, width, height, active, onClick, id,isHaveBorder} = this.props;
    let style;
    let textStyle;

    if (hover && !active) {
      style = STYLE;
      textStyle = TEXT_STYLE;
    } else if (active && posation === "right") {
      style = ACTIVE_STYLE;
      textStyle = Object.assign({}, TEXT_STYLE, TEXT_HOVER, {
        borderLeft: "solid 1px #007df9",
      });
    } else if (active && posation === "left") {
      style = ACTIVE_STYLE;
      textStyle = Object.assign({}, TEXT_STYLE, TEXT_HOVER, {
        borderRight: "solid 1px #007df9",
      });
    } else if (active && posation === "center") {
      style = ACTIVE_STYLE;
      textStyle = Object.assign({}, TEXT_STYLE, TEXT_HOVER);
    } else {
      style = STYLE;
      textStyle = TEXT_STYLE;
    }
    if (posation === "right") style = Object.assign({}, style, RIGHT_STYLE);
    else if (posation === "left") style = Object.assign({}, style, LEFT_STYLE);
    
    style.width = width;
    style.height = height;
    style = Object.assign({}, style, textStyle);
    isHaveBorder
      ? (style = Object.assign({}, style, {}))
      : style.borderTop = "solid 1px transparent";
         isHaveBorder
           ? (style = Object.assign({}, style, {}))
           : (style.borderBottom = "solid 1px transparent");
         isHaveBorder
           ? (style = Object.assign({}, style, {}))
           : (style.borderLeft = "solid 1px transparent");
         isHaveBorder
           ? (style = Object.assign({}, style, {}))
           : (style.borderRight = "solid 1px transparent");

    return (
      <div
        style={style}
        onMouseEnter={(e) => this.setState({ hover: true })}
        onMouseLeave={(e) => this.setState({ hover: false })}
        onClick={() => onClick(id, children.props.children)}
        // style={textStyle}
      >
        {children}
      </div>
    );
  }
}
export default SwitchButton;
