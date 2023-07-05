"use client";

import "./tableCalls.scss";
import Image from "next/image";
import Loader from "../loader/Loader";
import useCalls from "@/hooks/useCalls";
import AudioPlayer from "../audioPlayer/AudioPlayer";
import ButtonRecognize from "../buttonRecognize/ButtonRecognize";
import {
  ButtonRateRed,
  ButtonRateBlue,
  ButtonRateGreen,
} from "../buttonRate/ButtonRate";
import updatePhoneNumber from "@/utils/updatePhoneNumber";
import updateTime from "@/utils/updateTime";
import { DotRateBlue, DotRateGreen, DotRateRed } from "../dotsRate/DotsRate";
import { useSelector } from "react-redux";

export default function TableCalls() {
  const { dateStart, dateEnd, calls, inOut } = useSelector((store) => store.calls);

  const { data, error } = useCalls(dateStart, dateEnd, inOut);

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
          {calls?.results?.map((item) => (
            <tr key={item.id}>
              <td className="td__checkbox checkbox">
                <input type="checkbox" />
              </td>
              <td className="td__type type">
                {item.in_out === 1 ? (
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
              <td className="td__rate rate">
                {item.errors[0] === "Скрипт не использован"
                  ? "Скрипт не использован"
                  : null}
              </td>
              <td className="td__duration duration">
                <div className="duration__time">{updateTime(item.time)}</div>
                <div className="duration__player">
                  {item.record === "" ? null : (
                    <AudioPlayer
                      record={item.record}
                      partnership_id={item.partnership_id}
                    />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
