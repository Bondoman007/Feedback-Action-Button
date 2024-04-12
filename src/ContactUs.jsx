import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  background-color: #ffffff;
  padding: 20px;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
 
`;

const Textarea = styled.textarea.attrs({
  rows: 3, // Set the number of visible text lines
  cols: 20, // Set the number of visible characters per line
})`
  width: calc(100% - 40px); /* Adjust width to accommodate the Attach button */
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: none; /* Disallow resizing */
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  background-color: ${props => props.disabled ? "#ccc" : "black"};
  color: ${props => props.disabled ? "rgba(0, 0, 0, 0.5)" : "white"};
  padding: 14px 0;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.disabled ? "#ccc" : "#27282b"};
  }
`;


const Label = styled.label`
  font-weight: bold;
  margin-bottom: 6px;
`;

const ContactUsFormWrapper = styled.div`
  position: fixed;
  bottom:130px;
  right:20px
`;

const ContactUsForm = ({ isLoggedIn ,onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(isLoggedIn ? 'user@example.com' : '');
  const [number, setNumber] = useState(isLoggedIn ? '1234567890' : '');
  const [message, setMessage] = useState('');



  return (
    <ContactUsFormWrapper>
      <Form onSubmit={onSubmit}>
        <Label htmlFor="name">Your Name *</Label>
        <Input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name..." required />

        {!isLoggedIn && (
          <>
            <Label htmlFor="email">Your Email *</Label>
            <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email..." required />

            <Label htmlFor="number">Your Number *</Label>
            <Input type="tel" id="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter your number..." required />
          </>
        )}

        <Label htmlFor="message">Message *</Label>
        <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your message here..." required />

        <Button type="submit" disabled={name.length===0 || email.length===0 || number.length===0 || message.length===0} >Submit</Button>
      </Form>
    </ContactUsFormWrapper>
  );
};

export default ContactUsForm;
