import { createSlice } from "@reduxjs/toolkit";
import { newactivityLog } from "../data";
const initialState = newactivityLog;

const activitySlice = createSlice({
  name: "activitySlice",
  initialState,
  reducers: {
    createActivity: (state, action) => {
      state.unshift(action.payload);
    },
    resetFilter: () => {
      return initialState; // Reset to initial state
    },
    filterActivity: (state, action) => {
      const filters = action.payload;
      state.filter((log) => {
        return (
          (filters.client
            ? log.client.toLowerCase().includes(filters.client.toLowerCase())
            : true) &&
          (filters.region
            ? log.region.toLowerCase().includes(filters.region.toLowerCase())
            : true) &&
          (filters.mailSub
            ? log.mailSub.toLowerCase().includes(filters.mailSub.toLowerCase())
            : true) &&
          (filters.fromDate
            ? new Date(log.fromDate) >= new Date(filters.fromDate)
            : true) &&
          (filters.toDate
            ? new Date(log.toDate) <= new Date(filters.toDate)
            : true) &&
          (filters.timeZone
            ? log.timeZone
                .toLowerCase()
                .includes(filters.timeZone.toLowerCase())
            : true) &&
          (filters.action
            ? log.action.toLowerCase().includes(filters.action.toLowerCase())
            : true) &&
          (filters.createdBy
            ? log.createdBy.fname
                .toLowerCase()
                .includes(filters.createdBy.toLowerCase()) ||
              log.createdBy.lname
                .toLowerCase()
                .includes(filters.createdBy.toLowerCase())
            : true)
        );
      });
    },
  },
});
export const { createActivity, filterActivity } = activitySlice.actions;
export default activitySlice.reducer;
