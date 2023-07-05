'use client';

import "./arrowOpenMenu.scss";
import { useState } from "react";
import clsx from "clsx";

export default function ArrowOpenMenu() {
  const [rotate, setRotate] = useState(false);
  return (
    <svg
      onClick={() => setRotate(!rotate)}
      className={clsx("arrow-open-menu", { "arrow-open-menu--rotate": rotate })}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_60_3465)">
        <path
          opacity="0.8"
          d="M7.41 8.59009L12 13.1701L16.59 8.59009L18 10.0001L12 16.0001L6 10.0001L7.41 8.59009Z"
          fill="#ADBFDF"
        />
      </g>
      <defs>
        <clipPath id="clip0_60_3465">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
