import React, { useEffect, useState } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="container">
            {isLoading ? <p className="alert alert-info">Cargando usuarios...</p> : 
                <ul className="list-group">
                    {users.map(user => (
                        <li key={user.id} className="list-group-item">{user.name}</li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default UserList;
