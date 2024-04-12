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
  rows: 8,
  cols: 20,
})`
  width: calc(100% - 40px);
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: none;
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

const FeedbackFormWrapper = styled.div`
  position: fixed;
  bottom:130px;
  right:20px;
`;

const ThankYouImg = styled.img`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 100px; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
`;

const FeedbackForm = ({onSubmit}) => {
  const [feedback, setFeedback] = useState('');
  
  

  return (
    <>
      <FeedbackFormWrapper>
        <Form onSubmit={onSubmit}>
          <Label htmlFor="feedback">Feedback</Label>
          <Textarea id="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Write your feedback here..." />
          <Button type="submit" disabled={feedback.length === 0}>Submit</Button>
        </Form>
      </FeedbackFormWrapper>
    
    </>
  );
};

export default FeedbackForm;
