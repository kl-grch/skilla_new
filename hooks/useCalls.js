import useSWR from "swr";
import fetcher from "@/libs/fetch";
// const fetcher = (...args) => {
//   fetch(...args)
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// };

export default function useCalls(dateStart, dateEnd) {
  const urlAPI = `https://api.skilla.ru/mango/getList?date_start=${dateStart}&date_end=${dateEnd}`;
  const { data, error } = useSWR(
    urlAPI,
    fetcher(urlAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: "Bearer testtoken",
      },
    })
  );

  return {
    data,
    error,
    dateStart,
    dateEnd,
  };
}
