import React, { Component } from "react";
import Door from "../../assets/images/doorbig.svg";
import ColorPicker from "./colorPicker";
import MultiButton from "./multiButton";
import ImageAjor from "../../assets/ajor.jpg";
import MultiItem from "./multiItem";
import Color1 from "../../assets/images/color1.svg";
import Color2 from "../../assets/images/color2.svg";
import Color3 from "../../assets/images/color3.svg";
import Color4 from "../../assets/images/color4.svg";
import Color5 from "../../assets/images/color5.svg";
import Color6 from "../../assets/images/color6.svg";
import Color7 from "../../assets/images/color7.svg";
import Color8 from "../../assets/images/color8.svg";

const STYLEOBJECTIMAGE = {
  width: 264,
  height: 264,
  borderRadius: 16,
  backgroundColor: "rgba(255, 255, 255, 0)",
  border: "solid 1px #dcdce2",
  textAlign: "center",
};
const STYLE = {
  backgroundColor: "#ffffff",
  width: "100%",
};
class SurfaceEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { background: "#fff", chooseItemId: 0 };
  }
  handleSwitchClick = (id) => {
    this.setState({ chooseItemId: id });
  };
  render() {
    let images = [ImageAjor, ImageAjor, ImageAjor, ImageAjor, ImageAjor];
    let Colors = [
      Color1,
      Color2,
      Color3,
      Color4,
      Color5,
      Color6,
      Color7,
      Color8,
    ];
    let { chooseItemId } = this.state;
    return (
      <div style={STYLE}>
        <div style={STYLEOBJECTIMAGE}>
          <img style={{ marginTop: "25%" }} src={Door} alt="door"></img>
        </div>
        <br></br>
        <br></br>
        <MultiButton
          onClick={(id) => this.handleSwitchClick(id)}
          width={132.5}
          height={42}
          isHaveBorder={true}
        >
          <p style={{ margin: "10px" }}>رنگ</p>

          <p style={{ margin: "10px" }}>بافت</p>
        </MultiButton>
        <br></br>
        <br></br>
        {chooseItemId === 0 ? (
          <MultiItem Type="item" Images={Colors} />
        ) : (
          <MultiItem Type="item" Images={images} />
        )}
      </div>
    );
  }
}

export default SurfaceEdit;
