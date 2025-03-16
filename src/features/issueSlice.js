import { createSlice } from "@reduxjs/toolkit";
import { issueLog } from "../data";

const initialState = issueLog;

const issueSlice = createSlice({
  name: "issueSlice",
  initialState,
  reducers: {
    deleteRow: (state, action) => {
      const ticketNumberToDelete = action.payload;
      return state.filter(
        (issue) => issue.ticketNumber !== ticketNumberToDelete
      );
    },
    deleteComment: (state, action) => {
      const selectedData = state.filter(
        (x) => x.ticketNumber === action.payload.updatedNewData[0].ticketNumber
      );

      const delCom = selectedData[0].Comment.filter(
        (x) => x.id !== action.payload.id
      );
      const val = state.map((y) =>
        y.ticketNumber === action.payload.updatedNewData[0].ticketNumber
          ? { ...y, Comment: delCom }
          : y
      );
      console.log("fdddddddddddddddddddd", val);

      return val;
    },
    addcomments: (state, action) => {
      console.log(action);
      console.log("dsgiyuyuyuyuyuyuyuyuyuyuyu");
      const newData = state.filter(
        (x) => x.ticketNumber === action.payload.updatedNewData[0].ticketNumber
      );
      // console.log("newwwwwwwwwwwwwwwwwwwwww", newData[0].ticketNumber);

      newData[0]?.Comment?.unshift(action.payload.newComment);
    },
    updatecomments: (state, action) => {
      console.log(action);

      const updatedComment = state.filter(
        (x) => x.ticketNumber === action.payload.updatedNewData[0].ticketNumber
      );
      const com = updatedComment[0].Comment.filter(
        (x) => x.id === action.payload.id
      );

      console.log(com);

      com[0].content = action.payload.newContent;
    },
    updateIssue: (state, action) => {
      const index = state.findIndex(
        (issue) => issue.ticketNumber === action.payload.ticketNumber
      );
      if (index !== -1) {
        state[index] = action.payload; // Update the row data
      }
    },
    addIssueData: (state, action) => {
      state.unshift(action.payload);
    },
    applyFilter: (state, action) => {
      const filters = action.payload;

      return state.filter((issue) => {
        const matchesTicketNo = filters.ticketNo
          ? String(issue.ticketNumber ?? "")
              .toLowerCase()
              .includes(filters.ticketNo.toLowerCase())
          : true;

        const matchesClient = filters.client
          ? String(issue.Client ?? "")
              .toLowerCase()
              .includes(filters.client.toLowerCase())
          : true;

        const matchesRegion = filters.region
          ? String(issue.Region ?? "")
              .toLowerCase()
              .includes(filters.region.toLowerCase())
          : true;

        const matchesClassification = filters.classification
          ? String(issue.issueClassification ?? "")
              .toLowerCase()
              .includes(filters.classification.toLowerCase())
          : true;

        const matchesHandledBy = filters.handledBy
          ? String(issue.ShiftHandledBy ?? "")
              .toLowerCase()
              .includes(filters.handledBy.toLowerCase())
          : true;
        9;

        const matchesAssignedTo = filters.assignedTo
          ? String(issue.issueAssignedTo ?? "")
              .toLowerCase()
              .includes(filters.assignedTo.toLowerCase())
          : true;

        const matchesStatus = filters.status
          ? String(issue.Status ?? "").toLowerCase() ===
            filters.status.toLowerCase()
          : true;
        const matchesDate = filters.date ? issue.date === filters.date : true;

        return (
          matchesTicketNo &&
          matchesClient &&
          matchesRegion &&
          matchesClassification &&
          matchesHandledBy &&
          matchesAssignedTo &&
          matchesStatus &&
          matchesDate
        );
      });
    },
    resetFilter: (state, action) => {
      return initialState;
    },
  },
});

export const {
  updateIssue,
  deleteRow,
  addcomments,
  addIssueData,
  deleteComment,
  updatecomments,
  applyFilter,
  resetFilter,
} = issueSlice.actions;
export default issueSlice.reducer;
