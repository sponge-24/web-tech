import React, { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent: ${message}`);
    setMessage('');
  };

  return (
    <div className="text-center p-5">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          placeholder="Your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
