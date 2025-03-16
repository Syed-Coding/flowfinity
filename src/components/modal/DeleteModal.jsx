import { Modal, Button } from 'antd';

const DeleteModal = ({ isModalVisible,setIsModalVisible,selectedItem,handleDelete}) => {
    const handleOk = () => {
        // Perform delete action here
       handleDelete(selectedItem.id);
        setIsModalVisible(false); // Close the modal
    };

    const handleCancel = () => {
        setIsModalVisible(false); // Close the modal
    };

    return (
        <Modal
            title="Delete Item"
            open={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="cancel" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button
                    key="delete"
                    type="primary"
                    danger
                    onClick={handleOk}
                >
                    Delete
                </Button>,
            ]}
            centered
        >
            <p>Are you sure you want to delete this item?</p>
           
        </Modal>
    );
};

export default DeleteModal;