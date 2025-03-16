import { Button, Table, Tag } from "antd";
import IssueDetailesModal from "./modal/IssueDetailesModal";
import { useState } from "react";

const TableComponent = ({ data }) => {
   
    const [isModalOpen,setIsModalOpen] = useState(false)

    const showDetails = ()=>{
        setIsModalOpen(true)
    }
  const columns = [
    {
      title: 'Sl.No',
      key: 'rowNumber',
      render: (text, record, index) => index + 1,
    },
    { title: 'Ticket No', dataIndex: 'ticketNumber', key: 'ticketNumber' },
    {
      title: 'Client',
      dataIndex: 'Client',
      key: 'Client',
      render: (text) => (
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
          {text}
        </div>
      ),
    },
    {
      title: 'Region',
      dataIndex: 'Region',
      key: 'Region',
      render: (text) => (
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
          {text}
        </div>
      ),
    },
    { title: 'Issue Classification', dataIndex: 'issueClassification', key: 'issueClassification' },
    {
      title: 'Issue Details',
      dataIndex: 'issuedetails',
      key: 'issuedetails',
      render: (text, record) => (
        <Button type="link" onClick={() => showDetails(record)}>
          {text.length > 15 ? `${text.substring(0, 15)}...` : text}
        </Button>
      ),
    },
    { title: 'Shift Handled by', dataIndex: 'ShiftHandledBy', key: 'ShiftHandledBy' },
    { title: 'Issue Assigned To', dataIndex: 'issueAssignedTo', key: 'issueAssignedTo', render: (text) => text || 'Unassigned' },
    {
      title: 'Status',
      dataIndex: 'Status',
      key: 'Status',
      render: (status) => (
        <Tag color={status === 'pending' ? 'red' : status === 'Working on this' ? 'blue' : 'green'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'SLA Miss',
      dataIndex: 'slaMiss',
      key: 'slaMiss',
      render: (slaMiss) => (
        <Tag color={slaMiss?.[0]?.status ? 'red' : 'green'}>
          {slaMiss?.[0]?.status ? 'True' : 'False'}
        </Tag>
      ),
    },
    {
      title: 'Current_DBLatency',
      dataIndex: 'slaMiss',
      key: 'currentDbLatency',
      render: (currentDbLatency) => {
        console.log(currentDbLatency[0]?.currentDbLatency, "this is current db latency");
        return (currentDbLatency[0]?.currentDbLatency || "--");
      },
    },
    {
      title: 'Date', dataIndex: 'date', key: 'date', render: (text) => (
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
          {text}
        </div>
      )
    },
    
  ];

  return (
    <div>  <style>
    {`
      .ant-table-thead > tr > th {
        white-space: nowrap; /* Prevent text wrapping in headers */
        overflow: hidden; /* Hide overflow text */
        text-overflow: ellipsis; /* Show ellipsis for overflow text */
      }
    `}
  </style>
     
      
      <Table dataSource={[{...data}]}   scroll={{ x: true }}  columns={columns} rowKey="ticketNumber" pagination={false}/>
      <IssueDetailesModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} selectedIssue={data}/>
    </div>
  );
};

export default TableComponent;