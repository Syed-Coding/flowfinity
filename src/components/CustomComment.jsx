import { useState } from 'react';
import { Avatar, Button, Input, Image } from 'antd';
import { EditOutlined, DeleteOutlined, SaveOutlined, CloseOutlined } from '@ant-design/icons';
import './CustomComment.css'; // Import custom CSS
import { useLocation } from 'react-router';

const { TextArea } = Input;

const CustomComment = ({ author, content, datetime, file, onEdit, onDelete }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [edContent, setEdContent] = useState(content);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
     const location = useLocation();

 
    const initials = author
        ?.split(' ')
        .map((name) => name[0])
        .join('')
        .toUpperCase() || 'SI'

    const handleEdit = () => setIsEdit(true);

    const handleCancel = () => {
        setIsEdit(false);
        setEdContent(content); // Reset the content to the original value
    };

    const handleSave = () => {
        setIsEdit(false);
        onEdit(edContent); // Pass the updated content to the parent component
    };

    const handleDelete = () => {
        onDelete(); // Notify the parent component to delete this comment
    };

    const handleImagePreview = (file) => {
        setPreviewImage(file.url); // Use the high-resolution URL
        setPreviewVisible(true);
    };

    return (
        <div className="custom-comment-container">
            <Avatar className="comment-avatar">{initials}</Avatar>
            <div className="comment-content-wrapper">
                <div className="comment-author">{author}</div>
                {isEdit ? (
                    <TextArea
                        className="comment-edit-textarea"
                        value={edContent}
                        onChange={(e) => setEdContent(e.target.value)}
                        rows={4}
                        autoSize={{ minRows: 3, maxRows: 6 }}
                    />
                ) : (
                    <div className="comment-text">{content}</div>
                )}
                {file && (
                    <div className="comment-images">
                        {file.map((f, index) => (
                            <Image
                                key={index}
                                src={f.url || f.thumbUrl}
                                alt={`preview-${index}`}
                                className="comment-image"
                                width={200} // Set a reasonable width for real size
                                onClick={() => handleImagePreview(f)}
                                preview={false} // Disable preview on thumbnail
                            />
                        ))}
                    </div>
                )}
                <div className="comment-datetime">{datetime}</div>
            </div>
            {!location?.state.slaPage &&(
                <div className="comment-actions">
                {isEdit ? (
                    <>
                        <Button
                            type="text"
                            icon={<SaveOutlined />}
                            onClick={handleSave}
                            className="comment-action-button save-button"
                        />
                        <Button
                            type="text"
                            icon={<CloseOutlined />}
                            onClick={handleCancel}
                            className="comment-action-button cancel-button"
                        />
                    </>
                ) : (
                    <>
                        <Button
                            type="text"
                            icon={<EditOutlined />}
                            onClick={handleEdit}
                            className="comment-action-button edit-button"
                        />
                        <Button
                            type="text"
                            icon={<DeleteOutlined />}
                            onClick={handleDelete}
                            className="comment-action-button delete-button"
                        />
                    </>
                )}
            </div>
            )}
            
            {previewVisible && (
                <Image
                    style={{ display: 'none' }}
                    preview={{
                        visible: previewVisible,
                        onVisibleChange: (visible) => setPreviewVisible(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                />
            )}
        </div>
    );
};

export default CustomComment;