import React, { Component } from "react";
import * as SharedStyle from "./shared-style";
import "./textInput.css";
const STYLE_INPUT = {
  outline: "none",
  borderRadius: "8px",
  borderWidth: "0px",
  fontSize: "16px",
  fontWeight: "500",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.56",
  letterSpacing: "normal",
  fontFamily: "YekanBakhFaNum",
  padding: "8px 10px 8px",
  width: "90px",
  color: SharedStyle.PRIMARY_COLOR.input,
  backgroundColor: SharedStyle.COLORS.white,
  border: "solid 1px #bcbec6",
};

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { focus: false };
  }
  handleChange = (state) => {
      let { onChange } = this.props;
    this.setState({ focus: state });
    onChange(state);
  };
  render() {
    let { style, placeholder, disabled, ...rest } = this.props;
    let textInputStyle = { ...STYLE_INPUT, ...style };
    if (this.state.focus) {
      textInputStyle.border = `1px solid rgb(105, 118, 137)`;
    } else textInputStyle.color = "rgb(105, 118, 137)";

    if (disabled) {
      return (
        <input
          onFocus={(e) => this.handleChange(true)}
          onBlur={(e) => this.handleChange(false)}
          style={textInputStyle}
          type="text"
          placeholder={placeholder}
          {...rest}
        />
      );
    } else {
      textInputStyle.color = "#d2d4de";
      return (
        <input
          disabled
          style={textInputStyle}
          type="text"
          placeholder={placeholder}
          {...rest}
        />
      );
    }
  }
}
