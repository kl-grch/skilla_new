"use client";

import "./buttonAddOrder.scss";
import Image from "next/image";

export default function ButtonAddOrder() {
  return (
    <div className="button-add-order">
      <div className="button-add-order__title">Добавить заказ</div>
      <div className="button-add-order__icon">
        <Image
          src="/images/buttonAddOrder/plus.svg"
          alt="plus"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}
