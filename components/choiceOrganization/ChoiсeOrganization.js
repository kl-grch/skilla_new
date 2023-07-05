"use client";

import { useState } from "react";

import "./choiceOrganization.scss";

export default function ChoiсeOrganization() {
  const [company, setCompany] = useState("ИП Сидорова Александра Михайловна");
  const handleClick = (e) => {
    setCompany(e.target.innerText);
  };
  return (
    <div className="choice-organization">
      <div className="choice-organization__default">
        <div className="default__label">{company}</div>
        <div className="default__icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="keyboard_arrow_down_black_24dp 1"
              clipPath="url(#clip0_1_1811)"
            >
              <path
                id="Vector"
                opacity="0.8"
                d="M7.41 8.59009L12 13.1701L16.59 8.59009L18 10.0001L12 16.0001L6 10.0001L7.41 8.59009Z"
                fill="#ADBFDF"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1811">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="choice-organization__organizations">
        <div className="organizations__item" onClick={handleClick}>
          Все организации
        </div>
        <div className="organizations__item" onClick={handleClick}>
          ООО Грузчиков Сервис Запад
        </div>
        <div className="organizations__item" onClick={handleClick}>
          ИП Митрофанов М.М.
        </div>
        <div className="organizations__item" onClick={handleClick}>
          ИП Иванов М.М.
        </div>
      </div>
    </div>
  );
}
