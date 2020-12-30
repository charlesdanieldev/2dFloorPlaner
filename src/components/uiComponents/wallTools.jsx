import React from "react";
import ImageAjor from "../../assets/door-symbol.png";
import door from "../../assets/images/door.svg";
import MultiItem from "./multiItem";
import MultiButton from "./multiButton";
import { Component } from "react";
const STYLE = {
  backgroundColor: "#ffffff",
  width: "100%",
};

class WallTools extends Component {
  constructor(props) {
    super(props);
    this.state = { chooseItemId: 0 };
  }
  handleSwitchClick = (id) => {
    this.setState({ chooseItemId: id });
  };
  render() {
    let { chooseItemId } = this.state;
    let images = [
      ImageAjor,
      ImageAjor,
      ImageAjor,
      ImageAjor,
      ImageAjor,
      ImageAjor,
      ImageAjor,
      ImageAjor,
      ImageAjor,
      ImageAjor,
      ImageAjor,
      ImageAjor,
      ImageAjor,
      ImageAjor,
      ImageAjor,
      ImageAjor,
    ];
    let Doorimages = [
      door,
      door,
      door,
      door,
      door,
      door,
      door,
      door,
      door,
      door,
      door,
      door,
      door,
      door,
      door,
      door,
    ];
    let texts = ["درب", "درب", "درب", "درب", "درب"];
    return (
      <div style={STYLE}>
        <MultiButton
          onClick={(id) => this.handleSwitchClick(id)}
          width={132.5}
          height={42}
          isHaveBorder={true}
        >
          <p style={{ margin: "10px" }}>درب</p>

          <p style={{ margin: "10px" }}>پنجره</p>
        </MultiButton>
        <br></br>
        {/* <MultiItem Images={images} TooltipTexts={texts} /> */}
        {chooseItemId === 0 ? (
          <MultiItem Images={images} TooltipTexts={texts} />
        ) : (
          <MultiItem Images={Doorimages} TooltipTexts={texts} />
        )}
      </div>
    );
  }
}

export default WallTools;
