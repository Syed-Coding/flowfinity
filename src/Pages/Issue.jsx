import { useState } from "react";
import { Form, Input, Select, Button, Row, Col,message } from "antd";
import { CheckCircle, XCircle } from "lucide-react";
import { addIssueData } from '../features/issueSlice';
import { useDispatch } from "react-redux";
import dayjs from 'dayjs';

const { TextArea } = Input;

const AddTableDataForm = () => {
    const [form] = Form.useForm();
    const [selectedRegion, setSelectedRegion] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const clients = ["Client A", "Client B", "Client C"];
    const regions = ["Region 1", "Region 2", "Region 3", "Prod"];
    const dispatch = useDispatch();


    const handleSubmit = (values) => {
        const today = dayjs().format('YYYY-MM-DD');
        const addnewissue = {
            id: Date.now(),
            ticketNumber: `HYT${Date.now()}`,
            Client: values.client,
            Region: values.region,
            issueClassification: values.issueClassification,
            issuedetails: values.issueDetails,
            ShiftHandledBy: "Michel",
            Status: "pending",
            date: today,
            slaMiss: [
                {
                    status: false,
                    currentDbLatency: values.currentDbLatency || null,
                    maxDblatency: null,
                    sladetails: null,
                }
            ],
            commentsTotal: 2,
            Comment: [
                
            ],
        };
        dispatch(addIssueData(addnewissue));

     
        form.resetFields();
        const success = () => {
            messageApi.open({
              type: 'success',
              content: 'Form submitted successfully!',
            });
          };
          success()
    };

    const handleCancel = () => {
        form.resetFields();
       
    };

    const handleRegionChange = (value) => {
        if (value === "Prod") {
            setSelectedRegion(true);
        } else {
            setSelectedRegion(false)
        }

    };



    return (
        <div className="flex flex-col bg-white rounded-md p-6 shadow-lg border border-cyan-100">
               {contextHolder}
            <h1 className="text-2xl font-semibold text-cyan-700 mb-6">
                Add New Issue
            </h1>

            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                autoComplete="off"
            >
                {/* Client & Region Row */}
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Client"
                            name="client"
                            rules={[{ required: true, message: "Client is required" }]}
                        >
                            <Select showSearch placeholder="Select Client">
                                {clients.map((client, index) => (
                                    <Select.Option key={index} value={client}>
                                        {client}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            label="Region"
                            name="region"
                            rules={[{ required: true, message: "Region is required" }]}
                        >
                            <Select showSearch placeholder="Select Region" onChange={handleRegionChange}>
                                {regions.map((region, index) => (
                                    <Select.Option key={index} value={region}>
                                        {region}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                {/* Current DB Latency */}

                <Form.Item
                    label="Current DB Latency"
                    name="currentDbLatency"
                    rules={[{ required: selectedRegion, message: "Current DB Latency is required for Prod" }]}
                >
                    <Input type="number" placeholder="Enter Current DB Latency" />
                </Form.Item>


                {/* Issue Classification */}
                <Form.Item
                    label="Issue Classification"
                    name="issueClassification"
                    rules={[{ required: true, message: "Issue Classification is required" }]}
                >
                    <Input placeholder="Enter Issue Classification" />
                </Form.Item>

                {/* Issue Details */}
                <Form.Item
                    label="Issue Details"
                    name="issueDetails"
                    rules={[{ required: true, message: "Issue Details are required" }]}
                >
                    <TextArea rows={3} placeholder="Enter Issue Details" />
                </Form.Item>

                {/* Buttons */}
                <div className="flex justify-end space-x-4">
                    {/* Cancel Button */}
                    <Button
                        className="!bg-gray-100 !text-gray-700 !px-4 py-2 !rounded-md !hover:bg-gray-200 !transition-colors"
                        onClick={handleCancel}
                        icon={<XCircle size={18} />}
                    >
                        Cancel
                    </Button>

                    {/* Cyan Themed Submit Button */}
                    <Button
                        htmlType="submit"
                        className="!bg-cyan-500 !text-white !px-4 !py-2 !rounded-md hover:!bg-cyan-600 !transition-colors !flex !items-center"
                    >
                        <CheckCircle size={18} className="mr-2" />
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default AddTableDataForm;