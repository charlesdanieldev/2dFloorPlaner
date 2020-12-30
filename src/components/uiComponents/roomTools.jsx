import React from "react";
import ImageAjor from "../../assets/ajor.jpg";

import CustomSlider from "./customSlider";
import MultiItem from "./multiItem";

 const STYLELABLE = {
   width: 46,
   height: 24,
   fontFamily: "YekanBakhFaNum",
   fontSize: 16,
   fontWeight: "500",
   fontStyle: "normal",
   textAlign: "right",
   color: "#7b7e8e",
 };
function RoomTools() {
let images = [ImageAjor, ImageAjor, ImageAjor, ImageAjor,ImageAjor];


  return (
  <div>
      <span style={STYLELABLE}>ضخامت</span>
      <CustomSlider />
      <span style={STYLELABLE}>ارتفاع</span>
      <CustomSlider />
      <br></br>
      <br></br>
      <span style={STYLELABLE}>بافت</span>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
       <MultiItem Images={images} />
     
    </div>
  );



    
}

export default RoomTools;
