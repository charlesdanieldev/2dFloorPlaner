import React, { Component } from "react";
import ToolBarImageItem from "./toolBarImageItem";
import break2 from "../../assets/images/break.svg";

const STYLE = {
  width: 76,
  height: 615,
  borderRadius: 12,
  backgroundColor: "#ffffff",
  boxShadow: "0 0 6px 0 rgba(20, 20, 20, 0.16)",
};
const BREAKSTYLE=
{
 padding: "0px 0px 0px 25px",
              margin: "22px 0px 22px 0px ",

} 

class ToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedId: 0 };
  }
  handleClick = (id) => {
    // let { onClick } = this.props;
    // onClick(id);
    this.setState({ selectedId: id });
  };

  render() {
    let { selectedId } = this.state;
    let { items,height,CustomStyle } = this.props;
    let length = items.length;
    let dropdownitems = [];
    let style = Object.assign({},STYLE);
    let breakStyle = CustomStyle ? Object.assign({}, CustomStyle) : BREAKSTYLE;
    style.height = height;
    
    for (let index = 0; index < length; index++) {
      
      if (items[index].image === null)
        dropdownitems[index] = (
          <img style={breakStyle} src={break2} alt=""></img>
        );
      else {
        dropdownitems[index] =
          index === selectedId ? (
            <ToolBarImageItem
              id={index}
              item={items[index]}
              active={true}
              onClick={(id) => this.handleClick(id)}
            />
          ) : (
            <ToolBarImageItem
              id={index}
              item={items[index]}
              active={false}
              onClick={(id) => this.handleClick(id)}
            />
          );
      }
    }

    return (
      <div style={style}>
        <div style={{ padding: "15px 0px 0px 0px" }}>{dropdownitems}</div>
      </div>
    );
  }
}

export default ToolBar;
