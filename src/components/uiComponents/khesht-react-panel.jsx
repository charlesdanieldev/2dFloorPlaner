import React, { Component } from "react";
import MultiButton from "./multiButton";
import PersonHover from "../../assets/images/personHover.svg";
import PersonActive from "../../assets/images/personActive.svg";
import Person from "../../assets/images/person.svg";
import RulerHover from "../../assets/images/rulerhover.svg";
import RulerActive from "../../assets/images/ruleractive.svg";
import Ruler from "../../assets/images/ruler.svg";
import SelectableButton from "./SelectableButton";
import Panel from "./panel";
import wall from "../../assets/images/wall.svg";
import wallHover from "../../assets/images/wallHover.svg";
import sath from "../../assets/images/sath.svg";
import sathHover from "../../assets/images/sathHover.svg";
import pele from "../../assets/images/pele.svg";
import peleHover from "../../assets/images/peleHover.svg";
import mobl from "../../assets/images/mobl.svg";
import moblHover from "../../assets/images/moblHover.svg";
import line from "../../assets/images/line.svg";
import lineHover from "../../assets/images/lineHover.svg";
import door from "../../assets/images/door.svg";
import doorHover from "../../assets/images/doorHover.svg";
import plus from "../../assets/images/plus1.svg";
import nagetiv from "../../assets/images/nagetiv.svg";
import distanse from "../../assets/images/distanse.svg";
import distanseHover from "../../assets/images/distanseHover.svg";
import text from "../../assets/images/text.svg";
import textHover from "../../assets/images/textHover.svg";
import Focus from "../../assets/images/focus.svg"
import Max from "../../assets/images/maximize.svg"
import MaxHover from "../../assets/images/maximizeHover.svg";

import Toolbar from "./toolBar";

class KheshtReactPanle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSwitchClick = (id) => {
    this.setState({ chooseItemId: id });
  };
  render() {
    return (
      <div>
        <table>
          <tr>
            <td>
              {" "}
              <MultiButton
                hieght="55px"
                width="55px"
                isHaveBorder={false}
                onClick={(id) => this.handleSwitchClick(id)}
              >
                <p
                  style={{
                    margin: "10px",
                    fontFamily: "sans-serif",
                    fontWeight: "700",
                  }}
                >
                  2D
                </p>

                <p
                  style={{
                    margin: "10px",
                    fontFamily: "sans-serif",
                    fontWeight: "700",
                  }}
                >
                  3D
                </p>
              </MultiButton>
            </td>
            <td>
              <SelectableButton
                ToolTipDirection="top"
                ToolTipText=" نمایش اندازه ها"
                ToolTipTextActive={" عدم نمایش اندازه ها"}
                alt="test"
                ImageSource={Person}
                ImageHover={PersonHover}
                ImageActive={PersonActive}
              ></SelectableButton>
            </td>
            <td>
              {" "}
              <SelectableButton
                ToolTipDirection="top"
                ToolTipText=" نمایش اندازه ها"
                ToolTipTextActive={" عدم نمایش اندازه ها"}
                alt="test"
                ImageSource={Ruler}
                ImageHover={RulerHover}
                ImageActive={RulerActive}
              ></SelectableButton>
            </td>
          </tr>
          <tr>
            <td>
              <Panel mode={{ name: "ROOMMODE", title: "ویژگی های اتاق" }} />
            </td>
            <td>
              <Panel mode={{ name: "WALLMODE", title: "ویژگی‌های دیوار" }} />
            </td>
            <td>
              <Panel mode={{ name: "OBJECTMODE", title: "اثاثیه" }} />
            </td>
            <td>
              <Panel mode={{ name: "DOOREDIT", title: "درب یک لنگه" }} />
            </td>
            <td>
              <Panel mode={{ name: "SURFACEEDIT", title: "ویژگی‌های سطح" }} />
            </td>
            <td>
              <Toolbar
                CustomStyle={{
                  padding: "0px 0px 0px 25px",
                  margin: "22px 0px 22px 0px ",
                }}
                height={615}
                items={[
                  { image: wall, imageHover: wallHover, tooltip: "تست" },
                  { image: sath, imageHover: sathHover, tooltip: "تست" },
                  { image: null, imageHover: null, tooltip: "تست" },
                  { image: pele, imageHover: peleHover, tooltip: "تست" },
                  { image: door, imageHover: doorHover, tooltip: "تست" },
                  { image: null, imageHover: null, tooltip: "تست" },
                  { image: mobl, imageHover: moblHover, tooltip: "تست" },
                  { image: null, imageHover: null, tooltip: "تست" },
                  {
                    image: distanse,
                    imageHover: distanseHover,
                    tooltip: "تست",
                  },
                  { image: line, imageHover: lineHover, tooltip: "تست" },
                  { image: null, imageHover: null, tooltip: "تست" },
                  { image: text, imageHover: textHover, tooltip: "تست" },
                ]}
              />
            </td>
            <td>
              <Toolbar
                CustomStyle={{
                  padding: "0px 0px 0px 25px",
                  margin: "6px 0px 6px 2px ",
                }}
                height={144}
                items={[
                  { image: plus, imageHover: plus, tooltip: "تست" },
                  { image: null, imageHover: null },
                  { image: nagetiv, imageHover: nagetiv, tooltip: "تست" },
                ]}
              />
              <Toolbar
                height={76}
                items={[{ image: Focus, imageHover: Focus, tooltip: "تست" }]}
              />
              <Toolbar
                height={76}
                items={[{ image: Max, imageHover: MaxHover, tooltip: "تست" }]}
              />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default KheshtReactPanle;
