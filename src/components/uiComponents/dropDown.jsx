import React, { Component } from "react";
import CheckImage from "../../assets/check.svg";
const STYLE = {
    height: "100%",
  textAlign: "right !important",
  Color: "#000000",
  padding: "8px 0 0 0",
  backgroundColor: "#ffffff",
};
const HOVERSTYLE = {
  backgroundColor: "#f9f9f9",
};
const ACTIVE_STYLE = {
  textAlign: "center",
  Color: "#000000",
  backgroundColor: "#007df9",
};

const TOP_STYLE = {
  borderTopRightRadius: 8,
  borderTopLeftRadius: 8,
};
const BOTTOM_STYLE = {
  borderBottomLeftRadius: 8,
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
  textAlign: "right",
  outline: 0,
  color: "#7b7e8e",
};

const TEXT_HOVER = {
  color: "#ffffff",
};
class DropDownItem extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  render() {
    let { hover } = this.state;
    let { posation, children, width, height, onClick, id, active } = this.props;
    let style;
    let textStyle;

    if (hover) {
      style = Object.assign({}, STYLE, HOVERSTYLE);
      textStyle = TEXT_STYLE;
    } else {
      style = STYLE;
      textStyle = TEXT_STYLE;
    }
    if (posation === "top") style = Object.assign({}, style, TOP_STYLE);
    else if (posation === "bottom")
      style = Object.assign({}, style, BOTTOM_STYLE);
    style.width = width;
    style.height = height;
    style = Object.assign({}, style, textStyle);

    return (
      <table
        style={style}
        onMouseEnter={(e) => this.setState({ hover: true })}
        onMouseLeave={(e) => this.setState({ hover: false })}
        onClick={() => onClick(id, children.props.children)}
      >
        <tr>
          <td> {children}</td>
          <td style={{ height: "100%", width: 50,textAlign:"center" }}>
            {active ? <img style={{margin: '0px 0px 2px 0'}} alt="" src={CheckImage}></img> : null}
          </td>
        </tr>
      </table>
    );
  }
}
export default DropDownItem;
