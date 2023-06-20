import "./styles/globals.scss";
import localFont from "next/font/local";

import Sidebar from "@/components/sidebar/Sidebar";

const myFont = localFont({
  src: "../public/fonts/SFProDisplay-Regular.woff2",
  weight: '500',
  display: "swap",
});

export const metadata = {
  title: "Skilla: Временный персонал для компаний",
  description:
    "Skilla — это Uber для бизнеса, соединяем заказчиков и исполнителей с 2010 года.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={myFont.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
