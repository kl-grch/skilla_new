"use client";

import "./dotsRate.scss";

export function DotRateRed() {
  return (
    <div className="wrapper__dot-rate">
      <div className="dot-rate">
        <svg
          width="28"
          height="8"
          viewBox="0 0 28 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#EA1A4F" />
        </svg>
      </div>
    </div>
  );
}

export function DotRateBlue() {
  return (
    <div className="wrapper__dot-rate">
      <div className="dot-rate">
        <svg
          width="28"
          height="8"
          viewBox="0 0 28 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#ADBFDF" />
          <circle cx="14" cy="4" r="4" fill="#ADBFDF" />
        </svg>
      </div>
    </div>
  );
}

export function DotRateGreen() {
  return (
    <div className="wrapper__dot-rate">
      <div className="dot-rate">
        <svg
          width="28"
          height="8"
          viewBox="0 0 28 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#28A879" />
          <circle cx="14" cy="4" r="4" fill="#28A879" />
          <circle cx="24" cy="4" r="4" fill="#28A879" />
        </svg>
      </div>
    </div>
  );
}
