import React, { useState } from 'react';
import './App.css';
import ContactUs from './ContactUs';
import IssueForm from './issueReport';
import SuggestionsForm from './suggestions';
import FeedbackForm from './feedback1.jsx';
import closeImg from './svg/close.svg';
import issueImg from './svg/issue.svg';
import defaultImg from './svg/Default.svg';
import feedbackImg from './svg/Feedback,.svg';
import suggestionImg from './svg/suggestion.svg';
import contactUsImg from './svg/contactUs.svg';
import contactHoverImg from './svg/Contact us Onhover.svg';
import issueImgHover from './svg/Report issue Onhover.svg';
import feedbackImgHover from './svg/Feedback, Onhover.svg';
import suggestionImgHover from './svg/Suggestion Onhover.svg';
import styled from 'styled-components';
import feedbackMsg from './svg/feedbackThankyou.svg'
import contactUsMsg from './svg/contactusMsg.svg'
import suggestionMsg from './svg/suggestionMsg.svg'
import issueMsg from './svg/IssueMsg.svg'
import Img1 from './svg/1.svg'
import Img2 from './svg/2.svg'
import Img3 from './svg/3.svg'
import Img4 from './svg/4.svg'


const ButtonWrapper = styled.div`
  bottom:30px;
  right:20px;
`;

const ThankYouImg = styled.img`
  position: fixed;
  bottom: 70px;
  right: 10px;
  width: 400px; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
`;

const ThankYouImg1 = styled.img`
  position: fixed;
  bottom: 100px;
  right: 10px;
  width: 400px; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
`;

const Image1 = styled.img`
  position: fixed;
  bottom: 270px;
  right: 100px;
  width: 200px; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
`;
const Image2 = styled.img`
  position: fixed;
  bottom: 130px;
  right: 100px;
  width: 200px; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
`;
const Image3 = styled.img`
  position: fixed;
  bottom: 200px;
  right: 100px;
  width: 200px; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
`;
const Image4 = styled.img`
  position: fixed;
  bottom: 340px;
  right: 100px;
  width: 150px; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
`;
function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showIssueForm, setShowIssueForm] = useState(false);
  const [showSuggestionsForm, setShowSuggestionsForm] = useState(false);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to store login status
  const [isFeedbackSubmit,setisFeedbackSubmit] = useState(false);
  const [isSuggestionSubmit,setisSuggestionSubmit] = useState(false);
  const [isIssueSubmit,setisIssueSubmit] = useState(false);
  const [isContactUsSubmit,setisContactUsSubmit] = useState(false);
  
 

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setisFeedbackSubmit(false)
    setisContactUsSubmit(false)
    setisIssueSubmit(false)
    setisSuggestionSubmit(false)
  };

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
    setShowIssueForm(false);
    setShowSuggestionsForm(false);
    setShowFeedbackForm(false);
  };

  const toggleFeedbackForm = () => {
    setShowIssueForm(!showIssueForm);
    setShowContactForm(false);
    setShowSuggestionsForm(false);
    setShowFeedbackForm(false);
  };

  const toggleSuggestionsForm = () => {
    setShowSuggestionsForm(!showSuggestionsForm);
    setShowContactForm(false);
    setShowIssueForm(false);
    setShowFeedbackForm(false);
  };

  const toggleFeedback = () => {
    setShowFeedbackForm(!showFeedbackForm);
    setShowContactForm(false);
    setShowIssueForm(false);
    setShowSuggestionsForm(false);
  };

  const handleLoginChange = (e) => {
    setIsLoggedIn(e.target.checked);
  };

  function handleFeedbackSubmit() {
      setShowMenu(false)
      setisFeedbackSubmit(!isFeedbackSubmit)
      
  }

  function handleSuggestionSubmit() {
      setShowMenu(false)
      setisSuggestionSubmit(!isSuggestionSubmit)
  }

  function handleContactUsSubmit() {
      setShowMenu(false)
      setisContactUsSubmit(!isContactUsSubmit)
  }

  function handleIssueSubmit() {
    setShowMenu(false)
    setisIssueSubmit(!isIssueSubmit)
  }

  const value = showContactForm || showIssueForm || showSuggestionsForm || showFeedbackForm ? "float-buttons1" : "float-buttons";

  return (
    <div className="App">
    <div className="login-checkbox">
        <label>
          <input type="checkbox" onChange={handleLoginChange} />
          Logged in
        </label>
      </div>
      {(showIssueForm && showMenu) && <IssueForm onSubmit={handleIssueSubmit}/>}
      {(showContactForm && showMenu) && <ContactUs isLoggedIn={isLoggedIn} onSubmit={handleContactUsSubmit}/>} {/* Pass isLoggedIn to ContactUs component */}
      {(showSuggestionsForm && showMenu) && <SuggestionsForm onSubmit={handleSuggestionSubmit}/>}
      {(showFeedbackForm && showMenu) && <FeedbackForm onSubmit={handleFeedbackSubmit} />}
      {(isFeedbackSubmit && !showMenu )&& <ThankYouImg src={feedbackMsg} alt="Thank You" />}
      {(isSuggestionSubmit && !showMenu )&& <ThankYouImg src={suggestionMsg} alt="Thank You" />}
      {(isContactUsSubmit && !showMenu )&& <ThankYouImg src={contactUsMsg} alt="Thank You" />}
      {(isIssueSubmit&& !showMenu )&& <ThankYouImg1 src={issueMsg} alt="Thank You" />}
        
      {showMenu && (
        <div className={value}>
          <button className="float-button" onClick={toggleContactForm} >
            <img src={showContactForm ? contactHoverImg : contactUsImg} alt="Contact Us" />
          </button>
          {(!showContactForm && !showIssueForm && !showSuggestionsForm && !showFeedbackForm) && <Image1 src={Img1} alt="image" />}
          <button className="float-button" onClick={toggleFeedbackForm} >
            <img src={showIssueForm ? issueImgHover : issueImg} alt="Issue" />
          </button>
          {(!showContactForm && !showIssueForm && !showSuggestionsForm && !showFeedbackForm) && <Image3 src={Img3} alt="image" />}
          <button className="float-button" onClick={toggleSuggestionsForm} >
            <img src={showSuggestionsForm ? suggestionImgHover : suggestionImg} alt="Suggestion" />
          </button>
          {(!showContactForm && !showIssueForm && !showSuggestionsForm && !showFeedbackForm) && <Image4 src={Img4} alt="image" />}
          <button className="float-button" onClick={toggleFeedback} >
            <img src={showFeedbackForm ? feedbackImgHover : feedbackImg} alt="Feedback" />
          </button>
          {(!showContactForm && !showIssueForm && !showSuggestionsForm && !showFeedbackForm) && <Image2 src={Img2} alt="image" />}
        </div>
      )}
      
      <button className="menu-button" onClick={toggleMenu}>
        <img src={showMenu ? closeImg : defaultImg} alt="Default" />
      </button>
    </div>
  );
}

export default App;
