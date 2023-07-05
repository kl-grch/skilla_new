"use client";

import useSWR from "swr";

export default function useCallRecord(record, partnership_id) {
  const url = `https://api.skilla.ru/mango/getRecord?record=${record}&partnership_id=${partnership_id}`;

  const fetcher = (...args) =>
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer testtoken",
        "Content-type": "audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3",
        "Content-Transfer-Encoding": "binary",
        "Content-Disposition": "filename='record.mp3'",
      },
      body: null,
    })
      .then((res) => res.blob())
      .then((blob) => window.URL.createObjectURL(blob));

  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading,
  };
}
