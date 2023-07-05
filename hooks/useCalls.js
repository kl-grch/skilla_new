"use client";

import useSWR from "swr";
import { useDispatch } from "react-redux";
import { getAllCalls } from "../redux/features/callsSlice";

export default function useCalls(dateStart, dateEnd, inOut) {
  const dispatch = useDispatch();
  const url = `https://api.skilla.ru/mango/getList?date_start=${dateStart}&date_end=${dateEnd}${inOut}`;

  const fetcher = (...args) =>
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: "Bearer testtoken",
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch(getAllCalls(data)));

  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading,
  };
}
