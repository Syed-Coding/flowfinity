export const issueLog = [
  {
    ticketNumber: "ABC123JN1",
    Client: "Client B",
    Region: "Prod",
    issueClassification: "long run in DW_10 ",
    issuedetails:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'	Shift Handled by	Issue Assigned To	Status	Date	Actions	Comment",
    ShiftHandledBy: "Syed",
    issueAssignedTo: null,
    Status: "pending",
    date: "2025-03-15",
    slaMiss: [
      {
        status: false,
        currentDbLatency: null,
        maxDblatency: null,
        sladetails: null,
      },
    ],

    Comment: [],
  },
  {
    ticketNumber: "ABC123JN2",
    Client: "Client C",
    Region: "PROD",
    issueClassification: "long run in DW_10",
    issuedetails:
      "2nd Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'	Shift Handled by	Issue Assigned To	Status	Date	Actions	Comment",
    ShiftHandledBy: "john",
    issueAssignedTo: null,
    Status: "pending", // when pending no comments were added and no assignation occurs
    slaMiss: [
      {
        status: false,
        currentDbLatency: null,
        maxDblatency: null,
        sladetails: null,
      },
    ],

    Comment: [],
  },
  {
    ticketNumber: "ABC123JN3",
    Client: "Client A",
    Region: "UAT",
    issueClassification: "long run in DM ",
    issuedetails:
      "3rd Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'	Shift Handled by	Issue Assigned To	Status	Date	Actions	Comment",
    ShiftHandledBy: "Syed",
    issueAssignedTo: "Ram",
    Status: "Working on this", // when working comments were added and  assignation occurs
    slaMiss: false,

    Comment: [], // here one comment is added defaultly when assignation occurs
  },
  {
    ticketNumber: "ABC123JN4",
    Client: "Client A",
    Region: "Prod",
    issueClassification: "long run in Claim ",
    issuedetails:
      "4th Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'	Shift Handled by	Issue Assigned To	Status	Date	Actions	Comment",
    ShiftHandledBy: "Rahul",
    issueAssignedTo: "sham",
    Status: "Working on this",
    date: "2025-03-15",
    slaMiss: [
      {
        status: false,
        currentDbLatency: null,
        maxDblatency: null,
        sladetails: null,
      },
    ],

    Comment: [],
  },
  {
    ticketNumber: "ABC123JN5",
    Client: "Client C",
    Region: "Prod",
    issueClassification: "long run in Member ",
    issuedetails:
      "5th Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'	Shift Handled by	Issue Assigned To	Status	Date	Actions	Comment",
    ShiftHandledBy: "Rishin",
    issueAssignedTo: "Rahul",
    Status: "resolved",
    date: "2025-03-15",
    slaMiss: [
      {
        status: true,
        currentDbLatency: 3.66,
        maxDblatency: 7.22,
        sladetails:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,",
      },
    ],
    Comment: [],
  },
  {
    ticketNumber: "ABC123JN6",
    Client: "Client A",
    Region: "Region 2",
    issueClassification: "long run in DW_10 ",
    issuedetails:
      "6th Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'	Shift Handled by	Issue Assigned To	Status	Date	Actions	Comment",
    ShiftHandledBy: "john",
    issueAssignedTo: "Rakesh",
    Status: "Resolved",
    date: "2025-03-15",
    slaMiss: [
      {
        status: true,
        currentDbLatency: 2.63,
        maxDblatency: 5.33,
        sladetails:
          "printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
    ],
    Comment: [],
  },
  {
    ticketNumber: "ABC123JN7",
    Client: "Cliient C",
    Region: "Region 1",
    issueClassification: "long run in DW_10 ",
    issuedetails:
      "7thLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'	Shift Handled by	Issue Assigned To	Status	Date	Actions	Comment",
    ShiftHandledBy: "Syed",
    issueAssignedTo: null,
    Status: "pending", // when pending no comments were added and no assignation occurs
    date: "2025-03-15",
    slaMiss: [
      {
        status: false,
        currentDbLatency: null,
        maxDblatency: null,
        sladetails: null,
      },
    ],
    Comment: [],
  },
];

// export const activityLog = [
//   {
//     Client: "Client B",
//     Region: "Prod",
//     MailSub:
//       "long run in DW_10ustry's standard dummy text ever since the 1500s ",
//     placeholder: [
//       {
//         fromDate: "27/1/2025",
//         fromTime: "3.00 PM",
//         toDate: "28/1/2025",
//         toTime: "6.00 PM",
//         TimeZone: "EST",
//       },
//     ],
//     action: "no action required",
//     CreatedBy: "Syed",
//     Date: "26/1/2024",
//   },
//   {
//     Client: "Client A",
//     Region: "Region 3",
//     MailSub:
//       "2nd long run in DW_10ustry's standard dummy text ever since the 1500s ",
//     placeholder: [
//       {
//         fromDate: "29/1/2025",
//         fromTime: "4.00 PM",
//         toDate: "30/1/2025",
//         toTime: "8.00 PM",
//         TimeZone: "MST",
//       },
//     ],
//     action: "Stop all HRDW",
//     CreatedBy: "Syed",
//     Date: "27/1/2024",
//   },
// ];

export const newactivityLog = [
  {
    id: "1",
    client: "Client A",
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
      fname: "syed",
      lname: "I",
      email: "testuser@gmail.com",
    },
    createdAt: 12343430,
  },
  {
    id: "1",
    client: "Client B",
    region: "Region 2",
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
      fname: "syed",
      lname: "I",
      email: "testuser@gmail.com",
    },
    createdAt: 12343430,
  },
];
export const importUpadtes = [
  {
    id: 1,
    UpaterName: "Rahul",
    designation: "Region 2",
    Date: "27/2/2025",
    confirmedBy: "Syed",
    Update:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use",
    isRead: false,
  },
  {
    id: 2,
    UpaterName: "syed",
    designation: "member",
    Date: "26/2/2025",
    isRead: false,
    confirmedBy: "Rishin",
    Update:
      "2 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use",
  },
  {
    id: 3,
    UpaterName: "Ron",
    designation: "DBA",
    Date: "26/2/2025",
    isRead: false,
    confirmedBy: "Manager",
    Update:
      "3 rd It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use",
  },
];
