import { Tooltip, Zoom } from "@material-ui/core";
import React, { Component } from "react";

const STYLE = {
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  boxShadow: "inset 0px 0px 0px 1px #bcbec6",
};
const IMAGESTYLE = {
  width: "100%",
  height: "100%",
};
const HOVERSTYLE = {
  boxShadow: " 0px 0px 0px 2px #bcbec6",
};
const ACTIVESTYLE = {
  boxShadow: " 0px 0px 0px 2px #007df9",
  backGroundColor: "#007df9",
};
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false, active: false };
  }
  handleOnClick = () => {
    let { id, onClick,children } = this.props;
    if (typeof(children) !== 'undefined') onClick(id);
  };
  render() {
    let { hover } = this.state;
    let {
      alt,
      Source,
      CustomStyle,
      children,
      CustomHoverStyle,
      TooltipText
    } = this.props;

    let mergeStyle ;

    if (typeof CustomStyle !== "undefined") {
      mergeStyle = Object.assign({}, STYLE, CustomStyle);
    }

    if (hover && !children)
      mergeStyle = CustomHoverStyle
        ? Object.assign({}, mergeStyle, CustomHoverStyle)
        : Object.assign({}, mergeStyle, HOVERSTYLE);
    else mergeStyle = Object.assign({}, STYLE, CustomStyle);
    if (children) {
      mergeStyle = Object.assign({}, mergeStyle, ACTIVESTYLE);
      
    }
    return TooltipText ? (
      <Tooltip
        TransitionComponent={Zoom}
        title={
          <span
            style={{
              color: "#ffffff",
              fontFamily: "YekanBakhFaNum",
              fontSize: "12px",
            }}
          >
            {TooltipText}
          </span>
        }
        arrow
        placement="bottom"
      >
        <img
          style={mergeStyle}
          onMouseEnter={(e) => this.setState({ hover: true })}
          onMouseLeave={(e) => this.setState({ hover: false })}
          onClick={this.handleOnClick}
          src={Source}
          alt={alt}
        ></img>
      </Tooltip>
    ) : (
      <img
        style={mergeStyle}
        onMouseEnter={(e) => this.setState({ hover: true })}
        onMouseLeave={(e) => this.setState({ hover: false })}
        onClick={this.handleOnClick}
        src={Source}
        alt={alt}
      ></img>
    );
  }
}

export default Item;
