// Importing React core, hooks, and styles for the application.
import React, { useEffect, useState } from 'react'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { Button } from 'react-bootstrap'; 

// Importing custom input components for different sections of the resume.
import HeaderInput from './inputs/headerInput';
import ProfileInput from './inputs/profileInput.jsx';
import ResumeInput from './inputs/resumeInput.jsx';
import EducationInput from './inputs/educationInput';
import ExperienceInput from './inputs/experienceInput';
import InputTable from './inputs/inputTable';

// Importing function to export the resume data to a Word document.
import exportToWord from './document/document.jsx';
// Test component (usage not shown in the provided code).
import Test from './document/test.jsx';

// Importing ListGroup component from react-bootstrap for structured list display.
import ListGroup from 'react-bootstrap/ListGroup';
// GptInput component (usage is commented out in the provided code).
import GptInput from './gptInput/gptInput';


// Main App component definition.
function App() {
  // Unused API key declaration.
  const API_KEY = "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";

  // State declarations for managing skills input.
  const [sSkills, setSSkills] = useState([
    { id:0, sName: "react.js"},
    { id:1, sName: "node.js"},
 ]);
  const initialFormState = { id: null, sName: ''}
  const [ currentInput, setCurrentInput ] = useState(initialFormState)

  // States for managing profile, header, degree list, and experience list inputs.
  const[sProfile, setSProfile] = useState("");
  const [sHeader, setSHeader] = useState({});
  const [sDegreeList, setSDegreeList] = useState([]);
  const [sExperienceList, setSExperienceList] = useState([]);

  // State for tracking chat messages.
  const [messages, setMessages] = useState([
    {
      message: 'Hello i am chatgpt input your job description',
      sender: "chatGpt",
      direction: "incoming"
    }
  ]);
  // State for tracking the last message in the chat.
  const [endingLine, setEndingLine] = useState([])

  // Add functions for updating the states with new inputs.
  const addHeader = header => {
    setSHeader(header)
  }
  const addProfile = profile => {
    setSProfile(profile)
  }
  const addSkill = skill => {
    skill.id = sSkills.length + 1
    setSSkills([ ...sSkills, skill ])
  }
  const addDegree = degree => {
    degree.id = sDegreeList.length + 1
    setSDegreeList([ ...sDegreeList, degree ])
  }
  const addExperience = experience => {
    experience.id = sExperienceList.length + 1
    setSExperienceList([ ...sExperienceList, experience ])
  }

  // Function to print data to console, parsing a JSON-like string.
  const printData = () => {
    const inputString =endingLine.message
    var jsonString = inputString.substring(
      inputString.indexOf("{"),
      inputString.lastIndexOf("}") + 1
  );

    try {
        var contactInfo = eval('(' + jsonString + ')');
        console.log("Name: " + contactInfo.Name);
        console.log("PhoneNumber: " + contactInfo.PhoneNumber);
    } catch (error) {
        console.error("Error parsing the string", error);
    }
  }

  // useEffect hook to update the ending line and log state changes.
  useEffect(() => {
    setEndingLine(messages[messages.length-1])
    console.log("endingline:",endingLine.message);
    console.log("sSkills:",sSkills); 
    console.log("sProfile:",sProfile);
    console.log("sHeader:",sHeader);
    console.log("sDegreeList:",sDegreeList);
    console.log("sExperienceList:",sExperienceList);
  }, [messages, endingLine, sSkills, sProfile,sHeader,sDegreeList,sExperienceList]);

  // Render method that returns the UI for the application.
  return (
    <div className= "App">
        <div className="d-flex">
            <div className="mr-3">
                <ul className="list-group">
                    {/* Input fields for resume sections */}
                    <li className="list-group-item">
                        <HeaderInput addHeader = {addHeader} />
                    </li>
                    <li className="list-group-item">
                        <ProfileInput addProfile = {addProfile} />
                    </li>
                    <li className="list-group-item">
                        <ResumeInput addSkill={addSkill} />
                    </li>
                    <li className='list-group-item'>
                        <EducationInput addDegree = {addDegree} />
                    </li>
                    <li className='list-group-item'>
                        <ExperienceInput addExperience = {addExperience} />
                    </li>
                </ul>
            </div>
            <div>
                <ul className="list-group">
                    {/* Table component that displays the inputted data */}
                    <li className="list-group-item">
                        <InputTable 
                        sSkills={sSkills} 
                        sProfile = {sProfile} 
                        sHeader = {sHeader}
                        sDegreeList = {sDegreeList}
                        sExperienceList = {sExperienceList}
                        />
                    </li>
                </ul>
            </div>
        </div>
      <div>
        The GptInput component is commented out, but it's supposed to send and receive messages from an API */}
        {/* <GptInput API_KEY = {API_KEY} messages = {messages} setMessages = {setMessages} sSkills = {sSkills}/> */}
        {/* The button to export the resume to a Word document is also commented out */}
        {/* <button onClick={exportToWord}>Export to Word</button> 
      </div>
      <div>
        {/* Button to print data is commented out */}
        {/* <button onClick = {printData}>Print Data</button> */}
      </div>

    </div>
  )
}

// Exporting the App component for use in other parts of the application.
export default App
