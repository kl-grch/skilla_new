"use client";

import "./loader.scss";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="loader">
      <div className="loader__icon">
        <Image
          src="/images/loader/loader.svg"
          alt="loader"
          width={12}
          height={12}
        />
      </div>
      <div className="loader__text">Загружаем</div>
    </div>
  );
}
