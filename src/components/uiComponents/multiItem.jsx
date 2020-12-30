import React, { Component } from "react";
import Item from "./Item";

class MultiItem extends Component {
  constructor(props) {
    super(props);
    this.state = { ActiveItem: 0 };
  }
  handleOnClick = (id) => {
    this.setState({ ActiveItem: id });
  };
  render() {
    let { Images, TooltipTexts, Type } = this.props;

    let { ActiveItem } = this.state;
    let Active;

    return (
      <div
        style={{
          display: "-webkit-box",
          flexWrap: "wrap",
        }}
      >
        {Images.map((image, i) => {
          if (i === ActiveItem) Active = true;
          else Active = false;
          return (
            <Item
              Source={image}
              id={i}
              TooltipText={TooltipTexts ? TooltipTexts[i] : null}
              onClick={(id) => this.handleOnClick(id)}
              CustomStyle={
                Type === "item"
                  ? {
                      width: 82,
                      height: 82,
                      margin: "0px 2.2px 0px 2.2px",
                      border: "solid 2px transparent",
                      boxShadow: " 0px 0px 0px 2px transparent",
                    }
                  : {
                      width: 82,
                      height: 82,
                      margin: "0px 2.2px 0px 2.2px",
                    }
              }
              // CustomHoverStyle={{
              //   border: "solid 2px transparent",
              //   boxShadow: "0px 0px 0px 2px #bcbec6",
              // }}
            >
              {Active}
            </Item>
          );
        })}
      </div>
    );
  }
}

export default MultiItem;
