import react, { useState } from 'react';
import '../styles/style.css';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        sender: '',
        email: '',
        subject: '',
        message: ''
    });
    const { sender, email, subject, message } = formData;
    const [feedback, setFeedback] = useState('');

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            // TODO: Send email
            setFeedback('Message successfully sent. Thank you!');
        } catch (err) {
            console.error(err.response.data);
            setFeedback('Sorry! Something went wrong when sending this message.');
        }
    };

    return (
        <div className="form">
            <h2 className="accentHeader">Contact Me</h2>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Name" name="name" value={sender} onChange={onChange} required />
                <input type="email" placeholder="Email" name="email" value={email} onChange={onChange} required />
                <input type="text" placeholder="Subject" name="subject" value={subject} onChange={onChange} required />
                <input type="text" placeholder="Message" name="message" value={message} onChange={onChange} required />
            </form>
        </div>
    );
};

export default ContactMe;