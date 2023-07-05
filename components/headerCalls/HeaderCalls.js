"use client";

import "./headerCalls.scss";
import * as dayjs from "dayjs";
import "dayjs/locale/ru";
import Image from "next/image";
import SearchSite from "../searchSite/SearchSite";
import CardEmployee from "../cardEmployee/CardEmployee";
import ChoiсeOrganization from "../choiceOrganization/ChoiсeOrganization";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

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

  const { dateNow, calls } = useSelector((store) => store.calls);

  const [newCallsCount, setNewCallsCount] = useState(0);
  const [allCallsCount, setAllCallsCount] = useState(0);

  const getNewCallsCount = async () => {
    await setNewCallsCount(
      (calls?.results || []).filter(
        (item) => item.results[0]?.type === "is_new"
      ).length
    );
  };

  const getAllCallsCount = async () => {
    await setAllCallsCount(calls?.total_rows);
  };

  useEffect(() => {
    getAllCallsCount();
    getNewCallsCount();
  }, [calls]);

  return (
    <div className="wrapper__header-calls">
      <div className="container">
        <div className="header-calls">
          <div className="header-calls__date">
            {dayjs(dateNow).locale("ru").format("dddd, DD MMM")}
          </div>

          <div className="header-calls__statistic">
            <div className="statistic__calls">
              <div className="calls__label  no-wrap">
                Новые звонки{" "}
                <span>
                  {newCallsCount || 0} из {allCallsCount || 0} шт
                </span>
              </div>
              <progress
                max={allCallsCount}
                value={newCallsCount}
                className="calls__scale"
              />
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
            <ChoiсeOrganization />
          </div>

          <div className="header-calls__user">
            <CardEmployee />
          </div>
        </div>
      </div>
    </div>
  );
}
