import React from "react";
export default function BoxGrid() {
  return (
    <React.StrictMode>
      <defs>
        <pattern
          id="smallGrid"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="#777"
            stroke-width="0.25"
          />
        </pattern>
        <pattern
          id="grid"
          width="180"
          height="180"
          patternUnits="userSpaceOnUse"
        >
          <rect width="180" height="180" fill="url(#smallGrid)" />
          <path
            d="M 200 10 L 200 0 L 190 0 M 0 10 L 0 0 L 10 0 M 0 190 L 0 200 L 10 200 M 190 200 L 200 200 L 200 190"
            fill="none"
            stroke="#999"
            stroke-width="0.8"
          />
        </pattern>
        <pattern
          id="hatch"
          width="5"
          height="5"
          patternTransform="rotate(50 0 0)"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 0 0 L 0 5 M 10 0 L 10 10 Z"
            stroke="#666"
            strokeWidth="5"
          />
        </pattern>
      </defs>

      <g id="boxgrid">
        <rect
          width="8000"
          height="5000"
          x="-3500"
          y="-2000"
          fill="url(#grid)"
        />
      </g>
    </React.StrictMode>
  );
}
