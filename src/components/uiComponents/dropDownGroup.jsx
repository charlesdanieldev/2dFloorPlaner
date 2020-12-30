import React, { Component } from "react";
import DropDownItem from "./dropDown";
const DROPDOWNSTYLE = {
  direction: "ltr",
  transition: "height .5s ",
  width: "263px",
  height: 0,
  borderRadius: 12,
  backgroundColor: "#ffffff",
  boxShadow: "0 3px 20px 0 rgba(0, 0, 0, 0.12)",
  marginTop: "8px",
  overflow: "hidden",
  zIndex: 1,
  position: "absolute",
};
class DropDownGroup extends Component {
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
    let { children, dropDown } = this.props;
    let { selectedId } = this.state;
    let dropdownitems = [];
    let posation = "top";
    let length = children.length;

    let dropdownstyle = DROPDOWNSTYLE;
    if (dropDown) {
      dropdownstyle = Object.assign({}, dropdownstyle, {
        height: length * 48,
      });
    } else {
      dropdownstyle = Object.assign({}, dropdownstyle, { height: 0 });
    }

    for (let index = 0; index < length; index++) {
      if (index === 0) posation = "top";
      else if (index === length - 1) posation = "bottom";
      else posation = "center";
      console.log("selected id =" + selectedId);
      dropdownitems[index] =
        index === selectedId ? (
          <DropDownItem
            posation={posation}
            id={index}
            height="48px"
            width="100%"
            active={true}
            onClick={(id, selectedText) => this.handleClick(id, selectedText)}
          >
            {children[index]}
          </DropDownItem>
        ) : (
          <DropDownItem
            posation={posation}
            id={index}
            height="48px"
            width="100%"
            active={false}
            onClick={(id, selectedText) => this.handleClick(id, selectedText)}
          >
            {children[index]}
          </DropDownItem>
        );
    }

    return <div style={dropdownstyle}>{dropdownitems}</div>;
  }
}

export default DropDownGroup;
