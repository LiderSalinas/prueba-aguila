import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import TaskList from './components/TaskList';
import UserList from './components/UserList';

function App() {
    return (
        <div className="App container">
            <h1 className="my-4">Prueba Técnica JR Frontend</h1>
            <ContactForm />
            <TaskList />
            <UserList />
        </div>
    );
}

export default App;
