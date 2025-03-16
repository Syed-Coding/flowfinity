import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditOutlined, DeleteOutlined, MessageOutlined } from '@ant-design/icons';
import { Table, Button, Typography, Space, Tag, Row, Col, Modal, Descriptions, Divider, Badge } from 'antd';
import EditIssueDrawer from '../components/EditeIssueDrawer';
import { Filter } from 'lucide-react';
import FilterDrawer from '../components/FilterDrawer';
import { applyFilter, deleteRow, updateIssue } from '../features/issueSlice';
import IssueLogDeleteModal from '../components/modal/IssueLogDeleteModal';
import { useNavigate } from 'react-router';
import IssueDetailesModal from '../components/modal/IssueDetailesModal';

const { Title } = Typography;
const { Text } = Typography;

const IssueLog = () => {
  
  const dispatch = useDispatch();
  const issueLogData = useSelector((state) => state.issueLogs);
  
  const filteredData = issueLogData.filter((issue) => issue.slaMiss[0]?.status === false);
  console.log('Issue log data from issue log page ..........',filteredData);

  const navigate = useNavigate()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openedit, setOpenedit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpendeleteModal, setIsOpenDeleteModal] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const editToggleDrawer = () => setOpenedit(!openedit);

  const handleEdit = (record) => {  
    setSelectedIssue(record);
    setIsDrawerOpen(true);
  };

  const handleUpdateIssue = (values) => {
    console.log(values,"this is values on edit function");
    
    dispatch(updateIssue(values));
    setIsDrawerOpen(false);
  };

  const showDeleteModal = (value) => {
    setSelectedItem(value);
    setIsOpenDeleteModal(true);
  };

  const handleDelete = (ticketNumber) => {
    dispatch(deleteRow(ticketNumber));
  };

  const showDetails = (record) => {
    setSelectedIssue(record);
    setIsModalOpen(true);
  };

  const onApplyFilters = (values) => {
    dispatch(applyFilter(values));
  };

  const handleComment=(data)=>{
    console.log('swwwwwwwwwwwww',data);
    
    navigate("/comment",{state:data})
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
      render: (status,rec) => (
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
        <Tag color={slaMiss[0]?.status ? 'red' : 'green'}>
          {slaMiss[0]?.status ? 'True' : 'False'}
        </Tag>
      ),
    },
    {
      title: 'Current_DBLatency',
      dataIndex: 'slaMiss',
      key: 'slaMiss',
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
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space>
          <Button type="link" icon={<EditOutlined />} onClick={() => handleEdit(record)} />
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
            count={record.Comment.length}
            size="small"
            style={{
              backgroundColor: '#52c41a',
              fontSize: '10px',
              marginRight: -7,
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
  ];

  return (
    <div>
      <style>
        {`
          .ant-table-thead > tr > th {
            white-space: nowrap; /* Prevent text wrapping in headers */
            overflow: hidden; /* Hide overflow text */
            text-overflow: ellipsis; /* Show ellipsis for overflow text */
          }
        `}
      </style>

      <div className=' ' style={{ marginBottom: 10 }}>
        <Row justify="space-between" align="middle"className="px-2 py-1.5 bg-white rounded-sm mb-1">
          <Col>
            <Title level={3} style={{ color: '#1890ff' }}>Issues Log</Title>
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
        <div style={{ overflowX: 'auto' }}>
          <Table
            columns={columns}
            dataSource={filteredData}
            rowKey="ticketNumber"
            pagination={{ pageSize: 10 }}
            scroll={{ x: true }}
          />
        </div>
      </div>

      <EditIssueDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        selectedIssue={selectedIssue}
        updateIssue={handleUpdateIssue}
      />

      <FilterDrawer onApplyFilters={onApplyFilters} isOpen={openedit} onClose={editToggleDrawer} />
      <IssueDetailesModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} selectedIssue={selectedIssue}/>
      <IssueLogDeleteModal
        isModalVisible={isOpendeleteModal}
        setIsModalVisible={setIsOpenDeleteModal}
        selectedItem={selectedItem}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default IssueLog;