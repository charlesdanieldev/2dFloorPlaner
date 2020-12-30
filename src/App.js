import "./App.css";
import KheshtReactPanle from "./components/uiComponents/khesht-react-panel";
// import Panel from "./components/panel";
// import wall from "./assets/images/wall.svg";
// import wallHover from "./assets/images/wallHover.svg";
// import sath from "./assets/images/sath.svg";
// import sathHover from "./assets/images/sathHover.svg";
// import pele from "./assets/images/pele.svg";
// import peleHover from "./assets/images/peleHover.svg";
// import mobl from "./assets/images/mobl.svg";
// import moblHover from "./assets/images/moblHover.svg";
// import line from "./assets/images/line.svg";
// import lineHover from "./assets/images/lineHover.svg";
// import door from "./assets/images/door.svg";
// import doorHover from "./assets/images/doorHover.svg";
// import plus from "./assets/images/plus1.svg"
// import nagetiv from "./assets/images/nagetiv.svg";
// import distanse from "./assets/images/distanse.svg";
// import distanseHover from "./assets/images/distanseHover.svg";
import { Component } from "react";
import WorkEnvironment from "./components/2dViewer/workEnvironment";
// import text from "./assets/images/text.svg";
// import textHover from "./assets/images/textHover.svg";
// import ComboBox from "./components/comboBox";

// import ToolBar from "./components/toolBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPanel: false,
      mode: { name: "ROOMMODE", title: "ویژگی های اتاق" },
    };
  }
  handelOnclicked = () => {};

  handelOnClose = (closed) => {
    this.setState({ showPanel: !closed });
  };
  handleOnClicked = (id) => {
    console.log(id);
  };
  handelChangeOnclicked = () => {
    this.setState({ mode: { name: "WALLMODE", title: "ویژگی‌های دیوار" } });
  };
  render() {
    let { showPanel, mode } = this.state;
    return (
      <div>
      <WorkEnvironment />
      </div>
    );
  }
}

export default App;
