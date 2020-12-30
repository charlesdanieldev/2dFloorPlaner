import { Tooltip } from "@material-ui/core";
import React, { Component } from "react";

const STYLE = {
  width: "48px",
  height: "48px",

  borderRadius: "8px",
};

const IMAGESTYLE = {
  padding: "14px 14px 14px 14px",
};
class BaseImageButton extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    let { hover } = this.state;
    let {
      alt,
      ImageSource,
      HoverImageSource,
      TooltipText,
      CustomStyle,
      CustomImageStyle,
      onClick,
    } = this.props;

    let Source;
    let mergeStyle = STYLE;
    let mergeImageStyle = IMAGESTYLE;

    if (typeof CustomStyle !== "undefined") {
      mergeStyle = Object.assign({}, STYLE, CustomStyle);
     
    }
    if (typeof CustomStyle !== "undefined") {
      mergeImageStyle = Object.assign({}, STYLE, CustomImageStyle);
      
    }
    
    if (hover) Source = HoverImageSource ? HoverImageSource : ImageSource;
    else Source = ImageSource;
    return (
      <Tooltip
        title={
          typeof TooltipText === "undefined" ? (
            ""
          ) : (
            <span
              style={{
                color: "#ffffff",
                fontFamily: "YekanBakhFaNum",
                fontSize: "12px",
              }}
            >
              {TooltipText}
            </span>
          )
        }
        arrow
        placement="left"
      >
        <div
          style={mergeStyle}
          onMouseEnter={(e) => this.setState({ hover: true })}
          onMouseLeave={(e) => this.setState({ hover: false })}
          onClick={onClick}
        >
          <img style={mergeImageStyle} src={Source} alt={alt}></img>
        </div>
      </Tooltip>
    );
  }
}

export default BaseImageButton;
