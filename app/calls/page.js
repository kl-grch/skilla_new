import Header from "@/components/headerCalls/HeaderCalls";
import MainCalls from "@/components/mainCalls/MainCalls";
import "./page.scss";

export const metadata = {
  title: "Звонки",
  description:
    "Skilla — это Uber для бизнеса, соединяем заказчиков и исполнителей с 2010 года.",
};

export default function Calls() {
  return (
    <div className="calls">
      <Header />
      <MainCalls />
    </div>
  );
}
