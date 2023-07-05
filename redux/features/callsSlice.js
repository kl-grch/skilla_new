import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  // calls: [],
  dateNow: dayjs().format("YYYY-MM-DD"),
  dateEnd: dayjs().format("YYYY-MM-DD"),
  dateStart: dayjs().subtract(3, "days").format("YYYY-MM-DD"),
  countDays: 3,
  callsIncoming: false,
  callsOutcoming: false,
  inOut: "",
  filterStatus: false,
  filterStatusEmployers: false,
  filterStatusError: false,
  filterStatusRate: false,
  filterStatusRings: false,
  filterStatusSource: false,
  calls: [],
};

export const callsSlice = createSlice({
  name: "calls",
  initialState,
  reducers: {
    getAllCalls: (state, action) => {
      state.calls = action.payload;
    },
    increaseCountDays: (state) => {
      state.countDays = state.countDays + 1;
      state.dateStart = dayjs()
        .subtract(state.countDays, "days")
        .format("YYYY-MM-DD");
    },
    decreaseCountDays: (state) => {
      if (state.countDays <= 1) {
        state.countDays = 1;
        state.dateStart = dayjs()
          .subtract(state.countDays, "days")
          .format("YYYY-MM-DD");
      } else {
        state.countDays = state.countDays - 1;
        state.dateStart = dayjs()
          .subtract(state.countDays, "days")
          .format("YYYY-MM-DD");
      }
    },
    setCountDays: (state, action) => {
      state.countDays = action.payload;
      state.dateStart = dayjs()
        .subtract(state.countDays, "days")
        .format("YYYY-MM-DD");
    },
    setDateStart: (state, action) => {
      state.dateStart = action.payload;
      state.countDays = dayjs().diff(action.payload, "day");
    },
    setDateEnd: (state, action) => {
      state.dateEnd = action.payload;
      state.countDays = dayjs(action.payload).diff(state.dateStart, "day");
    },
    getIncomingCalls: (state, action) => {
      state.callsIncoming = true;
      state.callsOutcoming = false;
      state.inOut = action.payload;
    },
    getOutcomingCalls: (state, action) => {
      state.callsIncoming = false;
      state.callsOutcoming = true;
      state.inOut = action.payload;
    },
    getAllCallsType: (state) => {
      state.callsIncoming = false;
      state.callsOutcoming = false;
      state.inOut = "";
    },
    setFilterStatus: (state) => {
      if (
        state.filterStatusEmployers === true ||
        state.filterStatusError === true ||
        state.filterStatusRate === true ||
        state.filterStatusRings === true ||
        state.filterStatusSource === true
      ) {
        state.filterStatus = true;
      } else if (
        state.filterStatusEmployers === false &&
        state.filterStatusError === false &&
        state.filterStatusRate === false &&
        state.filterStatusRings === false &&
        state.filterStatusSource === false
      ) {
        state.filterStatus = false;
      }
    },
    setFilterStatusEmployers: (state, action) => {
      state.filterStatusEmployers = action.payload;
      if (action.payload === true) {
        state.filterStatus = true;
      } else {
        state.filterStatus = false;
      }
    },
    setFilterStatusError: (state, action) => {
      state.filterStatusError = action.payload;
      if (action.payload === true) {
        state.filterStatus = true;
      } else {
        state.filterStatus = false;
      }
    },
    setFilterStatusRate: (state, action) => {
      state.filterStatusRate = action.payload;
      if (action.payload === true) {
        state.filterStatus = true;
      } else {
        state.filterStatus = false;
      }
    },
    setFilterStatusRings: (state, action) => {
      state.filterStatusRings = action.payload;
      if (action.payload === true) {
        state.filterStatus = true;
      } else {
        state.filterStatus = false;
      }
    },
    setFilterStatusSource: (state, action) => {
      state.filterStatusSource = action.payload;
      if (action.payload === true) {
        state.filterStatus = true;
      } else {
        state.filterStatus = false;
      }
    },
    remoteFilterStatus: (state) => {
      (state.filterStatus = false),
        (state.filterStatusEmployers = false),
        (state.filterStatusError = false),
        (state.filterStatusRate = false),
        (state.filterStatusRings = false),
        (state.filterStatusSource = false);
    },
  },
});

const { actions, reducer } = callsSlice;
export const {
  increaseCountDays,
  decreaseCountDays,
  getAllCalls,
  setCountDays,
  getIncomingCalls,
  getOutcomingCalls,
  getAllCallsType,
  setDateStart,
  setDateEnd,
  setFilterStatus,
  setFilterStatusEmployers,
  setFilterStatusError,
  setFilterStatusRate,
  setFilterStatusRings,
  setFilterStatusSource,
  remoteFilterStatus,
} = actions;

export default reducer;
