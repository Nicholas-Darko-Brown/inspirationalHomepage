import { configureStore } from "@reduxjs/toolkit";
import goalsReducer from "../features/goals/goalsSlice";
import quoteReducer from "../features/quote/quoteSlice";
import timeReducer from "../features/time/timeSlice";

export const store = configureStore({
  reducer: {
    goals: goalsReducer,
    quote: quoteReducer,
    time: timeReducer
  },
});
