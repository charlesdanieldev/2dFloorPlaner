import React, { Component } from 'react';
import BaseImageButton from './baseImageButton';
import CloseIcon from "../../assets/close.svg"
import CloseHoverIcon from "../../assets/closehover.svg";

class CloseImageButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {onClick} = this.props;
        return (
          <BaseImageButton
            onClick={onClick}
            alt="test"
            ImageSource={CloseIcon}
            CustomImageStyle={{
              padding: "3px",
              width: 25.5,
              height: 25.5,
            }}
            HoverImageSource={CloseHoverIcon}
            CustomStyle={{
              backgroundColor: "#ffffff",

              width: 32,
              height: 32,
            }}
          ></BaseImageButton>
        );
    }
}
 
export default CloseImageButton;