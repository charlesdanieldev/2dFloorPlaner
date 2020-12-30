import React, { Component } from "react";
import ColorItem from "./ColorItem";
import TextInput from "./textInput";
const STYLEBOARD = {
  width: "100%",
  backgroundColor: "#2ccce4",
  height: "150px",
  borderRadius: "8px",
  marginBottom: "30px",
};
const inputStyle = {
  textAlign: "left",
  fontFamily: "sans-serif",
  fontWeight: "700",
};
class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedColor: "#2ccce4", textChanging: false };
  }
  HandelColorItemClicked = (color) => {
    this.setState({ selectedColor: color });
  };
  HandleTextChange = (state) => {
    this.setState({ textChanging: !state });
  };
  render() {
    let styleBoard = STYLEBOARD;
    let { selectedColor, textChanging } = this.state;
    styleBoard = Object.assign({}, STYLEBOARD, {
      backgroundColor: selectedColor,
    });
    return (
      <React.StrictMode>
       {/* <div style={styleBoard}></div> */}
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <ColorItem
            onClick={(color) => this.HandelColorItemClicked(color)}
            color="#2ccce4"
          />

          <ColorItem
            onClick={(color) => this.HandelColorItemClicked(color)}
            color="#37d67a"
          />

          <ColorItem
            onClick={(color) => this.HandelColorItemClicked(color)}
            color="#697689"
          />

          <ColorItem
            onClick={(color) => this.HandelColorItemClicked(color)}
            color="#f47373"
          />

          <ColorItem
            onClick={(color) => this.HandelColorItemClicked(color)}
            color="#d9e3f0"
          />

          <ColorItem
            onClick={(color) => this.HandelColorItemClicked(color)}
            color="#ba68c8"
          />

          <ColorItem
            onClick={(color) => this.HandelColorItemClicked(color)}
            color="#ff8a65"
          />

          <ColorItem
            onClick={(color) => this.HandelColorItemClicked(color)}
            color="#dce775"
          />


        </div>
       
      </React.StrictMode>
    );
  }
}

export default ColorPicker;
