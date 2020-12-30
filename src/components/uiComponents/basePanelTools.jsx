import React from "react";
import DoorEdit from "./doorEdit";
import ObjTools from "./objTools";
import RoomTools from "./roomTools";
import SurfaceEdit from "./surfaceEdit";
import WallTools from "./wallTools";
function BasePanleTools(mode, show) {
  let content = <></>;
  switch (mode) {
    case "OBJECTMODE":
      content = <ObjTools />;
      break;
    case "ROOMMODE":
      content = <RoomTools />;
      break;

    case "WALLMODE":
      content = <WallTools />;
      break;
    case "DOOREDIT":
      content = <DoorEdit />;
      break;
    case "SURFACEEDIT":
      content = <SurfaceEdit />;
      break;

    default:
      break;
  }

  return show ? <div style={{height:"756px" }}>{content}</div> : null;
}

export default BasePanleTools;
