import React, { useState } from 'react';
import { Table, Input, Button, Drawer, Form, Select, DatePicker, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import FilterDrawer from '../components/Drawer/ActivityFilterDrawer';
import Title from 'antd/es/typography/Title';
import { Filter } from 'lucide-react';

const { Option } = Select;

const ActivityLog = () => {
  const activityLogs = useSelector((state) => state.activityLogs);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    client: '',
    region: '',
    mailSub: '',
    fromDate: null,
    toDate: null,
    timeZone: '',
    action: '',
    createdBy: '',
  });

  const handleApplyFilters = (appliedFilters) => {
    setFilters(appliedFilters);
    setIsFilterOpen(false);
  };

  const handleResetFilters = () => {
    setFilters({
      client: '',
      region: '',
      mailSub: '',
      fromDate: null,
      toDate: null,
      timeZone: '',
      action: '',
      createdBy: '',
    });
  };

  const filteredLogs = activityLogs.filter((log) => {
    const logFromDate = new Date(log.fromDate);
    const logToDate = new Date(log.toDate);
    const filterFromDate = filters.fromDate ? new Date(filters.fromDate) : null;
    const filterToDate = filters.toDate ? new Date(filters.toDate) : null;

    return (
      (filters.client ? log.client.toLowerCase().includes(filters.client.toLowerCase()) : true) &&
      (filters.region ? log.region.toLowerCase().includes(filters.region.toLowerCase()) : true) &&
      (filters.mailSub ? log.mailSub.toLowerCase().includes(filters.mailSub.toLowerCase()) : true) &&
      (filterFromDate ? logFromDate >= filterFromDate : true) &&
      (filterToDate ? logToDate <= filterToDate : true) &&
      (filters.timeZone ? log.timeZone.toLowerCase().includes(filters.timeZone.toLowerCase()) : true) &&
      (filters.action ? log.action.toLowerCase().includes(filters.action.toLowerCase()) : true) &&
      (filters.createdBy
        ? log.createdBy.fname.toLowerCase().includes(filters.createdBy.toLowerCase()) ||
        log.createdBy.lname.toLowerCase().includes(filters.createdBy.toLowerCase())
        : true)
    );
  });

  const columns = [
    {
      title: 'Sl.No',
      key: 'rowNumber',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Client',
      dataIndex: 'client',
      key: 'client',
      render: (text) => (
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
          {text}
        </div>
      ),
    },
    {
      title: 'Region',
      dataIndex: 'region',
      key: 'region',
      render: (text) => (
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
          {text}
        </div>
      ),
    },
    {
      title: 'Mail Subject',
      dataIndex: 'mailSub',
      key: 'mailSub',
      render: (text) => (
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
          {text}
        </div>
      ),
    },
    {
      title: 'From Date',
      dataIndex: 'fromDate',
      key: 'fromDate',
      render: (fromDate) => (
        <span style={{ whiteSpace: 'nowrap' }}>
         {fromDate}
        </span>
      ),
    },
    {
      title: 'From Time',
      dataIndex: 'fromTime',
      key: 'fromTime',
      render: (fromtime) => (
        <span style={{ whiteSpace: 'nowrap' }}>
         {fromtime}
        </span>
      )
    },
    {
      title: 'To Date',
      dataIndex: 'toDate',
      key: 'toDate',
      render: (toDate) => (
        <span style={{ whiteSpace: 'nowrap' }}>
         {toDate}
        </span>
      ),
    },
    {
      title: 'To Time',
      dataIndex: 'toTime',
      key: 'toTime',
      render: (totime) => (
        <span style={{ whiteSpace: 'nowrap' }}>
         {totime}
        </span>
      )
    },
    {
      title: 'Time Zone',
      dataIndex: 'timeZone',
      key: 'timeZone',
      render: (text) => (
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
          {text}
        </div>
      )
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (text) => (
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
          {text}
        </div>
      ),
    },
    {
      title: 'Created By',
      dataIndex: 'createdBy',
      key: 'createdBy',
      render: (createdBy) => (
        <span>
          {createdBy.fname} 
        </span>
      ),
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt) => new Date(createdAt * 1000).toLocaleString(),
    },
  ];

  return (
    <div className=' '>
      <style>
        {`
          .ant-table-thead > tr > th {
            white-space: nowrap; /* Prevent text wrapping in headers */
            overflow: hidden; /* Hide overflow text */
            text-overflow: ellipsis; /* Show ellipsis for overflow text */
          }
        `}
      </style>
      <Row justify="space-between" align="middle" className="px-2 py-1.5 bg-white rounded-sm mb-1">
        <Col>
          <Title level={3} style={{ color: '#1890ff' }}>Activity Logs</Title>
        </Col>
        <Col>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center bg-white mb-1 text-[#1890ff] px-4 py-2 rounded-md hover:bg-cyan-100 transition-colors"
          >
            <Filter size={18} className="mr-2" />Filter
          </button>
        </Col>
      </Row>
      <Table dataSource={filteredLogs} columns={columns} />
      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilters={handleApplyFilters}
        onResetFilters={handleResetFilters}
      />
    </div>
  );
};

export default ActivityLog;