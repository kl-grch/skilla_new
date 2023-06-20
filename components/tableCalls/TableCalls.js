"use client";

import "./tableCalls.scss";
import dayjs from "dayjs";
import Image from "next/image";
import Loader from "../loader/Loader";
import useCalls from "@/hooks/useCalls";


export default function TableCalls() {

  const updateTime = (time) => {
    if (time < 10) {
      return `0:0${time}`;
    } else if (time > 10 && time < 60) {
      return `0:${time}`;
    } else {
      let sec = 0;
      let min = 0;
      sec = time % 60;
      min = Math.floor(time / 60);
      return `${min}:${sec < 10 ? `0${sec}` : sec}`;
    }
  };

  const updatePhoneNumber = (phone) => {
    return `+${phone.slice(0, 1)} (${phone.slice(1, 4)}) ${phone.slice(
      4,
      7
    )}-${phone.slice(7, 9)}-${phone.slice(9, 11) || "**"}`;
  };

  const dateNow = dayjs().format("YYYY-MM-DD");
  const dateEnd = dayjs().subtract(3, "days").format("YYYY-MM-DD");

  const { data, error } = useCalls(dateEnd, dateNow);

  if (!data) return <Loader />;
  if (error) return <>Errrrrrrror</>;
 
  return (
    <div className="table-calls">
      <table className="table-calls__table">
        <thead>
          <tr>
            <th className="thead__checkbox checkbox">
              <input type="checkbox" />
            </th>
            <th className="thead__type type">Тип</th>
            <th className="thead__time time">Время</th>
            <th className="thead__employee employee">Сотрудник</th>
            <th className="thead__call call">Звонок</th>
            <th className="thead__source source">Источник</th>
            <th className="thead__rate rate">Оценка</th>
            <th className="thead__duration duration">Длительность</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td className="td__checkbox checkbox">
              <input type="checkbox" />
            </td>
            <td className="td__type type">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5217 7.17704L17.3447 6L7.66957 15.6751V10.1739H6V18.5217H14.3478V16.8522H8.84661L18.5217 7.17704Z"
                  fill="#005FF8"
                />
              </svg>
            </td>
            <td className="td__time time">19:00</td>
            <td className="td__employee employee">
              <Image
                src="/images/no_avatar.svg"
                alt="no-avatar"
                width={32}
                height={32}
              />
            </td>
            <td className="td__call call">+7 (987) 567-17-12</td>
            <td className="td__source source">Google</td>
            <td className="td__rate rate">Скрипт не использован</td>
            <td className="td__duration duration">12:06</td>
          </tr>
          <tr>
            <td className="td__checkbox checkbox">
              <input type="checkbox" />
            </td>
            <td className="td__type type">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5217 7.17704L17.3447 6L7.66957 15.6751V10.1739H6V18.5217H14.3478V16.8522H8.84661L18.5217 7.17704Z"
                  fill="#005FF8"
                />
              </svg>
            </td>
            <td className="td__time time">19:00</td>
            <td className="td__employee employee">
              <Image
                src="/images/no_avatar.svg"
                alt="no-avatar"
                width={32}
                height={32}
              />
            </td>
            <td className="td__call call">+7 (987) 567-17-12</td>
            <td className="td__source source">Google</td>
            <td className="td__rate rate">Скрипт не использован</td>
            <td className="td__duration duration">12:06</td>
          </tr> */}
          {data?.results.map((item) => (
            <tr key={item.id}>
              <td className="td__checkbox checkbox">
                <input type="checkbox" />
              </td>
              <td className="td__type type">
                {item.in_out === 0 ? (
                  <Image
                    src="/images/icons/arrow-blue-call.svg"
                    alt="arrow"
                    height={24}
                    width={24}
                  />
                ) : (
                  <Image
                    src="/images/icons/arrow-green-call.svg"
                    alt="arrow"
                    height={24}
                    width={24}
                  />
                )}
              </td>
              <td className="td__time time">{item.date.substring(11, 16)}</td>
              <td className="td__employee employee">
                <Image
                  src="/images/no_avatar.svg"
                  alt="no-avatar"
                  width={32}
                  height={32}
                />
              </td>
              <td className="td__call call">
                {item.in_out === 1
                  ? updatePhoneNumber(item.from_number)
                  : updatePhoneNumber(item.to_number)}
              </td>
              <td className="td__source source">{item.source}</td>
              <td className="td__rate rate">Скрипт не использован</td>
              <td className="td__duration duration">
                {item.time === 0 ? null : updateTime(item.time)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
