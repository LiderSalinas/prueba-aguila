import React from 'react';

const Task = ({ task, index, toggleTask, removeTask }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span style={{ textDecoration: task.completed ? 'line-through' : '' }}>{task.text}</span>
            <div>
                <button className="btn btn-info btn-sm me-2" onClick={() => toggleTask(index)}>Completada</button>
                <button className="btn btn-danger btn-sm" onClick={() => removeTask(index)}>Eliminar</button>
            </div>
        </li>
    );
};

export default Task;
