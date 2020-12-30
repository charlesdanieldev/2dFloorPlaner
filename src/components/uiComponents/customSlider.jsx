import React from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
const LABLESTYLE = {
  width: 60,
  height: 24,
  fontFamily: "YekanBakhFaNum",
  fontSize: 16,
  fontWeight: "500",
  fontStyle: "normal",
  textAlign: "right",
  color: "#7b7e8e",
};
const TEXT_STYLE = {
  width: "25px",
  height: "24px",
  borderBottom: "solid 2px #e4e4e4",
  borderTop: "none",
  borderRight: "none",
  borderLeft: "none",
  fontFamily: "YekanBakhFaNum",
  fontSize: "16px",
  fontWeight: 500,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.56,
  letterSpacing: "normal",
  textAlign: "center",
  outline: 0,
  color: "#7b7e8e",
  
};

const PrettoSlider = withStyles({
  root: {
    color: "#007df9",
    height: 8,
    width: "90%",
    padding: "9px 0px 0px 0px",
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "solid 2px #007df9",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 2px)",
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    backgroundColor: "#e4e4e4",
  },
})(Slider);

export default function CustomSlider() {
  const [value, setValue] = React.useState(30);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <table style={{ width: "100%", height: "80px" }}>
        <tbody>
          <tr>
            <td style={{ width: "75%" }}>
              <PrettoSlider
                value={typeof value === "number" ? value : 0}
                onChange={handleSliderChange}
                //  valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={20}
              />
            </td>
            <td>
              <table style={{ width: "100%", height: "100%" }}>
                <tbody>
                  <tr>
                    <td>
                      <input
                        style={TEXT_STYLE}
                        value={value}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{height:"35% "}}></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td style={{ width: "100%" }}>
              <label style={LABLESTYLE}>سانتی متر</label>
            </td>
          </tr>
        </tbody>
      </table>
    </ThemeProvider>
  );
}
