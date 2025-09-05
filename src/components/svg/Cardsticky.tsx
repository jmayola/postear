"use client";

import React from "react";

type Props = {
  color?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
};

const CardSticky: React.FC<Props> = ({
  color = "#3344ff",
  className,
  width = 125,
  height = 150,
}) => {
  return (
    <div className={className} style={{ height, width }}>
      <svg
        version="1.1"
        id="svg2993"
        xmlSpace="preserve"
        viewBox="0 0 458.19522 534.87744"
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        role="img"
        aria-hidden
      >
        <defs>
          {/* Gradiente base */}
          <linearGradient id="linearGradient1293">
            <stop stopColor="#333333" stopOpacity={1} offset="0" />
            <stop stopColor={color} stopOpacity={1} offset="1" />
          </linearGradient>

          {/* Gradiente que referencia al anterior */}
          <linearGradient
            id="linearGradient1295"
            x1="119.34093"
            y1="164.88423"
            x2="133.38809"
            y2="178.84444"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#linearGradient1293" 
          />
        </defs>

        <g transform="matrix(3.7795276,0,0,3.7795276,-45.948768,-141.07)">
          <path
            fill={color}
            strokeWidth={0.264583}
            d="M 12.157278,37.32477 H 133.37312 v 125.44436 l -16.1008,-0.0255 -0.11451,16.1008 H 12.157278 Z"
            id="path322"
          />
          <path
            fill="url(#linearGradient1295)"
            fillOpacity={1}
            strokeWidth={0.264583}
            d="m 117.15781,178.84443 0.11451,-16.1008 16.1008,0.0255 c 0,0 1.12884,16.0753 -16.21531,16.0753 z"
            id="path587"
          />
        </g>
      </svg>
    </div>
  );
};

export default CardSticky;
