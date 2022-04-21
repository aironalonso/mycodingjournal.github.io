import React, { useRef, useState } from 'react';
import TaskList from './TaskList';

const taskInfo = (localStorage.getItem('taskDetails')) ? JSON.parse(localStorage.getItem('taskDetails')) : [];

const TaskForm = () => {
    const [taskList, setTaskList] = useState(taskInfo);

    const dateRef = useRef();
    const titleRef = useRef();
    const toDoListREf = useRef();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const taskObject = {
            id: Date.now(),
            date: dateRef,
            title: titleRef.current.value,
            toDoList: toDoListREf.current.value
        };

        setTaskList([...taskList, taskObject]);

        localStorage.setItem('taskDetails', JSON.stringify(taskList));

        dateRef = Date.now();
        titleRef.current.value = '';
        toDoListREf.current.value = '';
    };

    return (
        <div>
            <h4>Task</h4>
            <form onSubmit={onFormSubmit}>
                <label>Date</label>
                <input type='date' ref={dateRef} />
                <br />
                <label>Title</label>
                <input type='text' ref={titleRef} />
                <br />
                <label>To-do list</label>
                <textarea name='task' cols='30' rows='10' ref={toDoListREf}></textarea>
                <input type='submit' />
            </form>
            <TaskList tasks={taskList} />
        </div>
    );
};

export default TaskForm;