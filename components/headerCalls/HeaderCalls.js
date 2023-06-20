import "./headerCalls.scss";
import * as dayjs from "dayjs";
import "dayjs/locale/ru";
import Image from "next/image";
import SearchSite from "../searchSite/SearchSite";

export default function HeaderCalls() {
  const updateLocale = require("dayjs/plugin/updateLocale");
  dayjs.extend(updateLocale);
  dayjs.updateLocale("ru", {
    monthsShort: [
      "янв",
      "фев",
      "мар",
      "апр",
      "мая",
      "июн",
      "июл",
      "авг",
      "сен",
      "окт",
      "ноя",
      "дек",
    ],
    weekdays: [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ],
  });

  return (
    <div className="wrapper__header-calls">
      <div className="container">
        <div className="header-calls">
          <div className="header-calls__date">
            {dayjs().locale("ru").format("dddd, DD MMM")}
          </div>
          <div className="header-calls__statistic">
            <div className="statistic__calls">
              <div className="calls__label  no-wrap">
                Новые звонки <span>20 из 30 шт</span>
              </div>
              <progress max="30" value="20" className="calls__scale" />
            </div>
            <div className="statistic__quality">
              <div className="quality__label no-wrap">
                Качество разговоров <span>40%</span>
              </div>
              <progress max="100" value="40" className="quality__scale" />
            </div>
            <div className="statistic__conversion">
              <div className="conversion__label  no-wrap">
                Конверсия в заказ <span>67%</span>
              </div>
              <progress max="100" value="67" className="conversion__scale" />
            </div>
            <Image
              src="images/headerCalls/help_logo.svg"
              alt="info"
              width={20}
              height={20}
              className="statistic__info"
              title="info"
            />
          </div>
          <div className="header-calls__search">
            <SearchSite />
          </div>
          <div className="header-calls__organization">
            <div className="organization__name no-wrap">
              ИП Сидорова Александра Михайловна
            </div>
            <div className="organization__choiсe">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_12465_2629)">
                  <path
                    opacity="0.8"
                    d="M7.41 8.59009L12 13.1701L16.59 8.59009L18 10.0001L12 16.0001L6 10.0001L7.41 8.59009Z"
                    fill="#ADBFDF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12465_2629">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="header-calls__user">
            <div className="user__avatar">
              <Image
                src="/images/avatar.png"
                alt="avatar"
                height={40}
                width={40}
              />
            </div>
            <div className="user__choice">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_12465_2629)">
                  <path
                    opacity="0.8"
                    d="M7.41 8.59009L12 13.1701L16.59 8.59009L18 10.0001L12 16.0001L6 10.0001L7.41 8.59009Z"
                    fill="#ADBFDF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12465_2629">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
