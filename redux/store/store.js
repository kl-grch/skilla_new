import { configureStore } from "@reduxjs/toolkit";
import calls from "../features/callsSlice";

export const store = configureStore({
  reducer: { calls },
});
