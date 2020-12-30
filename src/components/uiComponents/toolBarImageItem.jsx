import React, { Component } from 'react';
import BaseImageButton from './baseImageButton';
class ToolBarImageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  HandleClicked = (isActive) => {
    let { onClick } = this.props;
    console.log(isActive);
    onClick(isActive);
  };
  
  render() {
       let { active, item, id, onClick } = this.props;


    return (
      <BaseImageButton
        alt="test"
         TooltipText={item.tooltip}
        ImageSource={active ? item.imageHover : item.image}
        CustomImageStyle={{
          width: "100%",
          height: "100%",
        }}
        CustomStyle={{
          width: 48,
          height: 48,
          padding: "0px 15px 0px 15px",
        }}
        onClick={() => onClick(id)}
      />
    );
  }
}
 
export default ToolBarImageItem;