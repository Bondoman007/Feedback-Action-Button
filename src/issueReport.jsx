import React, { useState } from 'react';
import styled from 'styled-components';
import Attach from './svg/Attach -  D.svg'

const Form = styled.form`
  background-color: #ffffff;
  padding: 20px;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const Textarea = styled.textarea.attrs({
  rows: 10, // Set the number of visible text lines
  cols: 50, // Set the number of visible characters per line
})`
  width: calc(100% - 40px); /* Adjust width to accommodate the Attach button */
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: none; /* Disallow resizing */
`;


const AttachButton = styled.label`
  display: inline-block;
  width: 100px;
  height: 40px;
  margin-left: 8px;
  background-color: #ccc;
  border-radius: 4px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  bottom: 60px;
`;

const FileInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;

const AttachIcon = styled.img`
position: absolute; /* Position the image relative to its closest positioned ancestor */
top: 50%; /* Center the image vertically */
left: 50%; /* Center the image horizontally */
transform: translate(-50%, -50%); /* Adjust the position to center the image */
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  appearance: none; /* Remove default arrow */
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" hei'); /* Add custom arrow */
  background-repeat: no-repeat;
  background-position: calc(100% - 12px) center;
  background-size: 18px;
  cursor: pointer;
  outline: none; /* Remove focus outline */
  font-size: 16px;
  font-family: inherit;
  color: #333;
`;

const Option = styled.option`
  font-size: 16px;
  font-family: inherit;
  color: #333;
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

const IsuueFormWrapper = styled.div`
  position: fixed;
  bottom: 130px;
  right: 20px;
`;

const FeedbackForm = ({onSubmit}) => {
  const [section, setSection] = useState('');
  const [issue, setIssue] = useState('');

  

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Handle file attachment here
  };

  return (
    <IsuueFormWrapper>
      <Form onSubmit={onSubmit}>
        <Label htmlFor="section">Choose a section</Label>
        <Select id="section" value={section} onChange={(e) => setSection(e.target.value)}>
          <Option value="">Choose a section</Option> {/* Placeholder */}
          <Option value="interview_questions">Interview Questions</Option>
          <Option value="quizzes">Quizzes</Option>
          <Option value="practical_questions">Practical Questions</Option>
        </Select>

        <Label htmlFor="issue">Describe the issue in detail</Label>
        <Textarea id="issue" value={issue} onChange={(e) => setIssue(e.target.value)} placeholder="Write here..." />
        
        <AttachButton>
          <FileInput type="file" onChange={handleFileChange} />
          <AttachIcon src={Attach} alt="Attach Icon" />
        </AttachButton>

        <Button type="submit" disabled={section.length===0 && issue.length===0}>Submit</Button>
      </Form>
    </IsuueFormWrapper>
  );
};

export default FeedbackForm;
