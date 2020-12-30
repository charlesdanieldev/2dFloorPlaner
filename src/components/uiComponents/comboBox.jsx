import React, { Component } from "react";
import upImage from "../../assets/upCombo.svg";
import DropDownGroup from "./dropDownGroup";
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
  padding: "16px 0px 0px 0px",
  color: "#39363e",
};
const STYLE = {
  width: 263,
  height: 56,
  borderRadius: 7,
  backgroundColor: "#ffffff",
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#dddee2",
  marginLeft: "400px",
};

class ComboBox extends Component {
  constructor(props) {
    super(props);
    this.state = { dropDown: false, selectedText: "همه" };
    
  }

  handleClick = (id, selectedText) => {
    let { dropDown } = this.state;
    let {onClick} = this.props;
    this.setState({ dropDown: !dropDown, selectedText: selectedText });
    onClick(id);

  };
  handleComboClick = () => {
    let { dropDown } = this.state;
    this.setState({ dropDown: !dropDown });
  };
  render() {
    let { items } = this.props;
    let { dropDown, selectedText } = this.state;
    let imageStyle, dropdownstyle;

    if (dropDown) {
      imageStyle = {
        transform: "rotate(0deg)",
        padding: 24,
        transition: "transform .3s ",
      };
    } else {
      imageStyle = {
        transform: "rotate(-180deg)",
        padding: 24,
        transition: "transform .3s ",
      };
    }
    console.log(selectedText);
    return (
      <div style={STYLE} onClick={this.handleComboClick}>
        <div style={{ position: "absolute", width: 210 }}>
          <p style={TEXT_STYLE}>{selectedText}</p>
        </div>
        <img alt="" src={upImage} style={imageStyle}></img>

        <DropDownGroup
          style={dropdownstyle}
          dropDown={dropDown}
          onClick={(id, selectedText) => this.handleClick(id, selectedText)}
        >
          { items.map((item,id) => {
            return <p
              style={{
                width: "100%",
                height: "100%",
                color: "#39363e",
                margin: '7px 0 0 0'
              }}
            >
              {item}
            </p>;
          })}
        </DropDownGroup>
      </div>
    );
  }
}

export default ComboBox;
