import { configureStore } from "@reduxjs/toolkit";
import impUpdatesReducer from "../features/impUpdateSlice";
import issueLog from "../features/issueSlice";
import activitySlice from "../features/activitySlice";

export const store = configureStore({
  reducer: {
    impUpdates: impUpdatesReducer,
    issueLogs: issueLog,
    activityLogs: activitySlice,
    commentAdded: issueLog,
  },
});
