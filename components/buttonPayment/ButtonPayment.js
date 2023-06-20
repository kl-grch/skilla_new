'use client';

import "./buttonPayment.scss";
import Image from "next/image";

export default function ButtonPayment() {
  return (
    <div className='button-payment'>
      <div className='button-payment__title'>Оплата</div>
      <div className='button-payment__icon'>
        <Image
          src="/images/buttonPayment/exclamation.svg"
          alt="plus"
          width={25}
          height={25}
        />
      </div>
    </div>
  );
}