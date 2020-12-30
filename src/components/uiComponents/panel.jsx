import React, { Component } from "react";
import BasePanleTools from "./basePanelTools";
import CloseImageButton from "./closeImageButton";
const TITLESTYLE = {
  fontFamily: "YekanBakhFaNum",
  fontSize: 18,
  fontWeight: "500",
  fontStyle: "normal",
  textAlign: "right",
  color: "#7b7e8e",
  width: "84%",
};
const STYLE = {
  width: 336,
  height: 882,
  borderRadius: 12,
  backgroundColor: "#ffffff",
  boxShadow: "0 0 6px 0 rgba(20, 20, 20, 0.16)",
  direction: "rtl",
};
const HEADERSTYLE = {
  width: 328,
  height: 75,
  borderBottom: "solid 1px #e8e8ef",
};

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: true };
  }

  hideAlert() {
    let { onClose } = this.props;
    onClose(true);
    this.setState({
      isActive: false,
    });
  }
  render() {
    let { isActive } = this.state;
    let { mode } = this.props;
    let content = <div></div>;
    if (isActive) {
      content = (
        <div style={STYLE}>
          <div style={HEADERSTYLE}>
            <table style={{ width: "100%", height: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ width: "16%", padding: 10 }}>
                    <CloseImageButton
                      onClick={() => this.hideAlert()}
                    ></CloseImageButton>
                  </td>
                  <td style={TITLESTYLE}>{mode.title}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding:'24px 32px 24px 32px'}}>{BasePanleTools(mode.name, isActive)}</div>
        </div>
      );
    }

    return content;
  }
}

export default Panel;
