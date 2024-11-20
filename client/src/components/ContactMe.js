import react, { useState } from 'react';
import '../styles/style.css';
import axios from 'axios';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        sender: '',
        email: '',
        subject: '',
        message: ''
    });
    const { sender, email, subject, message } = formData;
    const [feedback, setFeedback] = useState('');

    const resetForm = () => 
    {
        setFormData({
            sender: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            
            setFeedback('Sending Message...'); 
            await axios.post('http://localhost:5000/contact', {
                sender,
                email,
                subject, 
                message
            });
            setFeedback('Message successfully sent. Thank you!');     
            resetForm();       
        } catch (err) {
            if (err.response && err.response.data) {
                console.error(err.response.data);
            } else {
                console.error('An unknown error occurred:', err);
            }
            setFeedback('Sorry! Something went wrong when sending this message.');
        }        
    };

    return (
        <div className="form">
            <h2 className="accentHeader">Contact Me</h2>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Name" name="sender" value={sender} onChange={onChange} required />
                <input type="email" placeholder="Email" name="email" value={email} onChange={onChange} required />
                <input type="text" placeholder="Subject" name="subject" value={subject} onChange={onChange} required />
                <textarea rows="4" placeholder="Message" name="message" value={message} onChange={onChange} required />
                <input type="submit" value="Send" />
            </form>
            <p>{feedback}</p>
        </div>
    );
};

export default ContactMe;