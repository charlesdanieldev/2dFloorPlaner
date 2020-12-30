import React, { Component } from "react";

import Tooltip from "@material-ui/core/Tooltip";
const STYLE = {
  width: "48px",
  height: "48px",

  borderRadius: "8px",
  boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.16)",
  backgroundColor: "#ffffff",
};
const IMAGE_STYLE = {
  width: "25px",
  height: "25px",
  padding: "23%",
};
const ACTIVE_STYLE = {
  width: "48px",
  height: "48px",

  borderRadius: "8px",
  boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.16)",
  backgroundColor: "#007df9",
};
const HOVER_ACTIVE_STYLE = {
  width: "48px",
  height: "48px",

  borderRadius: "8px",
  boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.16)",
  backgroundColor: "#0064c8",
};

class SelectableButton extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false, active: false };
  }

  render() {
    let { hover, active } = this.state;
    let {
      alt,
      ImageSource,
      ImageHover,
      ImageActive,
      ToolTipText,
      ToolTipTextActive,
      ToolTipDirection,
    } = this.props;
    let style;
    let Source;
    if (hover && !active) {
      Source = ImageHover;
      style = STYLE;
    } else if (hover && active) {
      Source = ImageActive;
      style = HOVER_ACTIVE_STYLE;
    } else if (active) {
      Source = ImageActive;
      style = ACTIVE_STYLE;
    } else {
      Source = ImageSource;
      style = STYLE;
    }
    return (
      <React.StrictMode>
        <Tooltip
          title={
            <span
              style={{
                color: "#ffffff",
                fontFamily: "YekanBakhFaNum",
                fontSize: "12px",
              }}
            >
              {active ? ToolTipTextActive : ToolTipText}
            </span>
          }
          arrow
          placement={ToolTipDirection}
        >
          <div
            style={style}
            onMouseEnter={(e) => this.setState({ hover: true })}
            onMouseLeave={(e) => this.setState({ hover: false })}
            onClick={(e) => this.setState({ active: !active })}
          >
            <img style={IMAGE_STYLE} src={Source} alt={alt}></img>
          </div>
        </Tooltip>
      </React.StrictMode>
    );
  }
}
export default SelectableButton;
