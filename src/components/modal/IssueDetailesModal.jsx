
import {Button, Descriptions, Divider, Modal,Tag,Typography} from 'antd'

const IssueDetailesModal = ({isModalOpen,setIsModalOpen,selectedIssue}) => {
    const { Text } = Typography;
  return (
    <Modal
        title="Issue Details"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="close" type="primary" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>,
        ]}
      >
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
            <Text>{selectedIssue?.issueAssignedTo || 'Unassigned'}</Text>
          </Descriptions.Item>
          <Descriptions.Item label={<Text strong>Status</Text>}>
            <Tag
              color={selectedIssue?.Status === 'pending' ? 'red'
                : selectedIssue?.Status === 'Working on this' ? 'blue'
                  : 'green'}
            >
              {selectedIssue?.Status}
            </Tag>
          </Descriptions.Item>
          <Descriptions.Item label={<Text strong>SLA Miss</Text>}>
            <Tag color={selectedIssue?.slaMiss?.status ? 'red' : 'green'}>
              {selectedIssue?.slaMiss?.status ? 'True' : 'False'}
            </Tag>
          </Descriptions.Item>
          <Descriptions.Item label={<Text strong>Current DB Latency</Text>}>
            <Text>{selectedIssue?.slaMiss[0]?.currentDbLatency || 'N/A'}</Text>
          </Descriptions.Item>
          <Descriptions.Item label={<Text strong>Date</Text>}>
            <Text>{selectedIssue?.date}</Text>
          </Descriptions.Item>
        </Descriptions>

        <Divider />

        <Text strong>Details:</Text>
        <p style={{ marginTop: 8 }}>{selectedIssue?.issuedetails}</p>
      </Modal>
  )
}

export default IssueDetailesModal
