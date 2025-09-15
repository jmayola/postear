"use client";

import Image from "next/image";
import React from "react";

type Props = {
  primary_color?: string;
  secondary_color?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  id: string;
};

const CardSticky: React.FC<Props> = ({
  primary_color = "#ffdd55",
  secondary_color = "#ff5555",
  className,
  width = 125,
  height = 150,
  id = "unknown"
}) => {
  return (
      <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 100 125"
        version="1.1"
        id={id}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs2" />
        <g id="layer1" transform="translate(-12.799735,-97.770261)">
          <path
            id="rect111"
            fill={primary_color}
            strokeWidth="0.264583"
            d="m 12.799736,97.77026 v 124.9996 H 92.799504 V 202.77005 H 112.79983 V 97.77026 Z"
          />
          <path
            fill={secondary_color}
            strokeWidth="0.264583"
            d="m 92.799502,202.77005 v 19.99981 l 20.000328,-19.99981 z"
            id="path377"
          />
        </g>
      </svg>
  );
};

export default CardSticky;
