import {
  ButtonRateBlue,
  ButtonRateGreen,
  ButtonRateRed,
} from "@/components/buttonRate/ButtonRate";
import "./filterCallsRate.scss";
import { useEffect, useState } from "react";
import {
  DotRateBlue,
  DotRateGreen,
  DotRateRed,
} from "@/components/dotsRate/DotsRate";
import clsx from "clsx";
import { setFilterStatusRate } from "@/redux/features/callsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function FilterCallsRate() {
  const [choice, setChoice] = useState("Все оценки");
  const [filter, setFilter] = useState(false);
  const dispatch = useDispatch();

  const { filterStatus } = useSelector((state) => state.calls);

  const handleClick = (e) => {
    setChoice(e.target.innerText);
    setFilter(e.target.innerText === "Все оценки" ? false : true);
  };

  useEffect(() => {
    dispatch(setFilterStatusRate(filter));
  }, [filter]);

  useEffect(() => {
    if (filterStatus === false) {
      setChoice("Все оценки");
      setFilter(false);
    }
  }, [filterStatus]);

  return (
    <div className="filter-calls-source">
      <div
        className={clsx("filter-calls-employers__default", {
          "filter-calls-employers__default--active": filter,
        })}
      >
        <div className="default__label">{choice}</div>
        <div className="default__icon">
          <svg
            width="18"
            height="21"
            viewBox="0 0 18 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9001 8.60117L13.3991 8.10024C13.3324 8.03334 13.2555 8 13.1685 8C13.0818 8 13.0049 8.03334 12.9382 8.10024L9.00005 12.0382L5.06209 8.10034C4.9953 8.03345 4.91844 8.00011 4.83161 8.00011C4.74475 8.00011 4.66789 8.03345 4.60113 8.10034L4.10024 8.60131C4.03334 8.66806 4 8.74492 4 8.83179C4 8.91858 4.03345 8.99544 4.10024 9.06219L8.76957 13.7316C8.83633 13.7984 8.91322 13.8318 9.00005 13.8318C9.08688 13.8318 9.16364 13.7984 9.23036 13.7316L13.9001 9.06219C13.9668 8.99541 14 8.91854 14 8.83179C14 8.74492 13.9668 8.66806 13.9001 8.60117Z"
              fill="#ADBFDF"
            />
          </svg>
        </div>
      </div>

      <div className="filter-calls-source__choice">
        <div className="choice__types">
          <div className="types__item" onClick={handleClick}>
            Все оценки
          </div>

          <div className="types__item" onClick={handleClick}>
            Распознать
          </div>
          <div className="types__item" onClick={handleClick}>
            Скрипт не использован
          </div>
          <div
            className="types__item"
            onClick={() => setChoice(<ButtonRateRed />)}
          >
            <ButtonRateRed />
          </div>
          <div
            className="types__item"
            onClick={() => setChoice(<ButtonRateBlue />)}
          >
            <ButtonRateBlue />
          </div>
          <div
            className="types__item"
            onClick={() => setChoice(<ButtonRateGreen />)}
          >
            <ButtonRateGreen />
          </div>
          <div
            className="types__item"
            onClick={() => setChoice(<DotRateRed />)}
          >
            <DotRateRed />
          </div>
          <div
            className="types__item"
            onClick={() => setChoice(<DotRateBlue />)}
          >
            <DotRateBlue />
          </div>
          <div
            className="types__item"
            onClick={() => setChoice(<DotRateGreen />)}
          >
            <DotRateGreen />
          </div>
        </div>
      </div>
    </div>
  );
}
