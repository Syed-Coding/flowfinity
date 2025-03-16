import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Modal, Tag, Typography, Row, Col, Badge, Space, Descriptions, Divider } from "antd";
import { Filter,  Trash  } from "lucide-react";
import {DeleteOutlined, MessageOutlined} from "@ant-design/icons" 


import FilterDrawer from "../components/FilterDrawer";
import { applyFilter, deleteRow } from "../features/issueSlice";
import IssueLogDeleteModal from "../components/modal/IssueLogDeleteModal";
import { useNavigate } from "react-router";

const { Title, Text } = Typography;

const SlaSearch = () => {
  const dispatch = useDispatch();
  const issueLogData = useSelector((state) => state.issueLogs);
  console.log(issueLogData,"this is come from sla search ");
  
  const navigate =useNavigate()

  // State for managing modals and selected data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIssueDetailsModalOpen, setIsIssueDetailsModalOpen] = useState(false);
  const [isOpendeleteModal, setIsOpenDeleteModal] = useState(false);
  const [selectedSlaDetails, setSelectedSlaDetails] = useState(null);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [openedit, setOpenedit] = useState(false); // For filter drawer

  // Filter data to include only rows where slaMiss.status is true
  const filteredData = issueLogData.filter(
    (issue) => issue.slaMiss && issue.slaMiss[0]?.status === true
  );

  // Show SLA details in modal
  const showSlaDetails = (slaMiss) => {
    setSelectedSlaDetails(slaMiss);
    setIsModalOpen(true);
  };

  // Show issue details in modal
  const showIssueDetails = (record) => {
    setSelectedIssue(record);
    setIsIssueDetailsModalOpen(true);
  };

  // Toggle filter drawer
  const editToggleDrawer = () => setOpenedit(!openedit);

  // Apply filters
  const onApplyFilters = (values) => {
    dispatch(applyFilter(values));
  };

  // Handle delete functionality
  const showDeleteModal = (value) => {
    setSelectedItem(value);
    setIsOpenDeleteModal(true);
  };

  const handleDelete = (ticketNumber) => {
    dispatch(deleteRow(ticketNumber));
  };
  const handleComment=(data)=>{
    const newState = { ...data, slaPage: true };
    navigate("/comment", { state: newState });
  }

  // Table columns
  const columns = [
    {
      title: "#",
      key: "rowNumber",
      render: (text, record, index) => index + 1,
    },
    { title: "Ticket No", dataIndex: "ticketNumber", key: "ticketNumber" },
    {
      title: "Client",
      dataIndex: "Client",
      key: "Client",
      render: (text) => (
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
          {text}
        </div>
      ),
    },
    {
      title: "Region",
      dataIndex: "Region",
      key: "Region",
      render: (text) => (
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
          {text}
        </div>
      ),
    },
    {
      title: "Issue Classification",
      dataIndex: "issueClassification",
      key: "issueClassification",
    },
    {
      title: "Issue Details",
      dataIndex: "issuedetails",
      key: "issuedetails",
      render: (text, record) => (
        <Button type="link" onClick={() => showIssueDetails(record)}>
          {text.length > 15 ? `${text.substring(0, 15)}...` : text}
        </Button>
      ),
    },
    { title: "Shift Handled by", dataIndex: "ShiftHandledBy", key: "ShiftHandledBy" },
    {
      title: "Issue Assigned To",
      dataIndex: "issueAssignedTo",
      key: "issueAssignedTo",
      render: (text) => text || "Unassigned",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      render: (status) => (
        <Tag color={status === "pending" ? "red" : status === "Working on this" ? "blue" : "green"}>
          {status}
        </Tag>
      ),
    },
    {
      title: "SLA Miss",
      dataIndex: "slaMiss",
      key: "slaMiss",
      render: (slaMiss) => (
        <Tag color={slaMiss[0]?.status ? "red" : "green"}>
          {slaMiss[0]?.status ? "True" : "False"}
        </Tag>
      ),
    },
    {
      title: "Max DB Latency",
      dataIndex: "slaMiss",
      key: "slaMiss",
      render: (currentDbLatency) => {
        console.log(currentDbLatency[0]?.maxDblatency, "this is current db latency");
        return currentDbLatency[0]?.maxDblatency || "--";
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => (
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
          {text}
        </div>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space>
          <Button type="link" icon={<DeleteOutlined />} danger onClick={() => showDeleteModal(record)} />
        </Space>
      ),
    },
    {
      title: 'Comment',
      key: 'comment',
      render: (text, record) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Badge
            className='!absolute !ml-5 !mb-4'
            count={record.commentsTotal || 3}
            size="small"
            style={{
              backgroundColor: '#52c41a',
              fontSize: '10px',
              marginRight: -8,
            }}
          />
         
          <Button
          onClick={()=>handleComment(record)}
            type="link"
            icon={<MessageOutlined style={{ fontSize: '18px' }} />}
            style={{
              padding: 0,
              margin: 0,
              lineHeight: 1,
            }}
          />
        </div>
      ),
    },
    {
      title: "SLA Details",
      key: "slaDetails",
      render: (text, record) => (
        <Button type="link" onClick={() => showSlaDetails(record.slaMiss)}>
          View Details
        </Button>
      ),
    },
  ];

  return (
    <div >
      <style>
        {`
          .ant-table-thead > tr > th {
            white-space: nowrap; /* Prevent text wrapping in headers */
            overflow: hidden; /* Hide overflow text */
            text-overflow: ellipsis; /* Show ellipsis for overflow text */
          }
        `}
      </style>

      <div className=" " style={{ marginBottom: 10 }}>
        <Row justify="space-between" align="middle" className="px-2 py-1.5 bg-white rounded-sm mb-1">
          <Col>
            <Title level={3} style={{ color: "#1890ff" }}>SLA Search</Title>
          </Col>
          <Col>
            <button
              onClick={editToggleDrawer}
              className="flex items-center bg-white mb-1 text-[#1890ff] px-4 py-2 rounded-md hover:bg-cyan-100 transition-colors"
            >
              <Filter size={18} className="mr-2" />Filter
            </button>
          </Col>
        </Row>
        <div style={{ overflowX: "auto" }}>
          <Table
            columns={columns}
            dataSource={filteredData}
            rowKey="ticketNumber"
            pagination={{ pageSize: 10 }}
            scroll={{ x: true }}
          />
        </div>
      </div>

      {/* Filter Drawer */}
      <FilterDrawer onApplyFilters={onApplyFilters} isOpen={openedit} onClose={editToggleDrawer} />

      {/* Issue Details Modal */}
      <Modal
        title="Issue Details"
        open={isIssueDetailsModalOpen}
        onCancel={() => setIsIssueDetailsModalOpen(false)}
        footer={[
          <Button key="close" type="primary" onClick={() => setIsIssueDetailsModalOpen(false)}>
            Close
          </Button>,
        ]}
      >
        {selectedIssue && (
          <Descriptions bordered column={1} size="middle">
            <Descriptions.Item label={<Text strong>Client</Text>}>
              <Text>{selectedIssue?.Client}</Text>
            </Descriptions.Item>
            <Descriptions.Item label={<Text strong>Region</Text>}>
              <Text>{selectedIssue?.Region}</Text>
            </Descriptions.Item>
            <Descriptions.Item label={<Text strong>Issue Classification</Text>}>
              <Text>{selectedIssue?.issueClassification}</Text>
            </Descriptions.Item>
            <Descriptions.Item label={<Text strong>Handled By</Text>}>
              <Text>{selectedIssue?.ShiftHandledBy}</Text>
            </Descriptions.Item>
            <Descriptions.Item label={<Text strong>Assigned To</Text>}>
              <Text>{selectedIssue?.issueAssignedTo || "Unassigned"}</Text>
            </Descriptions.Item>
            <Descriptions.Item label={<Text strong>Status</Text>}>
              <Tag
                color={selectedIssue?.Status === "pending" ? "red"
                  : selectedIssue?.Status === "Working on this" ? "blue"
                    : "green"}
              >
                {selectedIssue?.Status}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label={<Text strong>SLA Miss</Text>}>
              <Tag color={selectedIssue?.slaMiss?.status ? "red" : "green"}>
                {selectedIssue?.slaMiss?.status ? "True" : "False"}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label={<Text strong>Current DB Latency</Text>}>
              <Text>{selectedIssue?.slaMiss[0]?.currentDbLatency || "N/A"}</Text>
            </Descriptions.Item>
            <Descriptions.Item label={<Text strong>Date</Text>}>
              <Text>{selectedIssue?.date}</Text>
            </Descriptions.Item>
          </Descriptions>
        )}
        <Divider />
        <Text strong>Details:</Text>
        <p style={{ marginTop: 8 }}>{selectedIssue?.issuedetails}</p>
      </Modal>

      {/* SLA Details Modal */}
      <Modal
        title="SLA Details"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="close" type="primary" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>,
        ]}
      >
        {selectedSlaDetails && (
          <div>
            <p><strong>Current DB Latency:</strong> {selectedSlaDetails[0].currentDbLatency}</p>
            <p><strong>Max DB Latency:</strong> {selectedSlaDetails[0].maxDblatency}</p>
            <p><strong>SLA Details:</strong> {selectedSlaDetails[0].sladetails}</p>
          </div>
        )}
      </Modal>

      {/* Delete Modal */}
      <IssueLogDeleteModal
        isModalVisible={isOpendeleteModal}
        setIsModalVisible={setIsOpenDeleteModal}
        selectedItem={selectedItem}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default SlaSearch;