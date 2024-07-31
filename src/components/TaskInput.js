import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            addTask(value);
            setValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <input 
                type="text" 
                className="form-control" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                placeholder="Nueva tarea" 
                required 
            />
            <button type="submit" className="btn btn-success mt-2">Agregar</button>
        </form>
    );
};

export default TaskInput;
