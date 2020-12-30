import React, { Component } from "react";
import Door from "../../assets/images/doorbig.svg"
import CustomSlider from "./customSlider";
const STYLEOBJECTIMAGE = {
  width: 264,
  height: 264,
  borderRadius: 16,
  backgroundColor: "rgba(255, 255, 255, 0)",
  border: "solid 1px #dcdce2",
  textAlign : "center"
};
const STYLE = {
  backgroundColor: "#ffffff",
  width: "100%",
  
};

 const STYLELABLE = {
   width: 46,
   height: 24,
   fontFamily: "YekanBakhFaNum",
   fontSize: 16,
   fontWeight: "500",
   fontStyle: "normal",
   textAlign: "right",
   color: "#7b7e8e",
 };
class DoorEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={STYLE}>
        <div style={STYLEOBJECTIMAGE}>
          <img style={{ marginTop: "25%" }} src={Door} alt="door"></img>
        </div>
        <br></br>
        <br></br>
        <br></br>
      

        <span style={STYLELABLE}>عرض</span>
        <CustomSlider />
        <span style={STYLELABLE}>ارتفاع</span>
        <CustomSlider />
        <span style={STYLELABLE}>فاصله از کف</span>
        <CustomSlider />
        <span style={STYLELABLE}>چرخش</span>
        <CustomSlider />
      </div>
    );
  }
}

export default DoorEdit;
