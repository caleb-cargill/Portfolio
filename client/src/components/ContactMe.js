import { useState } from 'react';
import '../styles/custom.css';
import axios from 'axios';
import { endpoints } from '../api/endpoints';

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
            await axios.post(endpoints.contact, {
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
        <form className="form">
            <div className="form-group">
                <input className="form-input" type="text" placeholder="Name" name="sender" value={sender} onChange={onChange} required />
            </div>
            <div className="form-group">
                <input className="form-input" type="email" placeholder="Email" name="email" value={email} onChange={onChange} required />
            </div>
            <div className="form-group">
                <input className="form-input" type="text" placeholder="Subject" name="subject" value={subject} onChange={onChange} required />
            </div>
            <div className="form-group">
                <textarea className="form-input" rows="4" placeholder="Message" name="message" value={message} onChange={onChange} required />
            </div>
            <button type="submit" className="form-button" onClick={onSubmit}>
                Submit
            </button>
            <p>{feedback}</p>
        </form>
    );
};

export default ContactMe;