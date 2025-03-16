
import { Drawer, Form, Input, Button, Select } from 'antd';
import { Option } from 'antd/es/mentions';

const CreateUpdateDrawer = ({ visible, onClose, onSubmit, userName }) => {

    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        // Add user name and current time to the form values
        const newUpdate = {
            ...values,
            name: userName, // Automatically include the user's name
            date: new Date().toLocaleDateString(), // Automatically include the current date
            isRead: false,
        };
        onSubmit(newUpdate); // Pass the updated values to the parent component
        form.resetFields(); // Reset form fields
        onClose(false); // Close the drawer

    };

    return (
        <>

            <Drawer
                title="Create New Update"
                width={400}
                onClose={() => onClose(false)}
                open={visible}
                footer={
                    <div style={{ textAlign: 'right' }}>
                        <Button onClick={() => onClose(false)} style={{ marginRight: 8 }}>
                            Cancel
                        </Button>
                        <Button type="primary" onClick={() => form.submit()}>
                            Submit
                        </Button>
                    </div>
                }
            >
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    {/* Designation Field */}


                    {/* Update Field */}
                    <Form.Item
                        name="update"
                        label=" New Update"
                        rules={[{ required: true, message: 'Please enter the update!' }]}
                    >
                        <Input.TextArea placeholder="Enter the update" rows={4} />
                    </Form.Item>
                    <Form.Item
                        name="confirmedBy"
                        label="Confirmed by"
                        rules={[{ required: true, message: 'Please select Confirmed by' }]}
                    >
                        <Select
                        showSearch
                        placeholder="Confirmed By "
                        >
                            <Option value="syed">syed</Option>
                            <Option value="Ram">Ram</Option>
                            <Option value="sham">sham</Option>
                            <Option value="john">john</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    );
};

export default CreateUpdateDrawer;