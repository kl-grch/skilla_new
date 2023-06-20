'use client';

import ButtonBalance from "../buttonBalance/ButtonBalance";
import DatePicker from "../datePicker/DatePicker";
import FilterCalls from "../filterCalls/FilterCalls";
import SearchCalls from "../searchCalls/SearchCalls";
import TableCalls from "../tableCalls/TableCalls";
import './mainCalls.scss';


export default function MainCalls() {
  return (
    <div className="main-calls container">
      <div className="main-calls__info">
        <ButtonBalance />
        <DatePicker />
      </div>
      <div className="main-calls__filters">
        <SearchCalls/>
        <FilterCalls/>
      </div>
      <div className="main-calls__table">
        <TableCalls/>
      </div>
    </div>
  );
}
