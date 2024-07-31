import React, { useState } from 'react';
import Task from './Task';
import TaskInput from './TaskInput';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, { text: task, completed: false }]);
    };

    const toggleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div>
            <TaskInput addTask={addTask} />
            <ul>
                {tasks.map((task, index) => (
                    <Task 
                        key={index} 
                        task={task} 
                        index={index} 
                        toggleTask={toggleTask} 
                        removeTask={removeTask} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
