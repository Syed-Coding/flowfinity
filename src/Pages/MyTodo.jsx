import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined, CheckOutlined } from '@ant-design/icons';
import './MyTodo.css'; // Custom CSS for animations and styling

const { TextArea } = Input;

const MyTodo = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Task 1',
      status: 'todo',
      createdAt: new Date().toLocaleString(),
    },
    {
      id: 2,
      title: 'Task 2',
      status: 'in-progress',
      createdAt: new Date().toLocaleString(),
    },
    {
      id: 3,
      title: 'Task 3',
      status: 'done',
      createdAt: new Date().toLocaleString(),
    },
  ]);

  const [editingTask, setEditingTask] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim() === '') return;
    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      status: 'todo',
      createdAt: new Date().toLocaleString(),
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setNewTaskTitle(task.title);
  };

  const handleUpdateTask = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editingTask.id ? { ...task, title: newTaskTitle } : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
    setNewTaskTitle('');
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData('taskId', taskId);
    e.target.classList.add('dragging'); // Add dragging class for feedback
  };

  const handleDragEnd = (e) => {
    e.target.classList.remove('dragging'); // Remove dragging class
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.target.classList.add('drag-over'); // Add drag-over class for feedback
  };

  const handleDragLeave = (e) => {
    e.target.classList.remove('drag-over'); // Remove drag-over class
  };

  const handleDrop = (e, status) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    const updatedTasks = tasks.map((task) =>
      task.id === parseInt(taskId) ? { ...task, status } : task
    );
    setTasks(updatedTasks);
    e.target.classList.remove('drag-over'); // Remove drag-over class
  };

  const renderTasks = (status) => {
    return tasks
      .filter((task) => task.status === status)
      .map((task) => (
        <div
          key={task.id}
          className="task-card p-4 mb-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-move"
          draggable
          onDragStart={(e) => handleDragStart(e, task.id)}
          onDragEnd={handleDragEnd}
        >
          <div className="flex justify-between items-center">
            <div>
              <span className="font-semibold text-gray-800">{task.title}</span>
              <p className="text-sm text-gray-500 mt-1">Created: {task.createdAt}</p>
            </div>
            <div className="flex space-x-2">
              <Button
                type="text"
                icon={<EditOutlined />}
                onClick={() => handleEditTask(task)}
                className="text-blue-500 hover:text-blue-700"
              />
              <Button
                type="text"
                icon={<DeleteOutlined />}
                onClick={() => handleDeleteTask(task.id)}
                className="text-red-500 hover:text-red-700"
              />
            </div>
          </div>
        </div>
      ));
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex mb-6">
        <Input
          placeholder="Add a new task"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          className="flex-1 bg-white rounded-lg shadow-sm"
          style={{ marginRight: '12px' }}
        />
        <Button
          type="primary"
          icon={editingTask ? <CheckOutlined /> : <PlusOutlined />}
          onClick={editingTask ? handleUpdateTask : handleAddTask}
          className="rounded-lg shadow-sm"
        >
          {editingTask ? 'Update Task' : 'Add Task'}
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className="p-4 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg shadow-sm"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, 'todo')}
        >
          <h2 className="text-lg font-bold mb-4 text-blue-800">To Do</h2>
          {renderTasks('todo')}
        </div>
        <div
          className="p-4 bg-gradient-to-b from-yellow-50 to-yellow-100 rounded-lg shadow-sm"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, 'in-progress')}
        >
          <h2 className="text-lg font-bold mb-4 text-yellow-800">In Progress</h2>
          {renderTasks('in-progress')}
        </div>
        <div
          className="p-4 bg-gradient-to-b from-green-50 to-green-100 rounded-lg shadow-sm"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, 'done')}
        >
          <h2 className="text-lg font-bold mb-4 text-green-800">Done</h2>
          {renderTasks('done')}
        </div>
      </div>
    </div>
  );
};

export default MyTodo;