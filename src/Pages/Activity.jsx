import { Form, Input, DatePicker,message, TimePicker, Select, Button, Row, Col } from 'antd';
import dayjs from 'dayjs'; // For date and time handling
import { createActivity } from '../features/activitySlice';
import { useDispatch } from 'react-redux';
import { XCircle } from 'lucide-react';

const { Option } = Select;

const ActivityForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log('Form values: from activity', values);
    // Convert date and time to the desired format
    const formattedValues = {
      ...values,
      fromDate: values.fromDate.format('YYYY-MM-DD'),
      fromTime: values.fromTime.format('h:mm A'),
      toDate: values.toDate.format('YYYY-MM-DD'),
      toTime: values.toTime.format('h:mm A'), // Added To Time
      id: Date.now(),
      createdAt: dayjs().unix(), // Current timestamp
      createdBy: { // Static createdBy value
        fname: 'Syed',
        lname: 'I',
        email: 'SI@example.com',
        role: 'Member',
      },
    };
    console.log('Formatted values: from activity', formattedValues);
    // Dispatch the action to create the activity
    dispatch(createActivity(formattedValues));
    form.resetFields();
    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'Form submitted successfully!',
      });
    };
    success()

  };

  return (
    <div className='bg-white rounded-md p-6 shadow-lg border border-cyan-100'>
      {contextHolder}
      <h1 className="text-2xl font-semibold text-cyan-700 mb-6">
        Create New Activity
      </h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}

      >
        {/* Client and Region in the same row */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Client"
              name="client"
              rules={[{ required: true, message: 'Please select the client!' }]}
            >
              <Select showSearch allowClear placeholder="Select client">
                <Option value="Client1">Client 1</Option>
                <Option value="Client2">Client 2</Option>
                <Option value="Client3">Client 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Region"
              name="region"
              rules={[{ required: true, message: 'Please select the region!' }]}
            >
              <Select allowClear placeholder="Select region" showSearch>
                <Option value="Region1">Region 1</Option>
                <Option value="Region2">Region 2</Option>
                <Option value="Region3">Region 3</Option>
                
                <Option value="Prod">Prod</Option>


              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* Mail Subject */}
        <Form.Item
          label="Mail Subject"
          name="mailSub"
          rules={[{ required: true, message: 'Please input the mail subject!' }]}
        >
          <Input.TextArea placeholder="Enter mail subject" />
        </Form.Item>

        {/* From Date and From Time in the same row */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="From Date"
              name="fromDate"
              rules={[{ required: true, message: 'Please select the from date!' }]}
            >
              <DatePicker format="D/M/YYYY" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="From Time"
              name="fromTime"
              rules={[{ required: true, message: 'Please select the from time!' }]}
            >
              <TimePicker format="h:mm A" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        {/* To Date and To Time in the same row */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="To Date"
              name="toDate"
              rules={[{ required: true, message: 'Please select the to date!' }]}
            >
              <DatePicker format="D/M/YYYY" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="To Time"
              name="toTime"
              rules={[{ required: true, message: 'Please select the to time!' }]}
            >
              <TimePicker format="h:mm A" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        {/* Time Zone */}
        <Form.Item
          label="Time Zone"
          name="timeZone"
          rules={[{ required: true, message: 'Please select the time zone!' }]}
        >
          <Select placeholder="Select time zone" showSearch allowClear>
            <Option value="EST">EST</Option>
            <Option value="PST">IST</Option>
            <Option value="CST">MST</Option>
          </Select>
        </Form.Item>

        {/* Action */}
        <Form.Item
          label="Action"
          name="action"
          rules={[{ required: true, message: 'Please input the action!' }]}
        >
          <Input placeholder="Enter action" />
        </Form.Item>

        <div className='flex  justify-end space-x-6 '>
          <Button
            className="!bg-gray-100 !text-gray-700 !px-4 py-2 !rounded-md !hover:bg-gray-200 !transition-colors"
            onClick={() => form.resetFields()}
            icon={<XCircle size={18} />}
          >
            Cancel
          </Button>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>

      </Form>
    </div>
  );
};

export default ActivityForm;