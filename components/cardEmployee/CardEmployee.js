"use client";

import "./cardEmployee.scss";
import Image from "next/image";
import IconLogout from "../iconLogout/IconLogout";
import IconLogin from "../iconLogin/IconLogin";

const employers = [
  {
    id: 1,
    name: "Мирон Батонов",
    position: "Оператор",
    avatar: "/images/cardEmployee/avatar2.png",
  },
  {
    id: 2,
    name: "Алексей Ильин",
    position: "Оператор",
    avatar: "/images/cardEmployee/avatar2.png",
  },
  {
    id: 3,
    name: "Милана Константинопольская",
    position: "Оператор",
    avatar: "/images/cardEmployee/avatar2.png",
  },
  {
    id: 4,
    name: "Александра Сизых",
    position: "Логист",
    avatar: "/images/cardEmployee/avatar2.png",
  },
  {
    id: 5,
    name: "Илья Алексеев",
    position: "Логист",
    avatar: "/images/cardEmployee/avatar2.png",
  },
  {
    id: 6,
    name: "Владимир Петров",
    position: "Логист",
    avatar: "/images/cardEmployee/avatar2.png",
  },
  {
    id: 7,
    name: "Полина Калинина",
    position: "Бухгалтер",
    avatar: "/images/cardEmployee/avatar2.png",
  },
  {
    id: 8,
    name: "Наталья Натальева",
    position: "Бухгалтер",
    avatar: "/images/cardEmployee/avatar2.png",
  },
  {
    id: 9,
    name: "Константин Константинопольский",
    position: "Бухгалтер",
    avatar: "/images/cardEmployee/avatar2.png",
  },
];

const employeeItem = (arr, position) => {
  return arr
    .filter((item) => item.position === position)
    .map((item) => {
      return (
        <div key={item.id} className="employers__item">
          <div className="item__login">
            <IconLogin />
          </div>
          <div className="item__avatar">
            <Image src={item.avatar} alt="avatar" height={32} width={32} />
          </div>
          <div className="item__name">{item.name}</div>
        </div>
      );
    });
};

export default function CardEmployee() {
  return (
    <div className="card-employee">
      <div className="card-employee__default">
        <div className="default__img">
          <Image
            src="/images/cardEmployee/avatar.png"
            alt="avatar"
            height={40}
            width={40}
          />
        </div>
        <div className="default__icon">
          <svg
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
        </div>
      </div>
      <div className="card-employee__card">
        <div className="card__info">
          <div className="info__logout">
            <IconLogout />
          </div>
          <div className="info__name">Упоров Кирилл</div>
          <div className="info__position">
            <div className="position__position">Директор</div>
            <div className="position__dot"></div>
            <div className="position__location">Санкт-Петербург</div>
          </div>
          <div className="info__phone">
            <div className="phone__icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_60_4208)">
                  <path
                    d="M4.36 3.33333C4.4 3.92667 4.5 4.50667 4.66 5.06L3.86 5.86C3.58667 5.06 3.41333 4.21333 3.35333 3.33333H4.36V3.33333ZM10.9333 11.3467C11.5 11.5067 12.08 11.6067 12.6667 11.6467V12.64C11.7867 12.58 10.94 12.4067 10.1333 12.14L10.9333 11.3467V11.3467ZM5 2H2.66667C2.3 2 2 2.3 2 2.66667C2 8.92667 7.07333 14 13.3333 14C13.7 14 14 13.7 14 13.3333V11.0067C14 10.64 13.7 10.34 13.3333 10.34C12.5067 10.34 11.7 10.2067 10.9533 9.96C10.8867 9.93333 10.8133 9.92667 10.7467 9.92667C10.5733 9.92667 10.4067 9.99333 10.2733 10.12L8.80667 11.5867C6.92 10.62 5.37333 9.08 4.41333 7.19333L5.88 5.72667C6.06667 5.54 6.12 5.28 6.04667 5.04667C5.8 4.3 5.66667 3.5 5.66667 2.66667C5.66667 2.3 5.36667 2 5 2Z"
                    fill="#ADBFDF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_60_4208">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <a href="tel:+78003331721">
              <div className="phone__number">8 (800) 333-17-21</div>
            </a>
          </div>
          <div className="info__mail">
            <div className="mail__icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_60_4207)">
                  <path
                    d="M13.3333 2.66666H2.66659C1.93325 2.66666 1.33992 3.26666 1.33992 3.99999L1.33325 12C1.33325 12.7333 1.93325 13.3333 2.66659 13.3333H13.3333C14.0666 13.3333 14.6666 12.7333 14.6666 12V3.99999C14.6666 3.26666 14.0666 2.66666 13.3333 2.66666ZM13.3333 12H2.66659V5.33332L7.99992 8.66666L13.3333 5.33332V12ZM7.99992 7.33332L2.66659 3.99999H13.3333L7.99992 7.33332Z"
                    fill="#ADBFDF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_60_4207">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <a href="mailto:hi@skilla.ru">
              <div className="mail__adress">hi@skilla.ru</div>
            </a>
          </div>
          <div className="info__line"></div>
        </div>
        <div className="card__employers">
          <div className="employers__label">Операторы</div>
          {employeeItem(employers, "Оператор")}
          <div className="employers__label">Логисты</div>
          {employeeItem(employers, "Логист")}
          <div className="employers__label">Бухгалтеры</div>
          {employeeItem(employers, "Бухгалтер")}
        </div>
      </div>
    </div>
  );
}
