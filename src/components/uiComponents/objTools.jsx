import React from "react";
import { Component } from "react";
import ComboBox from "./comboBox"
import MultiItem from "./multiItem";
import ImageAjor from "../../assets/door-symbol.png";
import door from "../../assets/images/door.svg";
const STYLE = {
  backgroundColor: "#ffffff",
  width: "100%",
  direction: "ltr",
  border: "solid 1px #ff44ff",
  display: "contents",
};
class ObjTools extends Component {
  constructor(props) {
    super(props);
    this.state = { chooseItemId: 0 };
  }
  handleComboItemClick = (id) => {
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
        <ComboBox
          items={["آشپزخانه", "حمام", "دفتر کار", "همه"]}
          onClick={(id) => this.handleComboItemClick(id)}
        />
        <br></br>
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

export default ObjTools;
