import React, { useState } from 'react';
import { Drawer, Form, Select, Input, Button, DatePicker } from 'antd';

const { Option } = Select;

const FilterDrawer = ({ isOpen, onClose, onApplyFilters, onResetFilters }) => {
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

  const handleApplyFilters = () => {
    // Format dates as 'YYYY-MM-DD' before passing to onApplyFilters
    const formattedFilters = {
      ...filters,
      fromDate: filters.fromDate ? filters.fromDate.format('YYYY-MM-DD') : null,
      toDate: filters.toDate ? filters.toDate.format('YYYY-MM-DD') : null,
    };
    onApplyFilters(formattedFilters);

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
    onResetFilters();
  };

  const clients = ['Client1', 'Client2', 'Client C'];
  const regions = ['Region', 'Region 2', 'Region 3', "Prod"];

  return (
    <Drawer title="Filter Activity Logs" placement="right" width={350} onClose={onClose} open={isOpen}>
      <Form layout="vertical">
        <Form.Item label="Client">
          {/* <Input
            placeholder="Enter client"
            value={filters.client}
            onChange={(e) => setFilters({ ...filters, client: e.target.value })}
          /> */}
          <Select
            showSearch
            placeholder="Select a client"
            value={filters.client || undefined}
            onChange={(value) => setFilters({ ...filters, client: value })}
            options={clients.map(client => ({ value: client, label: client }))}
            allowClear
          />
        </Form.Item>

        <Form.Item label="Region">
          {/* <Input
            placeholder="Enter region"
            value={filters.region}
            onChange={(e) => setFilters({ ...filters, region: e.target.value })}
          /> */}

          <Select
            showSearch
            placeholder="Select a region"
            value={filters.region || undefined}
            onChange={(value) => setFilters({ ...filters, region: value })}
            options={regions.map(region => ({ value: region, label: region }))}
            allowClear
          />
        </Form.Item>

        <Form.Item label="Mail Subject">
          <Input
            placeholder="Enter mail subject"
            value={filters.mailSub}
            onChange={(e) => setFilters({ ...filters, mailSub: e.target.value })}
          />
        </Form.Item>

        <Form.Item label="From Date">
          <DatePicker
            style={{ width: '100%' }}
            value={filters.fromDate}
            onChange={(date) => setFilters({ ...filters, fromDate: date })}
          />
        </Form.Item>

        <Form.Item label="To Date">
          <DatePicker
            style={{ width: '100%' }}
            value={filters.toDate}
            onChange={(date) => setFilters({ ...filters, toDate: date })}
          />
        </Form.Item>

        {/* <Form.Item label="Time Zone">
          <Input
            placeholder="Enter time zone"
            value={filters.timeZone}
            onChange={(e) => setFilters({ ...filters, timeZone: e.target.value })}
          />
        </Form.Item>

        <Form.Item label="Action">
          <Input
            placeholder="Enter action"
            value={filters.action}
            onChange={(e) => setFilters({ ...filters, action: e.target.value })}
          />
        </Form.Item>

        <Form.Item label="Created By">
          <Input
            placeholder="Enter created by"
            value={filters.createdBy}
            onChange={(e) => setFilters({ ...filters, createdBy: e.target.value })}
          />
        </Form.Item> */}

        <Form.Item>
          <Button type="primary" onClick={handleApplyFilters}>
            Apply Filters
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={handleResetFilters}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default FilterDrawer;