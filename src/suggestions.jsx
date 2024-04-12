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
  rows: 6, // Set the number of visible text lines
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

const Select = styled.select`
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

const SuggestionFormWrapper = styled.div`
  position: fixed;
  bottom:130px;
  right:20px
`;

const SuggestionsForm = ({onSubmit}) => {
  const [section, setSection] = useState('');
  const [suggestion, setSuggestion] = useState('');

  

  return (
    <SuggestionFormWrapper>
    <Form onSubmit={onSubmit}>
    <Label htmlFor="section">Choose a section</Label>
    <Select id="section" value={section} onChange={(e) => setSection(e.target.value)}>
      <option value="">Select</option>
      <option value="features">Features</option>
      <option value="improvements">Improvements</option>
      <option value="bugs">Bugs</option>
      {/* Add other options here */}
    </Select>

    <Label htmlFor="suggestion">Describe your suggestion</Label>
    <Textarea id="suggestion" value={suggestion} onChange={(e) => setSuggestion(e.target.value)} placeholder="Write here..." />

    <Button type="submit" disabled={section.length===0 || suggestion.length===0}>Submit</Button>
  </Form>
  
    
    </SuggestionFormWrapper>
   
   
    
  );
};

export default SuggestionsForm;
