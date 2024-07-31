import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container">
            {submitted ? <p className="alert alert-success">Gracias por tu mensaje!</p> : 
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" required />
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo Electrónico" required />
                    <textarea className="form-control" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Mensaje" required />
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            }
        </div>
    );
};

export default ContactForm;
