export default function create (id, shape, attrs) {
    let shape =  shape;
    for (let k in attrs) {
      shape.attr(k, attrs[k]);
    }
    if (id != "none") {
      id.append(shape);
    }
    return shape;
  }
 
  export default function angleDeg (cx, cy, ex, ey) {
    let dy = ey - cy;
    let dx = ex - cx;
    let theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
  }

  export default function angle (x1, y1, x2, y2, x3, y3) {
    let x1 = parseInt(x1);
    let y1 = parseInt(y1);
    let x2 = parseInt(x2);
    let y2 = parseInt(y2);
    let anglerad;
    if (!x3) {
      if (x1 - x2 == 0) anglerad = Math.PI / 2;
      else {
        anglerad = Math.atan((y1 - y2) / (x1 - x2));
      }
      let angledeg = (anglerad * 180) / Math.PI;
    } else {
      let x3 = parseInt(x3);
      let y3 = parseInt(y3);
      let a = Math.sqrt(
        Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2)
      );
      let b = Math.sqrt(
        Math.pow(Math.abs(x2 - x3), 2) + Math.pow(Math.abs(y2 - y3), 2)
      );
      let c = Math.sqrt(
        Math.pow(Math.abs(x3 - x1), 2) + Math.pow(Math.abs(y3 - y1), 2)
      );
      if (a == 0 || b == 0) anglerad = Math.PI / 2;
      else {
        anglerad = Math.acos(
          (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b)
        );
      }
      angledeg = (360 * anglerad) / (2 * Math.PI);
    }
    return {
      rad: anglerad,
      deg: angledeg,
    };
  }

  export default function getAngle (el1, el2) {
    return {
      rad: Math.atan2(el2.y - el1.y, el2.x - el1.x),
      deg: (Math.atan2(el2.y - el1.y, el2.x - el1.x) * 180) / Math.PI,
    };
  }

  export default function insideWalls (xo, yo, xd, yd, thick) {
    let x1 = parseInt(xo);
    let y1 = parseInt(yo);
    let x2 = parseInt(xd);
    let y2 = parseInt(yd);
    let middleX = Math.abs(x1 + x2) / 2;
    let middleY = Math.abs(y1 + y2) / 2;
    return {
      x: middleX,
      y: middleY,
    };
  }

  export default function middle (xo, yo, xd, yd) {
    let x1 = parseInt(xo);
    let y1 = parseInt(yo);
    let x2 = parseInt(xd);
    let y2 = parseInt(yd);
    let middleX = Math.abs(x1 + x2) / 2;
    let middleY = Math.abs(y1 + y2) / 2;
    return {
      x: middleX,
      y: middleY,
    };
  }

  export default function triangleArea (fp, sp, tp) {
    let A = 0;
    let B = 0;
    let C = 0;
    let p = 0;
    A = qSVG.measure(fp, sp);
    B = qSVG.measure(sp, tp);
    C = qSVG.measure(tp, fp);
    p = (A + B + C) / 2;
    return Math.sqrt(p * (p - A) * (p - B) * (p - C));
  }

  export default function measure (po, pt) {
    return Math.sqrt(Math.pow(po.x - pt.x, 2) + Math.pow(po.y - pt.y, 2));
  }

  export default function gap (po, pt) {
    return Math.pow(po.x - pt.x, 2) + Math.pow(po.y - pt.y, 2);
  }

  export default function pDistance(point, pointA, pointB) {
    let x = point.x;
    let y = point.y;
    let x1 = pointA.x;
    let y1 = pointA.y;
    let x2 = pointB.x;
    let y2 = pointB.y;
    let A = x - x1;
    let B = y - y1;
    let C = x2 - x1;
    let D = y2 - y1;
    let dot = A * C + B * D;
    let len_sq = C * C + D * D;
    let param = -1;
    if (len_sq != 0)
      //in case of 0 length line
      param = dot / len_sq;
    let xx, yy;
    if (param < 0) {
      xx = x1;
      yy = y1;
    } else if (param > 1) {
      xx = x2;
      yy = y2;
    } else {
      xx = x1 + param * C;
      yy = y1 + param * D;
    }
    let dx = x - xx;
    let dy = y - yy;
    return {
      x: xx,
      y: yy,
      distance: Math.sqrt(dx * dx + dy * dy),
    };
  }

  export default function nearPointOnEquation (equation, point) {
    // Y = Ax + B ---- equation {A:val, B:val}
    let pointA = {};
    let pointB = {};
    if (equation.A == "h") {
      return {
        x: point.x,
        y: equation.B,
        distance: Math.abs(equation.B - point.y),
      };
    } else if (equation.A == "v") {
      return {
        x: equation.B,
        y: point.y,
        distance: Math.abs(equation.B - point.x),
      };
    } else {
      pointA.x = point.x;
      pointA.y = equation.A * point.x + equation.B;
      pointB.x = (point.y - equation.B) / equation.A;
      pointB.y = point.y;
      return qSVG.pDistance(point, pointA, pointB);
    }
  }

  export default function circlePath (cx, cy, r) {
    return (
      "M " +
      cx +
      " " +
      cy +
      " m -" +
      r +
      ", 0 a " +
      r +
      "," +
      r +
      " 0 1,0 " +
      r * 2 +
      ",0 a " +
      r +
      "," +
      r +
      " 0 1,0 -" +
      r * 2 +
      ",0"
    );
  }

  export default function createEquation (x0, y0, x1, y1) {
    if (x1 - x0 == 0) {
      return {
        A: "v",
        B: x0,
      };
    } else if (y1 - y0 == 0) {
      return {
        A: "h",
        B: y0,
      };
    } else {
      return {
        A: (y1 - y0) / (x1 - x0),
        B: y1 - x1 * ((y1 - y0) / (x1 - x0)),
      };
    }
  }

  export default function perpendicularEquation(equation, x1, y1) {
    if (typeof equation.A != "string") {
      return {
        A: -1 / equation.A,
        B: y1 - (-1 / equation.A) * x1,
      };
    }
    if (equation.A == "h") {
      return {
        A: "v",
        B: x1,
      };
    }
    if (equation.A == "v") {
      return {
        A: "h",
        B: y1,
      };
    }
  }

  export default function angleBetweenEquations (m1, m2) {
    if (m1 == "h") m1 = 0;
    if (m2 == "h") m2 = 0;
    if (m1 == "v") m1 = 10000;
    if (m2 == "v") m2 = 10000;
    let angleRad = Math.atan(Math.abs((m2 - m1) / (1 + m1 * m2)));
    return (360 * angleRad) / (2 * Math.PI);
  }

  // type array return [x,y] ---- type object return {x:x, y:y}
  export default function intersectionOfEquations (
    equation1,
    equation2,
    type = "array",
    message = false
  ) {
    let retArray;
    let retObj;
    if (equation1.A == equation2.A) {
      retArray = false;
      retObj = false;
    }
    if (equation1.A == "v" && equation2.A == "h") {
      retArray = [equation1.B, equation2.B];
      retObj = { x: equation1.B, y: equation2.B };
    }
    if (equation1.A == "h" && equation2.A == "v") {
      retArray = [equation2.B, equation1.B];
      retObj = { x: equation2.B, y: equation1.B };
    }
    if (equation1.A == "h" && equation2.A != "v" && equation2.A != "h") {
      retArray = [(equation1.B - equation2.B) / equation2.A, equation1.B];
      retObj = { x: (equation1.B - equation2.B) / equation2.A, y: equation1.B };
    }
    if (equation1.A == "v" && equation2.A != "v" && equation2.A != "h") {
      retArray = [equation1.B, equation2.A * equation1.B + equation2.B];
      retObj = { x: equation1.B, y: equation2.A * equation1.B + equation2.B };
    }
    if (equation2.A == "h" && equation1.A != "v" && equation1.A != "h") {
      retArray = [(equation2.B - equation1.B) / equation1.A, equation2.B];
      retObj = { x: (equation2.B - equation1.B) / equation1.A, y: equation2.B };
    }
    if (equation2.A == "v" && equation1.A != "v" && equation1.A != "h") {
      retArray = [equation2.B, equation1.A * equation2.B + equation1.B];
      retObj = { x: equation2.B, y: equation1.A * equation2.B + equation1.B };
    }
    if (
      equation1.A != "h" &&
      equation1.A != "v" &&
      equation2.A != "v" &&
      equation2.A != "h"
    ) {
      let xT = (equation2.B - equation1.B) / (equation1.A - equation2.A);
      let yT = equation1.A * xT + equation1.B;
      retArray = [xT, yT];
      retObj = { x: xT, y: yT };
    }
    if (type == "array") return retArray;
    else return retObj;
  }

  export default function vectorXY (obj1, obj2) {
    return {
      x: obj2.x - obj1.x,
      y: obj2.y - obj1.y,
    };
  }

  export default function vectorAngle (v1, v2) {
    return (
      (Math.atan2(v2.y - v1.y, v2.x - v1.x) + Math.PI / 2) * (180 / Math.PI)
    );
  }

export default function  vectorDeter (v1, v2) {
    return v1.x * v2.y - v1.y * v2.x;
  }

  export default function btwn (a, b1, b2, round = false) {
    if (round) {
      a = Math.round(a);
      b1 = Math.round(b1);
      b2 = Math.round(b2);
    }
    if (a >= b1 && a <= b2) {
      return true;
    }
    if (a >= b2 && a <= b1) {
      return true;
    }
    return false;
  }

  export default function nearPointFromPath (Pathsvg, point, range = Infinity) {
    let pathLength = Pathsvg.getTotalLength();
    if (pathLength > 0) {
      let precision = 40;
      let best;
      let bestLength;
      let bestDistance = Infinity;
      for (
        let scan, scanLength = 0, scanDistance;
        scanLength <= pathLength;
        scanLength += precision
      ) {
        scan = Pathsvg.getPointAtLength(scanLength);
        scanDistance = qSVG.gap(scan, point);
        if (scanDistance < bestDistance) {
          (best = scan),
            (bestLength = scanLength),
            (bestDistance = scanDistance);
        }
      }
      // binary search for precise estimate
      precision /= 2;
      while (precision > 1) {
        let before,
          after,
          beforeLength,
          afterLength,
          beforeDistance,
          afterDistance;
        if (
          (beforeLength = bestLength - precision) >= 0 &&
          (beforeDistance = qSVG.gap(
            (before = Pathsvg.getPointAtLength(beforeLength)),
            point
          )) < bestDistance
        ) {
          (best = before),
            (bestLength = beforeLength),
            (bestDistance = beforeDistance);
        } else if (
          (afterLength = bestLength + precision) <= pathLength &&
          (afterDistance = qSVG.gap(
            (after = Pathsvg.getPointAtLength(afterLength)),
            point
          )) < bestDistance
        ) {
          (best = after),
            (bestLength = afterLength),
            (bestDistance = afterDistance);
        } else {
          precision /= 2;
        }
      }

      if (bestDistance <= range * range) {
        return {
          x: best.x,
          y: best.y,
          length: bestLength,
          distance: bestDistance,
          seg: Pathsvg.getPathSegAtLength(bestLength),
        };
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  //  ON PATH RETURN FALSE IF 0 NODE ON PATHSVG WITH POINT coords
  //  RETURN INDEX ARRAY OF NODEs onPoint
  export default function getNodeFromPath (Pathsvg, point, except = [""]) {
    let nodeList = Pathsvg.getPathData();
    let k = 0;
    let nodes = [];
    let countNode = 0;
    for (k = 0; k < nodeList.length; k++) {
      if (
        nodeList[k].values[0] == point.x &&
        nodeList[k].values[1] == point.y &&
        nodeList[k].type != "Z"
      ) {
        if (except.indexOf(k) == -1) {
          countNode++;
          nodes.push(k);
        }
      }
    }
    if (countNode == 0) return false;
    else return nodes;
  }

  // RETURN ARRAY [{x,y}, {x,y}, ...] OF REAL COORDS POLYGON INTO WALLS, THICKNESS PARAM
  export default function polygonIntoWalls (vertex, surface) {
    let vertexArray = surface;
    let wall = [];
    let polygon = [];
    for (let rr = 0; rr < vertexArray.length; rr++) {
      polygon.push({
        x: vertex[vertexArray[rr]].x,
        y: vertex[vertexArray[rr]].y,
      });
    }
    // FIND EDGE (WALLS HERE) OF THESE TWO VERTEX
    for (let i = 0; i < vertexArray.length - 1; i++) {
      for (
        let segStart = 0;
        segStart < vertex[vertexArray[i + 1]].segment.length;
        segStart++
      ) {
        for (
          let segEnd = 0;
          segEnd < vertex[vertexArray[i]].segment.length;
          segEnd++
        ) {
          if (
            vertex[vertexArray[i + 1]].segment[segStart] ==
            vertex[vertexArray[i]].segment[segEnd]
          ) {
            wall.push({
              x1: vertex[vertexArray[i]].x,
              y1: vertex[vertexArray[i]].y,
              x2: vertex[vertexArray[i + 1]].x,
              y2: vertex[vertexArray[i + 1]].y,
              segment: vertex[vertexArray[i + 1]].segment[segStart],
            });
          }
        }
      }
    }
    // CALC INTERSECS OF EQ PATHS OF THESE TWO WALLS.
    let inside = [];
    let outside = [];
    for (let i = 0; i < wall.length; i++) {
      let inter = [];
      let edge = wall[i];
      if (i < wall.length - 1) let nextEdge = wall[i + 1];
      else let nextEdge = wall[0];
      let angleEdge = Math.atan2(edge.y2 - edge.y1, edge.x2 - edge.x1);
      let angleNextEdge = Math.atan2(
        nextEdge.y2 - nextEdge.y1,
        nextEdge.x2 - nextEdge.x1
      );
      let edgeThicknessX =
        (WALLS[edge.segment].thick / 2) * Math.sin(angleEdge);
      let edgeThicknessY =
        (WALLS[edge.segment].thick / 2) * Math.cos(angleEdge);
      let nextEdgeThicknessX =
        (WALLS[nextEdge.segment].thick / 2) * Math.sin(angleNextEdge);
      let nextEdgeThicknessY =
        (WALLS[nextEdge.segment].thick / 2) * Math.cos(angleNextEdge);
      let eqEdgeUp = qSVG.createEquation(
        edge.x1 + edgeThicknessX,
        edge.y1 - edgeThicknessY,
        edge.x2 + edgeThicknessX,
        edge.y2 - edgeThicknessY
      );
      let eqEdgeDw = qSVG.createEquation(
        edge.x1 - edgeThicknessX,
        edge.y1 + edgeThicknessY,
        edge.x2 - edgeThicknessX,
        edge.y2 + edgeThicknessY
      );
      let eqNextEdgeUp = qSVG.createEquation(
        nextEdge.x1 + nextEdgeThicknessX,
        nextEdge.y1 - nextEdgeThicknessY,
        nextEdge.x2 + nextEdgeThicknessX,
        nextEdge.y2 - nextEdgeThicknessY
      );
      let eqNextEdgeDw = qSVG.createEquation(
        nextEdge.x1 - nextEdgeThicknessX,
        nextEdge.y1 + nextEdgeThicknessY,
        nextEdge.x2 - nextEdgeThicknessX,
        nextEdge.y2 + nextEdgeThicknessY
      );

      angleEdge = angleEdge * (180 / Math.PI);
      angleNextEdge = angleNextEdge * (180 / Math.PI);

      if (eqEdgeUp.A != eqNextEdgeUp.A) {
        inter.push(
          qSVG.intersectionOfEquations(eqEdgeUp, eqNextEdgeUp, "object")
        );
        inter.push(
          qSVG.intersectionOfEquations(eqEdgeDw, eqNextEdgeDw, "object")
        );
      } else {
        inter.push({
          x: edge.x2 + edgeThicknessX,
          y: edge.y2 - edgeThicknessY,
        });
        inter.push({
          x: edge.x2 - edgeThicknessX,
          y: edge.y2 + edgeThicknessY,
        });
      }

      for (let ii = 0; ii < inter.length; ii++) {
        if (qSVG.rayCasting(inter[ii], polygon)) inside.push(inter[ii]);
        else outside.push(inter[ii]);
      }
    }
    inside.push(inside[0]);
    outside.push(outside[0]);
    return { inside: inside, outside: outside };
  }

   export default function area (coordss) {
    if (coordss.length < 2) return false;
    let realArea = 0;
    let j = coordss.length - 1;
    for (let i = 0; i < coordss.length; i++) {
      realArea =
        realArea +
        (coordss[j].x + coordss[i].x) * (coordss[j].y - coordss[i].y);
      j = i;
    }
    realArea = realArea / 2;
    return Math.abs(realArea.toFixed(2));
  }

  export default function areaRoom (vertex, coords, digit = 2) {
    let vertexArray = coords;
    let roughArea = 0;
    let j = vertexArray.length - 2;
    for (let i = 0; i < vertexArray.length - 1; i++) {
      roughArea =
        roughArea +
        (vertex[vertexArray[j]].x + vertex[vertexArray[i]].x) *
          (vertex[vertexArray[j]].y - vertex[vertexArray[i]].y);
      j = i;
    }
    roughArea = roughArea / 2;
    return Math.abs(roughArea.toFixed(digit));
  }

  export default function perimeterRoom (coords, digit = 2) {
    let vertexArray = coords;
    let roughRoom = 0;
    for (i = 0; i < vertexArray.length - 1; i++) {
      added = qSVG.measure(vertex[vertexArray[i]], vertex[vertexArray[i + 1]]);
      roughRoom = roughRoom + added;
    }
    return roughRoom.toFixed(digit);
  }

  // H && V PROBLEM WHEN TWO SEGMENT ARE v/-> == I/->
  export default function junctionList (WALLS) {
    let junction = [];
    let segmentJunction = [];
    let junctionChild = [];
    // JUNCTION ARRAY LIST ALL SEGMENT INTERSECTIONS
    for (let i = 0; i < WALLS.length; i++) {
      let equation1 = qSVG.createEquation(
        WALLS[i].start.x,
        WALLS[i].start.y,
        WALLS[i].end.x,
        WALLS[i].end.y
      );
      for (let v = 0; v < WALLS.length; v++) {
        if (v != i) {
          let equation2 = qSVG.createEquation(
            WALLS[v].start.x,
            WALLS[v].start.y,
            WALLS[v].end.x,
            WALLS[v].end.y
          );
          let intersec;
          if ((intersec = qSVG.intersectionOfEquations(equation1, equation2))) {
            if (
              (WALLS[i].end.x == WALLS[v].start.x &&
                WALLS[i].end.y == WALLS[v].start.y) ||
              (WALLS[i].start.x == WALLS[v].end.x &&
                WALLS[i].start.y == WALLS[v].end.y)
            ) {
              if (
                WALLS[i].end.x == WALLS[v].start.x &&
                WALLS[i].end.y == WALLS[v].start.y
              ) {
                junction.push({
                  segment: i,
                  child: v,
                  values: [WALLS[v].start.x, WALLS[v].start.y],
                  type: "natural",
                });
              }
              if (
                WALLS[i].start.x == WALLS[v].end.x &&
                WALLS[i].start.y == WALLS[v].end.y
              ) {
                junction.push({
                  segment: i,
                  child: v,
                  values: [WALLS[i].start.x, WALLS[i].start.y],
                  type: "natural",
                });
              }
            } else {
              if (
                qSVG.btwn(
                  intersec[0],
                  WALLS[i].start.x,
                  WALLS[i].end.x,
                  "round"
                ) &&
                qSVG.btwn(
                  intersec[1],
                  WALLS[i].start.y,
                  WALLS[i].end.y,
                  "round"
                ) &&
                qSVG.btwn(
                  intersec[0],
                  WALLS[v].start.x,
                  WALLS[v].end.x,
                  "round"
                ) &&
                qSVG.btwn(
                  intersec[1],
                  WALLS[v].start.y,
                  WALLS[v].end.y,
                  "round"
                )
              ) {
                intersec[0] = intersec[0];
                intersec[1] = intersec[1];
                junction.push({
                  segment: i,
                  child: v,
                  values: [intersec[0], intersec[1]],
                  type: "intersection",
                });
              }
            }
          }
          // IF EQ1 == EQ 2 FIND IF START OF SECOND SEG == END OF FIRST seg (eq.A maybe values H ou V)
          if (
            (Math.abs(equation1.A) == Math.abs(equation2.A) ||
              equation1.A == equation2.A) &&
            equation1.B == equation2.B
          ) {
            if (
              WALLS[i].end.x == WALLS[v].start.x &&
              WALLS[i].end.y == WALLS[v].start.y
            ) {
              junction.push({
                segment: i,
                child: v,
                values: [WALLS[v].start.x, WALLS[v].start.y],
                type: "natural",
              });
            }
            if (
              WALLS[i].start.x == WALLS[v].end.x &&
              WALLS[i].start.y == WALLS[v].end.y
            ) {
              junction.push({
                segment: i,
                child: v,
                values: [WALLS[i].start.x, WALLS[i].start.y],
                type: "natural",
              });
            }
          }
        }
      }
    }
    return junction;
  }

  export default function vertexList (junction, segment) {
    let vertex = [];
    let vertextest = [];
    for (let jj = 0; jj < junction.length; jj++) {
      let found = true;
      for (let vv = 0; vv < vertex.length; vv++) {
        if (
          Math.round(junction[jj].values[0]) == Math.round(vertex[vv].x) &&
          Math.round(junction[jj].values[1]) == Math.round(vertex[vv].y)
        ) {
          found = false;
          vertex[vv].segment.push(junction[jj].segment);
          break;
        } else {
          found = true;
        }
      }
      if (found) {
        vertex.push({
          x: Math.round(junction[jj].values[0]),
          y: Math.round(junction[jj].values[1]),
          segment: [junction[jj].segment],
          bypass: 0,
          type: junction[jj].type,
        });
      }
    }

    let toClean = [];
    for (let ss = 0; ss < vertex.length; ss++) {
      vertex[ss].child = [];
      vertex[ss].removed = [];
      for (let sg = 0; sg < vertex[ss].segment.length; sg++) {
        for (let sc = 0; sc < vertex.length; sc++) {
          if (sc != ss) {
            for (let scg = 0; scg < vertex[sc].segment.length; scg++) {
              if (vertex[sc].segment[scg] == vertex[ss].segment[sg]) {
                vertex[ss].child.push({
                  id: sc,
                  angle: Math.floor(qSVG.getAngle(vertex[ss], vertex[sc]).deg),
                });
              }
            }
          }
        }
      }
      toClean = [];
      for (let fr = 0; fr < vertex[ss].child.length - 1; fr++) {
        for (let ft = fr + 1; ft < vertex[ss].child.length; ft++) {
          if (fr != ft && typeof vertex[ss].child[fr] != "undefined") {
            found = true;

            if (
              qSVG.btwn(
                vertex[ss].child[ft].angle,
                vertex[ss].child[fr].angle + 3,
                vertex[ss].child[fr].angle - 3,
                "round"
              ) &&
              found
            ) {
              let dOne = qSVG.gap(vertex[ss], vertex[vertex[ss].child[ft].id]);
              let dTwo = qSVG.gap(vertex[ss], vertex[vertex[ss].child[fr].id]);
              if (dOne > dTwo) {
                toClean.push(ft);
              } else {
                toClean.push(fr);
              }
            }
          }
        }
      }
      toClean.sort(function (a, b) {
        return b - a;
      });
      toClean.push(-1);
      for (let cc = 0; cc < toClean.length - 1; cc++) {
        if (toClean[cc] > toClean[cc + 1]) {
          vertex[ss].removed.push(vertex[ss].child[toClean[cc]].id);
          vertex[ss].child.splice(toClean[cc], 1);
        }
      }
    }
    vertexTest = vertex;
    return vertex;
  }

  //*******************************************************
  //* @arr1, arr2 = Array to compare                      *
  //* @app = add function pop() or shift() to @arr1, arr2 *
  //* False if arr1.length != arr2.length                 *
  //* False if value into arr1[] != arr2[] - no order     *
  //* *****************************************************
  export default function arrayCompare(arr1, arr2, app) {
    // if (arr1.length != arr2.length) return false;
    let minus = 0;
    let start = 0;
    if (app == "pop") {
      minus = 1;
    }
    if (app == "shift") {
      start = 1;
    }
    let coordCounter = arr1.length - minus - start;
    for (let iFirst = start; iFirst < arr1.length - minus; iFirst++) {
      for (let iSecond = start; iSecond < arr2.length - minus; iSecond++) {
        if (arr1[iFirst] == arr2[iSecond]) {
          coordCounter--;
        }
      }
    }
    if (coordCounter == 0) return true;
    else return false;
  }

  export default function vectorVertex (vex1, vex2, vex3) {
    let vCurr = qSVG.vectorXY(vex1, vex2);
    let vNext = qSVG.vectorXY(vex2, vex3);
    let Na = Math.sqrt(vCurr.x * vCurr.x + vCurr.y * vCurr.y);
    let Nb = Math.sqrt(vNext.x * vNext.x + vNext.y * vNext.y);
    let C = (vCurr.x * vNext.x + vCurr.y * vNext.y) / (Na * Nb);
    let S = vCurr.x * vNext.y - vCurr.y * vNext.x;
    let BAC = Math.sign(S) * Math.acos(C);
    return BAC * (180 / Math.PI);
  }

  export default function segmentTree (VERTEX_NUMBER, vertex) {
    let TREELIST = [VERTEX_NUMBER];
    WAY = [];
    let COUNT = vertex.length;
    let ORIGIN = VERTEX_NUMBER;
    tree(TREELIST, ORIGIN, COUNT);
    return WAY;

    function tree(TREELIST, ORIGIN, COUNT) {
      if (TREELIST.length == 0) return;
      let TREETEMP = [];
      COUNT--;
      for (let k = 0; k < TREELIST.length; k++) {
        let found = true;
        let WRO = TREELIST[k];
        let WRO_ARRAY = WRO.toString().split("-");
        let WR = WRO_ARRAY[WRO_ARRAY.length - 1];

        for (let v = 0; v < vertex[WR].child.length; v++) {
          if (
            vertex[WR].child[v].id == ORIGIN &&
            COUNT < vertex.length - 1 &&
            WRO_ARRAY.length > 2
          ) {
            // WAYS HYPER
            WAY.push(WRO + "-" + ORIGIN); // WAYS
            found = false;
            break;
          }
        }
        if (found) {
          let bestToAdd;
          let bestDet = 0;
          let nextVertex = -1;
          // let nextVertexValue = 360;
          let nextDeterValue = Infinity;
          let nextDeterVal = 0;
          let nextFlag = 0;
          if (vertex[WR].child.length == 1) {
            if (WR == ORIGIN && COUNT == vertex.length - 1) {
              TREETEMP.push(WRO + "-" + vertex[WR].child[0].id);
            }
            if (WR != ORIGIN && COUNT < vertex.length - 1) {
              TREETEMP.push(WRO + "-" + vertex[WR].child[0].id);
            }
          } else {
            for (
              let v = 0;
              v < vertex[WR].child.length && vertex[WR].child.length > 0;
              v++
            ) {
              if (WR == ORIGIN && COUNT == vertex.length - 1) {
                // TO INIT FUNCTION -> // CLOCKWISE Research
                let vDet = qSVG.vectorVertex(
                  { x: 0, y: -1 },
                  vertex[WR],
                  vertex[vertex[WR].child[v].id]
                );
                if (vDet >= nextDeterVal) {
                  nextFlag = 1;
                  nextDeterVal = vDet;
                  nextVertex = vertex[WR].child[v].id;
                }
                if (Math.sign(vDet) == -1 && nextFlag == 0) {
                  if (vDet < nextDeterValue && Math.sign(nextDeterValue) > -1) {
                    nextDeterValue = vDet;
                    nextVertex = vertex[WR].child[v].id;
                  }
                  if (
                    vDet > nextDeterValue &&
                    Math.sign(nextDeterValue) == -1
                  ) {
                    nextDeterValue = vDet;
                    nextVertex = vertex[WR].child[v].id;
                  }
                }
              }
              if (
                WR != ORIGIN &&
                WRO_ARRAY[WRO_ARRAY.length - 2] != vertex[WR].child[v].id &&
                COUNT < vertex.length - 1
              ) {
                // COUNTERCLOCKWISE Research
                let vDet = qSVG.vectorVertex(
                  vertex[WRO_ARRAY[WRO_ARRAY.length - 2]],
                  vertex[WR],
                  vertex[vertex[WR].child[v].id]
                );
                if (vDet < nextDeterValue && nextFlag == 0) {
                  nextDeterValue = vDet;
                  nextVertex = vertex[WR].child[v].id;
                }
                if (Math.sign(vDet) == -1) {
                  nextFlag = 1;
                  if (vDet <= nextDeterValue) {
                    nextDeterValue = vDet;
                    nextVertex = vertex[WR].child[v].id;
                  }
                }
              }
            }
            if (nextVertex != -1) TREETEMP.push(WRO + "-" + nextVertex);
          }
        }
      }
      if (COUNT > 0) tree(TREETEMP, ORIGIN, COUNT);
    }
  }

  export default function polygonize (segment) {
    junction = qSVG.junctionList(segment);
    vertex = qSVG.vertexList(junction, segment);
    let vertexCopy = qSVG.vertexList(junction, segment);

    let edgesChild = [];
    for (let j = 0; j < vertex.length; j++) {
      for (let vv = 0; vv < vertex[j].child.length; vv++) {
        edgesChild.push([j, vertex[j].child[vv].id]);
      }
    }
    let polygons = [];
    let WAYS;
    for (let jc = 0; jc < edgesChild.length; jc++) {
      let bestVertex = 0;
      let bestVertexValue = Infinity;
      for (let j = 0; j < vertex.length; j++) {
        if (
          vertex[j].x < bestVertexValue &&
          vertex[j].child.length > 1 &&
          vertex[j].bypass == 0
        ) {
          bestVertexValue = vertex[j].x;
          bestVertex = j;
        }
        if (
          vertex[j].x == bestVertexValue &&
          vertex[j].child.length > 1 &&
          vertex[j].bypass == 0
        ) {
          if (vertex[j].y > vertex[bestVertex].y) {
            bestVertexValue = vertex[j].x;
            bestVertex = j;
          }
        }
      }

      // console.log("%c%s", "background: yellow; font-size: 14px;","RESEARCH WAY FOR STARTING VERTEX "+bestVertex);
      WAYS = qSVG.segmentTree(bestVertex, vertex);
      if (WAYS.length == 0) {
        vertex[bestVertex].bypass = 1;
      }
      if (WAYS.length > 0) {
        let tempSurface = WAYS[0].split("-");
        let lengthRoom = qSVG.areaRoom(vertex, tempSurface);
        let bestArea = parseInt(lengthRoom);
        let found = true;
        for (let sss = 0; sss < polygons.length; sss++) {
          if (qSVG.arrayCompare(polygons[sss].way, tempSurface, "pop")) {
            found = false;
            vertex[bestVertex].bypass = 1;
            break;
          }
        }

        if (bestArea < 360) {
          vertex[bestVertex].bypass = 1;
        }
        if (vertex[bestVertex].bypass == 0) {
          // <-------- TO REVISE IMPORTANT !!!!!!!! bestArea Control ???
          let realCoords = qSVG.polygonIntoWalls(vertex, tempSurface);
          let realArea = qSVG.area(realCoords.inside);
          let outsideArea = qSVG.area(realCoords.outside);
          let coords = [];
          for (let rr = 0; rr < tempSurface.length; rr++) {
            coords.push({
              x: vertex[tempSurface[rr]].x,
              y: vertex[tempSurface[rr]].y,
            });
          }
          // WARNING -> FAKE
          if (realCoords.inside.length != realCoords.outside) {
            polygons.push({
              way: tempSurface,
              coords: coords,
              coordsOutside: realCoords.outside,
              coordsInside: realCoords.inside,
              area: realArea,
              outsideArea: outsideArea,
              realArea: bestArea,
            });
          } else {
            // REAL INSIDE POLYGONE -> ROOM
            polygons.push({
              way: tempSurface,
              coords: realCoords.inside,
              coordsOutside: realCoords.outside,
              area: realArea,
              outsideArea: outsideArea,
              realArea: bestArea,
            });
          }

          // REMOVE FIRST POINT OF WAY ON CHILDS FIRST VERTEX
          for (let aa = 0; aa < vertex[bestVertex].child.length; aa++) {
            if (vertex[bestVertex].child[aa].id == tempSurface[1]) {
              vertex[bestVertex].child.splice(aa, 1);
            }
          }

          // REMOVE FIRST VERTEX OF WAY ON CHILDS SECOND VERTEX
          for (let aa = 0; aa < vertex[tempSurface[1]].child.length; aa++) {
            if (vertex[tempSurface[1]].child[aa].id == bestVertex) {
              vertex[tempSurface[1]].child.splice(aa, 1);
            }
          }
          //REMOVE FILAMENTS ?????

          do {
            let looping = 0;
            for (let aa = 0; aa < vertex.length; aa++) {
              if (vertex[aa].child.length == 1) {
                looping = 1;
                vertex[aa].child = [];
                for (let ab = 0; ab < vertex.length; ab++) {
                  // OR MAKE ONLY ON THE WAY tempSurface ?? BETTER ??
                  for (let ac = 0; ac < vertex[ab].child.length; ac++) {
                    if (vertex[ab].child[ac].id == aa) {
                      vertex[ab].child.splice(ac, 1);
                    }
                  }
                }
              }
            }
          } while (looping == 1);
        }
      }
    }
    //SUB AREA(s) ON POLYGON CONTAINS OTHERS FREE POLYGONS (polygon without commonSideEdge)
    for (let pp = 0; pp < polygons.length; pp++) {
      let inside = [];
      for (let free = 0; free < polygons.length; free++) {
        if (pp != free) {
          let polygonFree = polygons[free].coords;
          let countCoords = polygonFree.length;
          let found = true;
          for (pf = 0; pf < countCoords; pf++) {
            found = qSVG.rayCasting(polygonFree[pf], polygons[pp].coords);
            if (!found) {
              break;
            }
          }
          if (found) {
            inside.push(free);
            polygons[pp].area = polygons[pp].area - polygons[free].outsideArea;
          }
        }
      }
      polygons[pp].inside = inside;
    }
    return { polygons: polygons, vertex: vertex };
  }

  export default function diffArray (arr1, arr2) {
    return arr1.concat(arr2).filter(function (val) {
      if (!(arr1.includes(val) && arr2.includes(val))) return val;
    });
  }

  export default function diffObjIntoArray (arr1, arr2) {
    let count = 0;
    for (let k = 0; k < arr1.length - 1; k++) {
      for (let n = 0; n < arr2.length - 1; n++) {
        if (isObjectsEquals(arr1[k], arr2[n])) {
          count++;
        }
      }
    }
    let waiting = arr1.length - 1;
    if (waiting < arr2.length - 1) waiting = arr2.length;
    return waiting - count;
  }

  export default function rayCasting (point, polygon) {
    let x = point.x,
      y = point.y;
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      let xi = polygon[i].x,
        yi = polygon[i].y;
      let xj = polygon[j].x,
        yj = polygon[j].y;
      let intersect =
        yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }
    return inside;
  }
  //polygon = [{x1,y1}, {x2,y2}, ...]
  export default function polygonVisualCenter (room) {
    let polygon = room.coords;
    let insideArray = room.inside;
    let sample = 80;
    let grid = [];
    //BOUNDING BOX OF POLYGON
    let minX, minY, maxX, maxY;
    for (let i = 0; i < polygon.length; i++) {
      let p = polygon[i];
      if (!i || p.x < minX) minX = p.x;
      if (!i || p.y < minY) minY = p.y;
      if (!i || p.x > maxX) maxX = p.x;
      if (!i || p.y > maxY) maxY = p.y;
    }
    let width = maxX - minX;
    let height = maxY - minY;
    //INIT GRID
    let sampleWidth = Math.floor(width / sample);
    let sampleHeight = Math.floor(height / sample);
    for (let hh = 0; hh < sample; hh++) {
      for (let ww = 0; ww < sample; ww++) {
        let posX = minX + ww * sampleWidth;
        let posY = minY + hh * sampleHeight;
        if (qSVG.rayCasting({ x: posX, y: posY }, polygon)) {
          let found = true;
          for (let ii = 0; ii < insideArray.length; ii++) {
            if (
              qSVG.rayCasting(
                { x: posX, y: posY },
                ROOM[insideArray[ii]].coordsOutside
              )
            ) {
              found = false;
              break;
            }
          }
          if (found) {
            grid.push({ x: posX, y: posY });
          }
        }
      }
    }
    let bestRange = 0;
    let bestMatrix;

    for (let matrix = 0; matrix < grid.length; matrix++) {
      let minDistance = Infinity;
      for (let pp = 0; pp < polygon.length - 1; pp++) {
        let scanDistance = qSVG.pDistance(
          grid[matrix],
          polygon[pp],
          polygon[pp + 1]
        );
        if (scanDistance.distance < minDistance) {
          minDistance = scanDistance.distance;
        }
      }
      if (minDistance > bestRange) {
        bestMatrix = matrix;
        bestRange = minDistance;
      }
    }
    return grid[bestMatrix];
  }

  export default function textOnDiv (label, pos, styled, div) {
    if (typeof pos != "undefined") {
      let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttributeNS(null, "x", pos.x);
      text.setAttributeNS(null, "y", pos.y);
      text.setAttribute(
        "style",
        "fill:" +
          styled.color +
          ";font-weight:" +
          styled.fontWeight +
          ";font-size:" +
          styled.fontSize
      );
      text.setAttributeNS(null, "text-anchor", "middle");
      text.textContent = label;
      document.getElementById(div).appendChild(text);
    }
  }

//----------------------- END Quick SVG LIBRARY --------------------------------------------------s
