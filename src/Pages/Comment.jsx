import { useState } from 'react';
import { Avatar, Form, Button, List, Input, Upload, message, Image } from 'antd';
import { useLocation } from 'react-router-dom';
import { PlusOutlined, SendOutlined } from '@ant-design/icons';
import CustomComment from '../components/CustomComment';
import TableComponent from '../components/Table';
import './CommentSection.css'; // Import custom CSS
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addcomments, deleteComment } from '../features/issueSlice';
import { updatecomments } from '../features/issueSlice';
const { TextArea } = Input;

//getBase64 that converts a file (like an image or document) into a Base64-encoded string. 
// Base64 encoding is a way to represent binary data (like files) as a text string, 
// which is useful for things like embedding images in web pages or sending files over APIs.
//This is useful for scenarios where you need to work with file data as text, such as uploading images to a server or embedding them directly in HTML or CSS.
const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader(); //built-in JavaScript object to read the contents of files asynchronously.
        reader.readAsDataURL(file); //method reads the file and converts it into a Base64-encoded data URL
        reader.onload = () => resolve(reader.result);
        //The onload event is triggered when the file has been successfully read.
        //When this happens, the resolve function is called with the result (reader.result), which is the Base64-encoded data URL.
        reader.onerror = (error) => reject(error);
    });

const CommentSection = () => {
    const location = useLocation();
    console.log('location from comment',location);
    
    const dispatch = useDispatch();
  const comments = useSelector((state) => {
    console.log('selector from comment',state);
    
    return state.issueLogs});
    
    const updatedNewData = comments?.filter(x => x.ticketNumber === location.state.ticketNumber)
    console.log('comments from comment',comments);
    
    const [value, setValue] = useState('');
    const [fileList, setFileList] = useState([]);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');

    const handleSubmit = () => {
        if (!value) {
            message.warning('Please enter a comment!');
            return;
        }
    
        const newComment = {
            id: Date.now(), // Add a unique ID for each comment
            author: 'Syed I', // Replace with actual user name
            content: value,
            datetime: new Date().toLocaleString(), // Add proper date and time
            file: fileList.map((file) => ({
                url: file.url || file.thumbUrl, // Ensure high-resolution URL is used
                thumbUrl: file.thumbUrl, // Optional: Keep thumbnail URL for smaller previews
            })),
        };
    
       
        dispatch(addcomments({newComment,updatedNewData}))
        setValue('');
        setFileList([]);
    };

    const handleFileChange = ({ fileList: newFileList }) => setFileList(newFileList);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };

    const handleEditComment = (id, newContent) => {
   
        dispatch(updatecomments({id,newContent,updatedNewData}))
    };

    const handleDeleteComment = (id) => {
        dispatch(deleteComment({id,updatedNewData}))
        
    };

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );

    return (
        <div className="comment-section-container">
            {location?.state && <TableComponent data={location?.state} />}
            {!location?.state.slaPage && (
                <div className="comment-input-container">
                    <Avatar className="comment-avatar">SI</Avatar>
                    <div className="comment-input-wrapper">
                        <Form.Item className='!mb-2'>
                            <div className="comment-textarea-container">
                                <TextArea
                                    rules={[{ required: true, message: 'comment area is required' }]}
                                    rows={4}
                                    onChange={(e) => setValue(e.target.value)}
                                    value={value}
                                    placeholder="Write a comment..."
                                    autoSize={{ minRows: 3, maxRows: 6 }}
                                    className="comment-textarea"
                                />
                                <Button
                                    type="primary"
                                    icon={<SendOutlined />}
                                    onClick={handleSubmit}
                                    className="comment-submit-button"
                                >
                                    Post
                                </Button>
                            </div>
                        </Form.Item>
                        <Form.Item className='!m-0'>
                            <Upload
                                className='!mb-0'
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={handleFileChange}
                                beforeUpload={() => false} // Prevent automatic upload
                                multiple
                                maxCount={4}
                            >
                                {fileList.length >= 4 ? null : uploadButton}
                            </Upload>
                        </Form.Item>
                    </div>
                </div>
            )}

            <div className="comment-list-container ml-9 ">
                <List 
                    dataSource={updatedNewData[0]?.Comment}
                    header={`${updatedNewData[0]?.Comment?.length || 0} ${updatedNewData[0]?.Comment?.length > 1 ? 'comments' : 'comment'}`}
                    itemLayout="horizontal"
                    renderItem={(item) => (
                        <CustomComment
                            {...item}
                            onEdit={(newContent) => handleEditComment(item.id, newContent)}
                            onDelete={() => handleDeleteComment(item.id)}
                        />
                    )}
                />
            </div>

            {previewImage && (
                <Image
                    wrapperStyle={{
                        display: 'none',
                    }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                />
            )}
        </div>
    );
};

export default CommentSection;