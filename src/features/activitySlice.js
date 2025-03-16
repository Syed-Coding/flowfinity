import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    client: "MND",
    region: "Prod",
    mailSub:
      "long run in DW_10ustry's standard dummy text ever since the 1500s",
    fromDate: "27/1/2025",
    fromTime: "3.00 PM",
    toDate: "28/1/2025",
    toTime: "6.00 PM",
    timeZone: "EST",
    action: "no action required",
    createdBy: {
      uid: 1,
      fname: "test",
      lname: "user",
      email: "testuser@gmail.com",
      role: "DEV",
    },
    createdAt: 12343430,
  },
  {
    id: "1",
    client: "IIY",
    region: "Prod",
    mailSub:
      "long run in DW_10ustry's standard dummy text ever since the 1500s",
    fromDate: "02/9/2025",
    fromTime: "3.00 PM",
    toDate: "28/1/2025",
    toTime: "6.00 PM",
    timeZone: "EST",
    action: "no action required",
    createdBy: {
      uid: 1,
      fname: "test",
      lname: "user",
      email: "testuser@gmail.com",
      role: "DEV",
    },
    createdAt: 12343430,
  },
];

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
